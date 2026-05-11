import { Link } from "./link.entity";
export declare class LinkAnalytics {
    id: number;
    link: Link;
    ip: string;
    userAgent: string;
    clickedAt: Date;
}
