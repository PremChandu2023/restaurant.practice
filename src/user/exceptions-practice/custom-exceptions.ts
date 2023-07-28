export class idException extends Error {
    constructor(message ?: string)
    {
        super(message || "Invalid id" );
          
    }


}
export class passwordException extends Error {

    constructor(message ?: string)
    {
        super();
    }
}