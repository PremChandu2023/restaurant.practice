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
                ...OrderExamples     
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
    }
}