import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PostRequestDto } from "src/dtos/post.request.dto";
import { PostEntity, UserEntity } from "src/entities";
import { Repository } from "typeorm";

@Injectable()
export class PostRepository
{
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async findAll(): Promise<PostEntity[]>
  {
    const posts = await this.postRepository.find();
    return posts;
  }

  async findByAuthorId(author_id: UserEntity): Promise<PostEntity[]>
  {
    const posts = await this.postRepository.find({ where: { author_id } });
    return posts;
  }

  async create(info: PostRequestDto): Promise<PostEntity>
  {
    const post = this.postRepository.create(info);
    return await this.postRepository.save(post);
  }

  async existsByAuthorId(author_id: UserEntity): Promise<boolean>
  {
    const post = await this.postRepository.exists({ where: { author_id } });
    return post;
  }

  async deleteByAuthorId(author_id: UserEntity): Promise<void>
  {
    if(await this.existsByAuthorId(author_id))
    {
      await this.postRepository.delete({ author_id });
    }
    else
    {
      throw new HttpException('post not found', 404);
    }
  }

  async existsByTitle(title: string): Promise<boolean>
  {
    const post = await this.postRepository.exists({ where: { title } });
    return post;
  }

  async updateContent(title: string, content: string): Promise<void>
  {
    if(await this.existsByTitle(title))
    {
      await this.postRepository.update({ title }, { content });
    }
    else
    {
      throw new HttpException('user not found', 404);
    }
  }
}