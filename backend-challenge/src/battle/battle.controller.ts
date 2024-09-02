import { Controller, Get, Post, Body} from '@nestjs/common';
import { BattleService } from './battle.service';
import { CreateBattleDto } from './dto/create-battle.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Battle')
@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) { }

  @Post()
  create(@Body() createBattleDto: CreateBattleDto) {
    return this.battleService.create(createBattleDto);
  }

  @Get()
  findAll() {
    return this.battleService.findAll();
  }

}
