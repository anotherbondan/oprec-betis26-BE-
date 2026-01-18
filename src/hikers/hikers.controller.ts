import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { HikerService } from './hikers.service';
import { CreateHikerDto } from './dto/create-hiker.dto';
import { UpdateHikerDto } from './dto/update-hiker.dto';

@Controller('hikers')
export class HikerController {
  constructor(private readonly hikerService: HikerService) {}

  @Post()
  create(@Body() dto: CreateHikerDto) {
    return this.hikerService.create(dto);
  }

  @Get()
  findAll() {
    return this.hikerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hikerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateHikerDto) {
    return this.hikerService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hikerService.remove(id);
  }
}
