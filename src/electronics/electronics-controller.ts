import { Body, Controller,Param,Patch,Post, Query } from "@nestjs/common";
import { ProductVariant, Products } from "./electronics-dtos";
import { ApiBadGatewayResponse, ApiBadRequestResponse, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ApiResponses } from "./electronics-responses";



@Controller("store")
@ApiTags("Electronicstore")
export class ElectronicsController {


  @Post("/")
  @ApiCreatedResponse({ status : 210, description: 'Catalog created successfully', type: Products })
  @ApiBadRequestResponse(ApiResponses.post.badrequest)
  @ApiForbiddenResponse(ApiResponses.post.Forbidden)
    createElectronicStore(@Body() storedata : Products){
       
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
    @Patch('/:name')
    @ApiOkResponse({description : "The required details have been updated succefully", type : ProductVariant})
    @ApiBadRequestResponse(ApiResponses.post.badrequest)
    @ApiForbiddenResponse(ApiResponses.post.Forbidden)
    changePrice(@Param('name') name :string,@Body() variantbody : ProductVariant)
    {
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
      let products = product.products.map((value) => {
                    
                  if(value.name === name)
                  {
                      value.variants.map((value1) => {
                        value1.RAM=variantbody.RAM
                      })
                      return value.variants;
                  }
                 
      })
      return products;
    }
}