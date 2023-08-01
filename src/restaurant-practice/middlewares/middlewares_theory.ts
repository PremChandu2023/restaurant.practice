// In Nest.js, middleware is a fundamental concept used to process incoming requests before they reach the route handler (controller) or after the route handler has processed the request but before sending the response back to the client. Middleware functions can intercept and modify the request and response objects, perform certain tasks, and pass control to the next middleware or route handler.


// Modify Request or Response: Middleware functions can inspect and modify the request or response objects. 

// Authentication and Authorization: Middleware is commonly used for implementing authentication and authorization checks. You can create authentication middleware that verifies the user's token or session, and authorization middleware to check if the user has the required permissions to access a particular route.

// Error Handling: Middleware can handle errors and exceptions that occur during request processing. You can define custom error handling middleware to catch errors, log them, and return an appropriate response to the client.

// In Nest.js, middleware is implemented using decorators and the Nest middleware interfaces. You can create custom middleware by implementing the NestMiddleware interface and defining the use() method. Middleware can be applied at the global level, controller level, or individual route level using decorators.


// why middleware
// execute any code.
// make changes to the request and the response objects.
// end the request-response cycle.
// call the next middleware function in the stack.
// if the current middleware function does not end the request-response cycle, it must call it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

