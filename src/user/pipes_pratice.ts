//A pipe is a class annotated with the @Injectable() decorator, which implements the PipeTransform interface.

// Pipes have two typical use cases:

// transformation: transform input data to the desired form (e.g., from string to integer)
// validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception

// pipes operate on the arguments being processed by a controller route handler,Nest interposes a pipe just before a method is invoked, instead pipe recieves those arguments and transforms the arguments and they are used by methods.

