import { Repository } from 'typeorm';
import { Link } from './link.entity';
import { LinkAnalytics } from './linkAnalytics.entity';
export declare class LinksService {
    private readonly linkRepository;
    private readonly linkAnalyticsRepository;
    constructor(linkRepository: Repository<Link>, linkAnalyticsRepository: Repository<LinkAnalytics>);
    shorten(originalUrl: string): Promise<Link>;
    getOriginalUrl(shortCode: string, ip: string, userAgent: string): Promise<string>;
}
