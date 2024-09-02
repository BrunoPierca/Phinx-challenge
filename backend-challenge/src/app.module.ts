import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration, JoiValidationSchema } from './config';
import { BattleModule } from './battle/battle.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DB_FILE_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.NODE_ENV === 'development' ? true : false,
    }),
    PokemonModule,
    BattleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
