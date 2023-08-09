
import { IsInt, IsNotEmpty, IsNumber, IsObject, IsString, Validate, ValidateNested } from 'class-validator';

class Sport {
  @IsString()
  @IsNotEmpty()
  sportName: string;

  @IsString()
  playedBy: string;
}

export class OlympicMedalDto {
  @IsInt({message:"Give id should be a number"})
  @IsNotEmpty()
  @Validate((value) => {
    value.toString().length === 5
  }, {
    message: "Given id length should not exceed 5"
  })
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsObject()
  @ValidateNested()//@ValidateNested() decorator is part of the class-validator library and is used in NestJS to validate nested objects within your DTOs (Data Transfer Objects). When you have a property that represents another object as a nested structure, you can apply this decorator to that property to ensure that the nested object is also validated according to its own validation rules.
  sport: Sport;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsInt()
  quantity: number;
}

export class QueryDto {
    @IsString()
    @IsNotEmpty()
    sport: string;

    @IsString()
    @IsNotEmpty()
    played:string;
}
