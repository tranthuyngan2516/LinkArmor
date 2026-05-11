"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const link_entity_1 = require("./link.entity");
const nanoid_1 = require("nanoid");
const linkAnalytics_entity_1 = require("./linkAnalytics.entity");
let LinksService = class LinksService {
    linkRepository;
    linkAnalyticsRepository;
    constructor(linkRepository, linkAnalyticsRepository) {
        this.linkRepository = linkRepository;
        this.linkAnalyticsRepository = linkAnalyticsRepository;
    }
    async shorten(originalUrl) {
        const exitLink = await this.linkRepository.findOne({ where: { originalUrl } });
        if (exitLink) {
            return exitLink;
        }
        const shortCode = (0, nanoid_1.nanoid)(7);
        const link = this.linkRepository.create({
            originalUrl,
            shortCode,
        });
        return this.linkRepository.save(link);
    }
    async getOriginalUrl(shortCode, ip, userAgent) {
        const link = await this.linkRepository.findOne({ where: { shortCode } });
        if (!link) {
            throw new common_1.NotFoundException('Mã rút gọn không tồn tại');
        }
        const analytics = this.linkAnalyticsRepository.create({
            link: link,
            ip: ip,
            userAgent: userAgent,
        });
        this.linkAnalyticsRepository.save(analytics);
        await this.linkRepository.save(link);
        return link.originalUrl;
    }
};
exports.LinksService = LinksService;
exports.LinksService = LinksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(link_entity_1.Link)),
    __param(1, (0, typeorm_1.InjectRepository)(linkAnalytics_entity_1.LinkAnalytics)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LinksService);
//# sourceMappingURL=links.service.js.map