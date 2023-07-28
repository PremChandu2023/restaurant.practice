import { ArgumentMetadata, PipeTransform, Injectable, Param, ParseIntPipe, Body, Post } from "@nestjs/common";


@Injectable()
export class Custompipes  implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {

        const {type, metatype } = metadata
           return value;
        
    }

    

}