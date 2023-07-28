import { Injectable } from "@nestjs/common";

interface User {
    name: String,
    age: number,
    id: number
}

//injectable theory==> In NestJS, the @Injectable() decorator is used to indicate that a class can be managed by the NestJS dependency injection container. This means that NestJS can create instances of the class and inject its dependencies when requested.

// When using the @Injectable() decorator, you can also make use of the Class Provider configuration. A class provider is a way to define how a class should be instantiated and injected into other classes.
// The @Injectable() decorator is used to mark a class as injectable

//Useclass :

// In NestJS, the useClass property is used in various contexts to define how a class should be instantiated and provided to other classes. It is a configuration option used with providers and dependency injection to manage the instantiation and injection of classes in a modular application.

// When defining a class provider, you can use useClass to specify the class that should be instantiated and injected. 

//@inject()

// the @Inject() decorator is used for dependency injection to indicate that a class property should be injected with a specific provider or value. It is primarily used with constructor injection, where dependencies are automatically resolved and injected into the class instance when it is created.

//the instance should be provided in module providers so that they can be used as an instance 

//usesexisting property: 
// In NestJS, the useExisting property is a configuration option used with providers to create aliases for existing providers. It allows you to reuse the instance of an already registered provider under a different token (alias). This can be useful when you have multiple tokens representing the same dependency, and you want to avoid creating separate instances for each token.


@Injectable()
export class Userstore {
    private store = new Map<number, User>();

    addUser(user: User) {
        this.store.set(user.id, user)
    }

    getUser(id: number) {
        return this.store.get(id)
    }
    updateUser(id: number, user: User) {
        this.store.set(id, user)
    }
    deleteUser(id: number) {
        this.store.delete(id);
    }
    getMessage() {
        return "this is store of users";
    }

}