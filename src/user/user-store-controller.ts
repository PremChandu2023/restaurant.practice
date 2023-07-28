import { Controller, Get, Inject, Param } from "@nestjs/common";
import { Userstore } from "./user-store";
import { ApiTags } from "@nestjs/swagger";

//practice for providers, dependency injection, value providers(standard providers)

//Class Providers:
// These providers are classes annotated with the @Injectable() decorator. They are the most common type of providers used in Nest.js. Class providers can be injected into other classes and are responsible for creating instances of the provided class.

// Factory Providers:
// Factory providers use factory functions to create and return the values that will be injected. The factory function is responsible for instantiating and configuring the value before it is injected into the consuming classes.

// Value Providers:
// Value providers are used to inject simple values (e.g., strings, numbers, objects) into the application. These values are not instantiated like class providers; instead, they are directly returned when injected.


@Controller('/users/store')
@ApiTags("store")
export class UserstoreController {
    constructor(private store : Userstore)
    {

    }

@Get("/:messageid")
getMessage(@Param('messageid') id : number)
{

    console.log(this.store.getUser(id));
   
}

}