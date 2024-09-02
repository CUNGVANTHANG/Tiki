import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  updateUser() {}

  @Delete(':id')
  deleteUser() {}

  @Get(':id')
  getUser() {}
}
