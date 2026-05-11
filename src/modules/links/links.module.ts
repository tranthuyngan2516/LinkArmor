import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from './link.entity';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';
import {LinkAnalytics} from './linkAnalytics.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Link, LinkAnalytics])],
  providers: [LinksService],
  controllers: [LinksController],
})
export class LinksModule {}
