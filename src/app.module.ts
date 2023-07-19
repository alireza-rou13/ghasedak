import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CityModule } from './city/city.module';
import { BookingLocationModule } from './bookinglocation/bookinglocation.module';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    CityModule,
    BookingLocationModule,
    AuthModule,
    SettingsModule,
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
