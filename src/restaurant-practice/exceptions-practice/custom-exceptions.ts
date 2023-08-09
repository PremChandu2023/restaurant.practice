export class idException extends Error {
    constructor(message ?: string)
    {
        super(message || "Invalid id" );
          
    }
}
export class IdAuthorization extends Error {
    constructor(message ?: string)
    {
        super(message || "Given request does not permisions or Token is not valid" );
          
    }
}
export class passwordException extends Error {

    constructor(message ?: string)
    {
        super(message || "Invalid Password");
    }
}

export class IdNotFoundException extends Error {

    constructor(message ?: string)
    {
        super(message || "resource not found invalid id");
    }
}

export class IdConflictException extends Error {

    constructor(message ?: string)
    {
        super(message || "The id with given data is already exists");
    }
}

