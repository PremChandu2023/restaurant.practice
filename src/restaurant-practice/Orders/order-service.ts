import { Injectable } from "@nestjs/common";
import { Menuservice } from "../Menu/menu-service";
import { Tablemenu } from "../Menu/table-menu";
import { MenuDtos } from "../Menu/menu-dtos";

@Injectable()
export class Orderservice {

    constructor(private menu : MenuDtos)
    {

    }
    setVariables(id : number)
    {
        let newMenu = this.menu.id
        console.log(newMenu);
        
    }
}