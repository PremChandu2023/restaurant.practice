import { IsNotEmpty } from "class-validator";

export class MenuDto  {
    @IsNotEmpty()
    menu_name:string
}
export class MenuItemDto  {
    @IsNotEmpty()
    menu_name:string
    
    price:number;
}