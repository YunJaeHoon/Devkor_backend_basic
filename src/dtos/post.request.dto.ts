import { PickType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { UserEntity } from "src/entities";

export class PostRequestDto
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
}

export class TitleRequestDto extends PickType(PostRequestDto, ['title', 'content'] as const) {}

export class AuthorIdRequestDto extends PickType(PostRequestDto, ['author_id'] as const) {}