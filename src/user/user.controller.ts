import { Body, Controller, Delete, Get, Post, Put, UseFilters } from '@nestjs/common';
import { UserService } from './user.service';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
import { EmailRequestDto, PasswordRequestDto, UserRequestDto } from 'src/dtos/user.request.dto';
import { UserResponseDto } from 'src/dtos/user.response.dto';

@Controller('user')
@UseFilters(HttpExceptionFilter)
export class UserController
{
  constructor(private readonly userService: UserService){}

  @Get()
  async getUsers(): Promise<UserResponseDto[]>
  {
    return await this.userService.getUsers();
  }

  @Post()
  async addUser(@Body() body: UserRequestDto): Promise<UserResponseDto>
  {
    return await this.userService.addUser(body);
  }

  @Delete()
  async deleteUser(@Body() body: EmailRequestDto): Promise<void>
  {
    return await this.userService.deleteUser(body);
  }

  @Get("/find")
  async findByEmail(@Body() body: EmailRequestDto): Promise<UserResponseDto>
  {
    return await this.userService.findByEmail(body);
  }

  @Put("/password")
  async updatePassword(@Body() body: PasswordRequestDto): Promise<void>
  {
    return await this.userService.updatePassword(body);
  }

}
