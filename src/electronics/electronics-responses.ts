import { bookExamples } from "src/books/books-swagger-examples";
import { ErrorResponse } from "src/books/books.service";

export const ApiResponses= {

post : {
    badrequest: {
      status: 400, description: 'Bad request', type : ErrorResponse,
      content: {
        'application/json': {
          examples: {
            DatabaseErrors: bookExamples.DatabaseErrors,
            DependencyIssues: bookExamples.DependencyIssues
          }
        }
      }
      
    },
    Forbidden : {
      status: 403, description: 'You do not have sufficient permissions to access the Electronics catalog.', 
      type : ErrorResponse,
      content : {
        "application/json" : {
            examples : {
                UserNotauthenticated : bookExamples.AcceswithoutAuthorization
            }

        }
        
      }
    },
    internalservererror: {
      status: 500, description: 'Internal server error',
      type : ErrorResponse,
      content : {
        "application/json" : {
            examples : {
                value: {
                    statusCode: "401",
                    message: "authentication_is_required_to_access_the_resource."
                  }
            }
        }
      } 
    }
}


}