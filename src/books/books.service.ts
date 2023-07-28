
import { ApiProperty } from "@nestjs/swagger";


export class GetBookId {
    @ApiProperty({example : 200})
    statusCode : number;

    @ApiProperty({example : 1})
    id : string;
}

export class Books {
    @ApiProperty({example : 1})
    bookid : number
    @ApiProperty({example : "book1"})
    bookName : string
    @ApiProperty({example : "author1"})
    bookAuthor : string

    @ApiProperty()
    isPresent : boolean

}

export class Library {

    @ApiProperty({example : 1})
  id: number;

  @ApiProperty({example : "land of death"})
  title: string;

  @ApiProperty({example : "tangsan"})
  authors : Authors[]

}

export class Authors {

    @ApiProperty({example: "chandu"})
    name: string;
  
    @ApiProperty({ type: [String] ,example:{} })
    publishedWorks: string[];
  
    @ApiProperty({example:"mystery"})
    genre?: string;
}

export class ErrorResponse {

    @ApiProperty({example : 200})
    statusCode: number;

    @ApiProperty({example : "Given Request has been executed succesfully"})
    message : string;
    
}
