import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BookingModule } from './booking/booking.module';
import { UsersModule } from './users/users.module';
import { CityModule } from './city/city.module';
import { BookingLocationModule } from './bookinglocation/bookinglocation.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    BookingModule,
    UsersModule,
    CityModule,
    BookingLocationModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
