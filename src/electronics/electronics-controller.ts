import { Body, Controller,Post } from "@nestjs/common";
import { ProductDto } from "./electronics-dtos";
import { ApiBadGatewayResponse, ApiBadRequestResponse, ApiCreatedResponse, ApiForbiddenResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ApiResponses } from "./electronics-responses";



@Controller("store")
@ApiTags("Electronicstore")
export class ElectronicsController {


  @Post("/")
  @ApiCreatedResponse({ status : 210, description: 'Catalog created successfully', type: ProductDto })
  @ApiBadRequestResponse(ApiResponses.post.badrequest)
  @ApiForbiddenResponse(ApiResponses.post.Forbidden)
    createElectronicStore(@Body() storedata : ProductDto){
       
        let product ={
            catalogName: "Electronics",
            description: "A catalog of electronic products",
            products: [
              {
                name: "Laptop",
                price: 1000,
                variants: [
                  {
                    color: "Silver",
                    storage: "256GB",
                    RAM: "8GB"
                  },
                  {
                    color: "Black",
                    storage: "512GB",
                    RAM: "16GB"
                  }
                ]
              },
              {
                name: "Smartphone",
                price: 500,
                variants: [
                  {
                    color: "White",
                    storage: "128GB",
                    RAM: "6GB"
                  },
                  {
                    color: "Black",
                    storage: "256GB",
                    RAM: "8GB"
                  }
                ]
              }
            ]
          }

         product.products.push(storedata);

         return product;
    }
}