import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { PostEntity, UserEntity } from "src/entities";

export class PostResponseDto
{
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  author_id: UserEntity;

  @IsOptional()
  @IsNumber()
  likes?: number;

  constructor(postEntity: PostEntity)
  {
    this.title = postEntity.title;
    this.content = postEntity.content;
    this.author_id = postEntity.author_id;
    this.likes = postEntity.likes;
  }
}
