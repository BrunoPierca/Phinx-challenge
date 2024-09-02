import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DBConfiguration, EnvConfiguration, JoiValidationSchema } from './config';
import { BattleModule } from './battle/battle.module';
import { SeedService } from './seed/seed.service';
import { SeedModule } from './seed/seed.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [EnvConfiguration, DBConfiguration],
      validationSchema: JoiValidationSchema
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
      }),
      inject: [ConfigService],
    }),
    SeedModule,
    PokemonModule,
    BattleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly seedService: SeedService) {
    this.seedService.seed();
  }
}
