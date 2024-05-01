import { Body, Controller, Delete, Get, Post, Put, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
import { PostService } from './post.service';
import { PostResponseDto } from 'src/dtos/post.response.dto';
import { AuthorIdRequestDto, PostRequestDto, TitleRequestDto } from 'src/dtos/post.request.dto';

@Controller('user')
@UseFilters(HttpExceptionFilter)
export class PostController
{
  constructor(private readonly postService: PostService){}

  @Get()
  async getPosts(): Promise<PostResponseDto[]>
  {
    return await this.postService.getPosts();
  }

  @Post()
  async addPost(@Body() body: PostRequestDto): Promise<PostResponseDto>
  {
    return await this.postService.addPost(body);
  }

  @Delete()
  async deletePost(@Body() body: AuthorIdRequestDto): Promise<void>
  {
    return await this.postService.deletePost(body);
  }

  @Get("/find")
  async findByAuthorId(@Body() body: AuthorIdRequestDto): Promise<PostResponseDto[]>
  {
    return await this.postService.findByAuthorId(body);
  }

  @Put("/content")
  async updateContent(@Body() body: TitleRequestDto): Promise<void>
  {
    return await this.postService.updateContent(body);
  }

}
