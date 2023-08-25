import { get } from "http";
import { OrderExamples } from "./order-swagger-example";
import { orderDetails } from "../orders.dtos";

export const OrderApiResponse  = {
    post: {
        created: {
          status: 201, description: 'Creats the new Order',
          content: {
            'application/json': {
              examples: {
                succes : OrderExamples.Order     
              }
            }
          }
        }
    },
    get: {
      ok: {
        status: 200, description: 'Gives the orders details by given id',
        
           content: {
          'application/json': {
            examples: {
             Success :OrderExamples.OrderById
            }
          }
        }
      },
      notFound : {
        status : 400, description: 'Order with id not found',
        content : {
          'application/json': {
            examples: {
             NotFound :OrderExamples.OrderIdNotFound
            }
          }
        }
      }
    },
    put: {
      ok: {
        status: 200, description: 'Updates the quantity with given menuitem name and quantity to be placed',
        content : {
          'application/json': {
            examples : {
              success : OrderExamples.updatedQuantity,   
            }
          }
        }
      },
      NotFound : {
        status : 400,description: 'Id is not found with given customername',
        content : {
        'application/json': {
          examples : {
            InvalidId : OrderExamples.updateIdNotFound,
            InvalidMenuItem : OrderExamples.updateMenuItemNotFound
          }
        }
      }
        
      },
      addMenUitem : {
        ok :{
          status: 200, description: 'Updates the quantity with given menuitem name and quantity to be placed',
          content : {
            'application/json': {
              examples : {
                success : OrderExamples.updatedQuantity,
               
              }
            }
          }
        },
        BadRequest:{
          status: 400, description: 'Updates the quantity with given menuitem name and quantity to be placed',
          content : {
            'application/json': {
              examples : {
               quantityNull : OrderExamples.quantityNull,
               menuItemNull : OrderExamples.menuItemnull
               
              }
            }
          }
        }
      }
    }
}