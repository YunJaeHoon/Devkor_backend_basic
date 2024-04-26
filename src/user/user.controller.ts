import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from 'src/entities';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';

@Controller('user')
@UseFilters(HttpExceptionFilter)
export class UserController
{
  constructor(private readonly userService: UserService){}

  @Get()
  async getUsers(): Promise<UserEntity[]>
  {
    return await this.userService.getUsers();
  }

  @Post()
  async addUser(@Body() info)
  {
    return await this.userService.addUser(info);
  }

  @Delete()
  async deleteUser(@Body() info)
  {
    return await this.userService.deleteUser(info.email);
  }

  @Get("/find")
  async findByEmail(@Body() info)
  {
    return await this.userService.findByEmail(info.email);
  }

  @Put("/password")
  async updatePassword(@Body() info)
  {
    return await this.userService.updatePassword(info.email, info.password);
  }

}
