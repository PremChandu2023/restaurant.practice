
export const bookExamples = {
    book: {
      description: "Gives the book object",
      value: {
        id: 1,
        title: "Book 1",
        author: "Author 1",
        publishedYear: 2022,
        genre: "Fiction",
      },
    },
    bookAuthor: {
      description: "Gives the author name",
      value: {
        statusCode: 200,
        message: "this_book_with_id_1_written_by_Author 1",
      },
    },
    bookTitle: {
      description: "Gives the only Title name",
      value: {
        statusCode: 200,
        message: "The name of this book with id 1 is book 1",
      },
    },
    sortedBooks: {
      description: "Gives the books object in sorted order",
      value: [
        {
          id: 1,
          title: "Book 1",
          author: "Author 1",
          publishedYear: 2022,
          genre: "Fiction",
        },
        {
          id: 2,
          title: "Book 2",
          author: "Author 2",
          publishedYear: 2019,
          genre: "Mydsstery",
        },
      ],
    },
    invalidDataType: {
      description:
        "Property is expected to be a numeric value representing id, but the client provides a non-numeric value",
      value: {
        statusCode: 400,
        errormessage: "Given_input_datatype_for_id_is_wrong",
      },
    },
    dateValidation: {
      description:
        "If the publishedYear is a date property, the server might perform date validation to ensure it is a valid date format.",
      value: {
        statusCode: 400,
        message: "Given_Date_format_is_wrong",
      },
    },

    AcceswithoutAuthorization: {
        description: ' If the client attempts to access certain book-related endpoints without providing any authentication credentials',
        value: {
          statusCode: "401",
          message: "Authentication_is_required_to_access_the_resource."
        }
      },
      ExpiredAuthenticationToken: {
        description: 'When the client sends an authentication token that is invalid, expired, or not recognized by the server',
        value: {
          statusCode: "401",
          message: "client's_token_is_not_valid_for_the_requested_operation"
        }
      },
      InsufficientPrivileges: {
        description: ' If the client provides authentication credentials, but the credentials do not grant sufficient privileges to access a specific book-related operation',
        value: {
          statusCode: "403",
          message: "client_does_not_have_the_required_authorization_to_perform_the_requested_action."
        }
      },
      RoleBasedAccessControl: {
        description: 'If the API uses role-based access control, the server may respond with a 403 status code when a user with a certain role tries to access an operation that requires a higher role or specific permissions.',
        value: {
          statusCode: "403",
          message: "User_with_this_role_is_not_permitted_to_access_the_resource"
        }
      },
      DependencyIssues: {
        description: 'The server may use various dependencies (libraries, modules, etc.) to handle book-related tasks.If there are conflicts or issues with these dependencies, it can lead to internal server errors.',
        value: {
          statusCode: "500",
          message: " It_has_an_internal_server_errors."
        }
      },
      DatabaseErrors: {
        description: ' If there are issues with the database that prevent the server from querying or updating book data',
        value: {
          statusCode: "500",
          message: "Database_connection_failures,_syntax errors,_or_other_database-related_issue"
        }
      },
      Book: {
        description: "Gives the book object", value: {
          id: 1,
          bookid: "20",
          bookName: "chandu",
          bookAuthor: "sou1",
          isPresent: true
        }
      },
      Conditionalcreation:
          {
            description: "API allows the creation of a new book only if a specific condition is met, such as checking whether the title of the book is unique.",
            value:
            {
              statusCode: 201,
              message: {
                "id": 123,
                "title": "Unique Book Title",
                "author": "Author Name",
                "publishedYear": 2022,
                "genre": "Fiction"
              }
            }
          },
          MissingRequiredFields: {
            description: 'If the client sends a POST request to create a new book resource, but some of the required fields (e.g., title, author, publishedYear) are missing from the request body',
            value: {
              statusCode: 400,
              message: "title_is_missing "
            }
          },
          InvalidDataFormat: {
            description: 'The server may return a 400 status code if the client sends the request with a malformed or invalid data format.',
            value: {
              statusCode: "400",
              message: "If the request body is not in the expected JSON format, the server should reject the request with a 400 response."
            }
          },Bookauthor: {
            description: "Update the given the author name", value: {
              statusCode: 200,
              message: "this_book_with_id_1_written_by_Author 1"
            }
          },SuccessfulBookUpdate: {
            description: "The client sends a PUT request to update an existing book resource,", value: {
              id: 1,
              title: "Book 1",
              author: "Author 1",
              publishedYear: 2022,
              genre: "Fiction"
            }
          },DataValidation: {
            description: "The server should perform data validation on the client-provided data. If the data does not meet the required validation rules"
          },badRequest: {
            description: "If the client sends a PUT request with data of incorrect data types (e.g., sending a string for a numeric property), the server should respond with a 400 status code.",
            value: {
              id: 1,
              title: "Book 1",
              publishedYear: "2022",
              genre: "Fiction"
            },
            message : "author_is_missing"

          },
          UpdatingNonExistentBook: {
            description: "If the client sends a PUT request to update a book with a specific ID, but the book with that ID does not exist in the database or data source",
            value: {
              "statusCode": 404,
              "message": "Book_with_ID_123_not_found."
            }
          }, BookIDNotProvided: {
            description: "If the client sends a PUT request to update a book, but the request does not include a valid book ID in the request URL or request body, the server should respond with a 404 status code.",
            value: {
              Statuscode: 404,
              message: "The_server_needs_the_book-ID_to_identify_which_book_to_update."
            }
          },BookResourceMoved: {
            description: "In some cases, if the book resource has been moved to a different URL or has been deleted, a PUT request to the original URL might result in a 404 status code.",
            value: {
              Statuscode: 404,
              message: "The_server_needs_the_book-ID_to_identify_which_book_to_update."
            }
          }, 
          InvalidBookID: {
            description: "If the client sends a DELETE request to remove a book but provides an invalid or non-existent book ID in the request URL, the server should respond with a 400 status code. ",
            value: {
              statusCode: 404,
              mesaage: "This indicates that the client's request cannot be processed due to an incorrect book identifier.."
            }
          },
          BookIDinUse: {
            description: "If the book deletion is not allowed due to referential integrity constraints, such as the book being referenced in other parts of the system ",
            value: {
              statusCode: 404,
              mesaage: "This indicates that the book cannot be deleted due to existing relationships."
            }
          },DatabaseorDataSourceErrors: {
            description: "If the server encounters issues while deleting the book from the database or data source, it may result in a 500 status code.",
            value: {
              statusCode: 500,
              mesaage: "This can occur if there is a database connection failure or if the delete query fails due to a technical issue."
            }
          },ServersideValidationFailures: {
            description: "While the client-side validation ensures that the request meets the basic requirements, the server-side validation might have additional rules or constraints.  ",
            value: {
              statusCode: 500,
              mesaage: "If the server-side validation fails unexpectedly during the delete operation, it may result in a 500 status code"
            }
          }, UnexpectedExceptionsorErrors: {
            description: "There might be scenarios where the server encounters unexpected exceptions, errors, or bugs during the delete operation for a book ",
            value: {
              statusCode: 500,
              mesaage: "Unhandled errors can lead to a 500 status code."
            }
          }
          
  };
  