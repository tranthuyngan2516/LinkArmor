import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinksModule } from './modules/links/links.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'oracle',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        serviceName: configService.get<string>('DB_SERVICE_NAME'),
        synchronize: configService.get<boolean>('DB_SYNCHRONIZE'),
        logging: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
      inject: [ConfigService],
    }),
    LinksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
