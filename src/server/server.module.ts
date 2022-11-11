import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regions } from '../entities/Regions';
import { Countries } from '../entities/Countries';
import { MulterModule } from '@nestjs/platform-express';
import { RegionsController } from './Controller/regions.controller';
import { ConfigMulter } from './Middleware/multer.conf';
import { Users } from '../entities/Users';
import { UsersService } from './Services/user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './Auth/local.strategy';
import { JwtStrategy } from './Auth/jwt.strategy';
import { UserController } from './Controller/user.controller';
import { RegionsService } from './Services/regions.service';
import { CountriesController } from './Controller/countries.controller';
import { CountriesService } from './Services/countries.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Regions, Countries, Users]),
    MulterModule.register(ConfigMulter.UploadFiles()),
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60d' },
    }),
  ],
  providers: [
    UsersService,
    RegionsService,
    LocalStrategy,
    JwtStrategy,
    CountriesService,
  ],
  controllers: [RegionsController, UserController, CountriesController],
  exports: [UsersService],
})
export class ServerModule {}
