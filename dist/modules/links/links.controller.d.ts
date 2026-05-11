import { LinksService } from './links.service';
import type { Response, Request } from 'express';
import { CreateLinkDto } from '../../dto/links.dto';
export declare class LinksController {
    private readonly linksService;
    constructor(linksService: LinksService);
    shorten(createLinkDto: CreateLinkDto): Promise<import("./link.entity").Link>;
    redirect(code: string, req: Request, res: Response): Promise<void>;
}
