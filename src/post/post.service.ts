import { Injectable } from '@nestjs/common';
import { AuthorIdRequestDto, PostRequestDto, TitleRequestDto } from 'src/dtos/post.request.dto';
import { PostResponseDto } from 'src/dtos/post.response.dto';
import { EmailRequestDto, PasswordRequestDto, UserRequestDto } from 'src/dtos/user.request.dto';
import { UserResponseDto } from 'src/dtos/user.response.dto';
import { PostRepository } from 'src/repositories/post.repository';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class PostService
{
  constructor(private readonly postRepository: PostRepository) {}

  async getPosts(): Promise<PostResponseDto[]>
  {
    const postEntity = await this.postRepository.findAll();
    const posts = postEntity.map((post) => new PostResponseDto(post));
    return posts;
  }

  async findByAuthorId(body: AuthorIdRequestDto): Promise<PostResponseDto[]>
  {
    const postEntity = await this.postRepository.findByAuthorId(body.author_id);
    const posts = postEntity.map((post) => new PostResponseDto(post));
    return posts;
  }

  async addPost(body: PostRequestDto): Promise<PostResponseDto>
  {
    const newPostEntity = await this.postRepository.create(body);
    const newPost = new PostResponseDto(newPostEntity);
    return newPost;
  }

  async deletePost(body: AuthorIdRequestDto): Promise<void>
  {
    await this.postRepository.deleteByAuthorId(body.author_id);
  }

  async updateContent(body: TitleRequestDto): Promise<void>
  {
    await this.postRepository.updateContent(body.title, body.content);
  }
}
