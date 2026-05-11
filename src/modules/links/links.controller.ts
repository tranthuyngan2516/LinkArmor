import { Controller, Post, Get, Body, Param, Res, Req, UseGuards } from '@nestjs/common';
import { LinksService } from './links.service';
import type { Response, Request } from 'express';
import { CreateLinkDto } from '../../dto/links.dto';
import { RateLimitGuard } from 'src/common/guards/rate-limit.guard';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post('shorten')
  @UseGuards(RateLimitGuard)
  async shorten(@Body()createLinkDto: CreateLinkDto) {
    return this.linksService.shorten(createLinkDto.url);
  }

  @Get(':code')
  async redirect(@Param('code') code: string,@Req() req: Request, @Res() res: Response ) {
    const ip = req.ip || req.connection?.remoteAddress || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';
    const originalUrl = await this.linksService.getOriginalUrl(code, ip, userAgent);
    return res.redirect(originalUrl);
  }
}
