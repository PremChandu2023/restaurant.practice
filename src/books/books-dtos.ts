// bookResponses.ts
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class BookProperties {
  @ApiProperty({ type: Number, example: 1 })
  id: number;

  @ApiProperty({ type: String, example: "Book 1" })
  title: string;

  @ApiProperty({ type: String, example: "Author 1" })
  author: string;

  @ApiProperty({ type: Number, example: 2022 })
  publishedYear: number;

  @ApiProperty({ type: String, example: "Fiction" })
  genre: string;
    
  
}

export class createQuestionDto {
    @IsString()
    title:string
}

export class createCategoryDto {
  @IsString()
  title:string
}

export class createPhotoDto {
  @IsString()
  description:string
}

export class createUserDto {
@IsString()
name:string
}






