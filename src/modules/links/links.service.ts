import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Link } from './link.entity';
import { nanoid } from 'nanoid';
import { LinkAnalytics } from './linkAnalytics.entity';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(Link)
    private readonly linkRepository: Repository<Link>,

    @InjectRepository(LinkAnalytics)
    private readonly linkAnalyticsRepository: Repository<LinkAnalytics>,
  ) {}

  async shorten(originalUrl: string): Promise<Link> {
    const exitLink = await this.linkRepository.findOne({where: {originalUrl}})
    if(exitLink) {
      return exitLink;
    }
    const shortCode = nanoid(7); // Tạo code 7 ký tự
    const link = this.linkRepository.create({
      originalUrl,
      shortCode, 
    });
    return this.linkRepository.save(link);
  }

  async getOriginalUrl(shortCode: string, ip: string, userAgent: string): Promise<string> {
    const link = await this.linkRepository.findOne({ where: { shortCode } });
    if (!link) {
      throw new NotFoundException('Mã rút gọn không tồn tại');
    }
    const analytics = this.linkAnalyticsRepository.create({
      link: link,
      ip: ip,
      userAgent: userAgent,
    })
    this.linkAnalyticsRepository.save(analytics)
    await this.linkRepository.save(link);
    
    return link.originalUrl;
  }
}
