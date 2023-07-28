import { Body, Controller, Get, NotFoundException, Param, Post, Put, Headers, Redirect, Delete, Query, Res } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags, ApiHeader, ApiBody, ApiOkResponse, ApiProperty, ApiNotFoundResponse, getSchemaPath, ApiUnauthorizedResponse, ApiForbiddenResponse, ApiInternalServerErrorResponse, ApiCreatedResponse, ApiBadRequestResponse, ApiConflictResponse } from "@nestjs/swagger";
import {ApiResponses} from "./books-responses"
import { BookProperties } from "./books-dtos";
import { Books, GetBookId, Library } from "./books.service";

@Controller("/book")
@ApiTags("Book")
export class Bookscontroller {
  //Get request
  @Get('/:id')
  @ApiOperation({ summary: 'Get all books' })

  // @ApiOkResponse({ description: 'Book data found' })
  @ApiOkResponse(ApiResponses.get.ok)
  @ApiBadRequestResponse(ApiResponses.get.Badrequest)
  @ApiUnauthorizedResponse(ApiResponses.get.unauthorized)
  @ApiForbiddenResponse(ApiResponses.get.forbidden)
  @ApiInternalServerErrorResponse(ApiResponses.get.internalservererror)
  @ApiHeader({ name: 'Authorization', description: 'requires authorization' })
  getBooks(@Param('id') bookId: GetBookId) {
    let bookID: number = parseInt(bookId.id)
    const books = [
      {
        id: 1,
        title: "Book 1",
        author: "Author 1",
        publishedYear: 2022,
        genre: "Fiction"
      },
      {
        id: 2,
        title: "Book 2",
        author: "Author 2",
        publishedYear: 2019,
        genre: "Mystery"
      },
      {
        id: 3,
        title: "Book 3",
        author: "Author 3",
        publishedYear: 2020,
        genre: "Fantasy"
      }
    ]
    const book11 = books.filter((book) => {
      if (book.id === bookID) {
        return book;
      }
    })
    let book12 = "this book with id " + book11[0].id + " and title " + book11[0].title + " is written by " + book11[0].author
    return book12;
  }
  /////post ******
  @Post("/")
  @ApiHeader({ name: 'Authorization', description: 'Bearer token for authentication' })
  @ApiOperation({ summary: 'Add the books in books array' })
  @ApiBody({

    description: "Book object to be created",
    type: Books
  })
  @ApiCreatedResponse(ApiResponses.post.created)
  @ApiBadRequestResponse(ApiResponses.post.badrequest)
  @ApiConflictResponse(ApiResponses.post.conflict)
  @ApiInternalServerErrorResponse(ApiResponses.post.internalServerError)
  createBook(@Body() createBook: Books, @Headers('authorization') authorization): any {
    let books: Books[] = [];
    let newBook = {
      id: books.length + 1,
      ...createBook,
    }
    return newBook;
  }
  ///put request api
  @Put(":id")
  @ApiOperation({summary : "Update a book"})
  @ApiBody({
    description: "Books to be updated",
    examples: {
      example1: {
        description: "All the required fields needed to be given in body section",
        value: {
          title: 'Book Title 1',
          author: 'Author 1',
          publishedYear: 2022,
          genre: 'Fiction',
        }
      },
    },type : BookProperties
  })
  @ApiOkResponse(ApiResponses.put.success)
  @ApiBadRequestResponse(ApiResponses.put.badrequest)
  @ApiNotFoundResponse(ApiResponses.put.Notfound)
  @ApiUnauthorizedResponse(ApiResponses.get.unauthorized)
  updateBook(@Param('id') id: number, @Body() updateBook: Book) {
    const books: Book[] = [{
      id: 1,
      book_Name: "book1",
      book_author: "author1"
    },
    {
      id: 2,
      book_Name: "book2",
      book_author: "author2"
    },
    {
      id: 3,
      book_Name: "book3",
      book_author: "author3"
    }, {
      id: 4,
      book_Name: "book4",
      book_author: "author4"
    }]

    let bookIndex: number = id;
    if (bookIndex == -1) {
      throw new NotFoundException("Book not found")
    }
    let newBook = books.filter((book) => {
      if (book.id === bookIndex) {
        books.push(updateBook);
        return book;
      }
    })
    return newBook;
  }
//delete request
  @Delete(':id')  
  @ApiOperation({ summary: 'Delete a book by ID' })
  @ApiOkResponse(ApiResponses.delete.success)
  @ApiNotFoundResponse(ApiResponses.delete.notfound)
  @ApiInternalServerErrorResponse(ApiResponses.delete.internalservererror)
  deleteBook(@Param('id') id: number): void {
    const books: Book[] = [
      { id: 1, book_Name: 'book1', book_author: 'author1' },
      { id: 2, book_Name: 'book2', book_author: 'author2' },
      { id: 3, book_Name: 'book3', book_author: 'author3' },
      { id: 4, book_Name: 'book4', book_author: 'author4' },
    ];

    const bookIndex: number = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
      throw new NotFoundException('Book not found');
    }

    books.splice(bookIndex, 1);
  }
  //get api by author or genre
  @Get('/author')
  @ApiOperation({ summary: 'Get all authors from all books related to each array' })
  @ApiResponse({
    description: 'List of books',
    type: [Library],
  })
  @ApiOkResponse(ApiResponses.getauthor.success)
  @ApiResponse(ApiResponses.getauthor.badrequest)
  @ApiResponse(ApiResponses.getauthor.unauthorized)
  getBooksby(@Query('author') author: string, @Query('genre') genre: string) {
    //Each book object contains properties like id, title, and authors.
    // The authors property is an array of author objects associated with each book.
    // Each author object contains a name property, representing the name of the author.
    // Additionally, each author object has a publishedWorks property, which is an array of works published by that author.
    // console.log(response);
    const books = [{
      id: 1,
      title: 'Book 1',
      authors: [
        {
          name: 'Author 1',
          publishedWorks: ['Work 1 by Author 1', 'Work 2 by Author 1'],
          genre: 'mystery'
        },
        {
          name: 'Author 2',
          publishedWorks: ['Work 1 by Author 2', 'Work 2 by Author 2'],
          genre: 'fanatsy'
        },
      ],
    },
    {
      id: 2,
      title: 'Book 2',
      authors: [
        {
          name: 'Author 3',
          publishedWorks: ['Work 1 by Author 3', 'Work 2 by Author 3'],
          genre: 'action'
        },
      ],
    },
    {
      id: 3,
      title: 'Book 3',
      authors: [
        {
          name: 'Author 4',
          publishedWorks: ['Work 1 by Author 4', 'Work 2 by Author 4'],
        },
        {
          name: 'Author 5',
          publishedWorks: ['Work 1 by Author 5', 'Work 2 by Author 5'],
        },
        {
          name: 'Author 6',
          publishedWorks: ['Work 1 by Author 6', 'Work 2 by Author 6'],
        },
      ],
    },
    ];

    let newBook = books;
    if (author) {
      newBook = books.filter((book) => book.authors.some((authorobj) => authorobj.name === author));
    }
    if (genre) {
      newBook = books.filter((book) => book.authors.some((genreobj) => genreobj.genre === genre));
    }
    return newBook;

  }
}
export interface Book {
  id: number,
  book_Name: string,
  book_author: string,
}

