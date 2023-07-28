import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";


export class GetBookDto {
    @ApiProperty()
    id : string
}

export class Books {
    @ApiProperty()
    bookid : number
    @ApiProperty()
    bookName : string
    @ApiProperty()
    bookAuthor : string

    @ApiProperty()
    isPresent : boolean

}

export class Library {

    @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  authors : AuthorDTO[]

}

export class AuthorDTO {

    @ApiProperty()
    name: string;
  
    @ApiProperty({ type: [String] })
    publishedWorks: string[];
  
    @ApiProperty()
    genre?: string;
}

export class ErrorResponse {

    @ApiProperty()
    statusCode: number;

    @ApiProperty()
    message : string;
    
}





