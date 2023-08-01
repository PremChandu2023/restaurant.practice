import { applyDecorators } from "@nestjs/common";
import { ApiResponses } from "./books-responses";
import { ApiBadRequestResponse, ApiBody, ApiConflictResponse, ApiCreatedResponse, ApiForbiddenResponse, ApiHeader, ApiInternalServerErrorResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { Books, Library } from "./books.service";
import { BookProperties } from "./books-dtos";

export function BookCustomDecorator(method: string, route: string) {
    switch (method) {
        case 'Get':
            switch (route) {
                case '/:id':
                    return applyDecorators(
                        ApiOkResponse(ApiResponses.get.ok),
                        ApiNoContentResponse({ description: "Request was successfull but no content" }),
                        ApiBadRequestResponse(ApiResponses.get.Badrequest),
                        ApiUnauthorizedResponse(ApiResponses.get.unauthorized),
                        ApiForbiddenResponse(ApiResponses.get.forbidden),
                        ApiInternalServerErrorResponse(ApiResponses.get.internalservererror),
                        ApiHeader({ name: 'Authorization', description: 'requires authorization' })
                    );
                case 'author':
                    return ApiOperation({ summary: 'Get all authors from all books related to each array' }),
                        ApiResponse({
                            status: 200,
                            description: 'List of books',
                            type: [Library],
                        }),
                        ApiBadRequestResponse(ApiResponses.getauthor.badrequest),
                        ApiUnauthorizedResponse(ApiResponses.getauthor.unauthorized)
            }


        case 'Post':
            switch (route) {
                case '/':
                    return applyDecorators(
                        ApiHeader({ name: 'Authorization', description: 'Bearer token for authentication' }),
                        ApiOperation({ summary: 'Add the books in books array' }),
                        ApiBody({

                            description: "Book object to be created",
                            type: Books
                        }),
                        ApiCreatedResponse(ApiResponses.post.created),
                        ApiBadRequestResponse(ApiResponses.post.badrequest),
                        ApiConflictResponse(ApiResponses.post.conflict),
                        ApiInternalServerErrorResponse(ApiResponses.post.internalServerError))
            }
        case "Put":
            switch (route) {
                case ':id':
                    return applyDecorators(ApiOperation({ summary: "Update a book" }),
                        ApiBody({
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
                            }, type: BookProperties
                        }),
                        ApiOkResponse(ApiResponses.put.success),
                        ApiBadRequestResponse(ApiResponses.put.badrequest),
                        ApiNotFoundResponse(ApiResponses.put.Notfound),
                        ApiUnauthorizedResponse(ApiResponses.get.unauthorized))
            }
        case "Delete":
            switch (route) {
                case ':id':
                    return applyDecorators(
                        ApiOperation({ summary: 'Delete a book by ID' }),
                        ApiOkResponse(ApiResponses.delete.success),
                        ApiNotFoundResponse(ApiResponses.delete.notfound),
                        ApiInternalServerErrorResponse(ApiResponses.delete.internalservererror))
            }
    }
}