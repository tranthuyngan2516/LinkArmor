import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import Redis from "ioredis";

@Injectable()
export class RateLimitGuard implements CanActivate {
    private redis: Redis;

    constructor() {
        this.redis = new Redis({
            host: 'localhost',
            port: 6379,
        });
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const ip = request.ip || 'unknown';
        const key = `rate_limit:${ip}`;

        // 1. Dùng lệnh INCR để tăng bộ đếm cho IP này
        const currentCount = await this.redis.incr(key);

        // 2. Nếu là lần đầu tiên (count === 1), hãy đặt thời gian hết hạn là 60s
        if (currentCount === 1) {
            await this.redis.expire(key, 60);
        }

        // 3. Kiểm tra xem đã vượt quá giới hạn chưa? (Ví dụ: 5 lần/phút)
        if (currentCount > 5) {
            throw new HttpException(
                'Bạn đã thao tác quá nhanh. Hãy thử lại sau 1 phút!', 
                HttpStatus.TOO_MANY_REQUESTS
            );
        }

        return true; // Cho phép đi tiếp vào Controller
    }
}
