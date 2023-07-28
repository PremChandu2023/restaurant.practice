import { BookProperties } from "./books-dtos";
import { bookExamples } from "./books-swagger-examples";
import { ErrorResponse, GetBookId } from "./books.service";

export const ApiResponses = {
  get: {
    ok: {
      status: 200, description: 'Gives details of the book', schema: {
        properties:
        {
          id: { type: "number", example: 1 },
          name: { type: "string", example: "John Doe" },
          age: { type: "number", example: 30 },
        },
      },
      content: {
        'application/json': {
          examples: {
            ...bookExamples
          }
        }
      }
    },
    Badrequest: {
      status: 400, description: 'Bad request', content: {
        "application/json": {
          examples: {
            InvalidDataType: bookExamples.invalidDataType
            , DateValidation: bookExamples.dateValidation
          }
        }
      }
    },
    unauthorized: {
      status: 401, description: 'Unauthorized', content:
      {
        'application/json': {
          examples: {
            AcceswithoutAuthorization: bookExamples.AcceswithoutAuthorization, ExpiredAuthenticationToken: bookExamples.ExpiredAuthenticationToken
          }
        }
      }
    },
    forbidden: {
      status: 403, description: 'Forbidden', content: {
        'application/json': {
          examples: {
            InsufficientPrivileges: bookExamples.InsufficientPrivileges,
            RoleBasedAccessControl: bookExamples.RoleBasedAccessControl
          }
        }
      }
    },
    internalservererror: {
      status: 500, description: 'Internal Server Error', content: {
        'application/json': {
          examples: {
            DatabaseErrors: bookExamples.DatabaseErrors,
            DependencyIssues: bookExamples.DependencyIssues
          }
        }
      }
    }
  },
  post: {
    created: {
      status: 201, description: 'Returns the success operation',
      content: {
        'application/json': {
          examples: {
            Book: bookExamples.Book,
            Conditionalcreation: bookExamples.Conditionalcreation,
          }
        }
      }
    },
    badrequest: {
      status: 400, description: 'Bad request',
      content:
      {
        'application/json': {
          examples: {
            InvalidDataType: bookExamples.invalidDataType, MissingRequiredFields:
              bookExamples.MissingRequiredFields,
            InvalidDataFormat: bookExamples.InvalidDataFormat
          }
        }
      }

    },
    conflict: {
      status: 409, description: 'Conflict error', type: BookProperties,
      schema: {
        properties: {
          Statuscode: { type: "number", example: 409 },
          message: { type: "string", example: "Book already exists" }

        }
      }
    },
    internalServerError: {
      status: 500, description: 'Internal server error', content: {
        'application/json': {
          examples: {
            DatabaseErrors: bookExamples.DatabaseErrors,
            DependencyIssues: bookExamples.DependencyIssues
          }
        }
      }
    }
  },
  put: {
    success: {
      status: 201, description: 'Updates the book with given id',
      content: {
        'application/json': {
          examples: {
            SuccessfulBookUpdate: bookExamples.SuccessfulBookUpdate,
            Bookauthor: bookExamples.SuccessfulBookUpdate
          }
        }
      }
    },
    badrequest: {
      status: 400, description: 'Bad request',
      content: {
        'application/json':
        {
          examples: {
            badRequest: bookExamples.badRequest,
            DataValidation: bookExamples.DataValidation
          }

        }
      }
    },
    Notfound: {
      status: 404, description: 'Book Not found',
      content: {
        "application/json": {
          examples: {
            UpdatingNonExistentBook: bookExamples.UpdatingNonExistentBook,
            BookIDNotProvided: bookExamples.BookIDNotProvided,
            BookResourceMoved: bookExamples.BookResourceMoved
          }
        }
      }
    }
  },
  delete: {
    success: {
      status: 200,
      description: 'Successfully deleted the book',
      type : ErrorResponse,
      content: {
        "application/json": {
          examples: {
            SuccessfulDeletionofaBook: {
              description: "When the client sends a DELETE request to remove a book resource, and the server successfully processes the request and deletes the book from the database or data source",
              value: {
                statusCode: 204,
                message: "Book with ID 123 has been deleted successfully."
              }
            }
          }
        }
      }
    },
    notfound: {
      status: 404,
      description: 'Book Not Found',
      content: {
        "application/json": {
          examples: {
            InvalidBookID: bookExamples.InvalidBookID,
            BookIDinUse: bookExamples.BookIDinUse
          }
        }
      }
    },
    internalservererror: {
      status: 500,
      description: 'Internal server error',
      content: {
        "application/json": {
          examples: {
            DatabaseorDataSourceErrors: bookExamples.DatabaseorDataSourceErrors,
            ServersideValidationFailures: bookExamples.ServersideValidationFailures, UnexpectedExceptionsorErrors: bookExamples.UnexpectedExceptionsorErrors
          }
        }
      }
    }
  },
  getauthor: {
    success: {
      status: 200,
      description: 'All authors and book object is returned',
      schema: {
        properties: {
          id: { type: "number", example: '20' },
          title: { type: 'string', example: 'book20' },
          authors: { type: 'string', example: 'author20' },
        }
      }
    },
    badrequest: {
      status: 400, description: 'Bad requests',
      content: {
        'application/json': {
          examples: {
            MissingRequiredFields: {
              description: "If the client sends a request to create a new book but fails to provide some required fields (e.g., title, authors, etc.), the server should respond with a 400 status code.",
              value: {
                "statusCode": 400,
                "message": "Bad Request: Missing required field 'authors' in the request body."
              }
            }
          }
        }
      }
    },
    unauthorized: {
      status: 401, description: 'Unauthorized',
      content: {
        'application/json': {
          examples: {
            Unauthorizedrequest: {
              description: "Client sends a request to access a book resource that requires authentication, but the client's credentials are invalid or missing, resulting in a 401 Unauthorized response.",
              value: {
                "statusCode": 401,
                "message": "Unauthorized: Invalid or missing authentication token"
              }
            }
          }
        }
      }
    }
  }

}