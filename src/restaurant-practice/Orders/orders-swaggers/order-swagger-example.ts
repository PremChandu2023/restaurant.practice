
export const OrderExamples = {
    Order : {
    description : "Gives the order details",
     value : {
        "succes": true,
        "data": {
            "customerName": "premchandu",
            "tableNumber": 20,
            "order_id": 14,
            "date": {
                "createdDate": "2023-08-24T08:24:49.956Z",
                "updatedDate": "2023-08-24T08:24:49.956Z"
            }
        }
    }
},
OrderById : {
    description : "Gives the order details",
    value : {
        "succes": true,
        "data": {
        "order_id": 11,
        "customerName": "ramanjenulu",
        "tableNumber": 0,
        "orderStatus": "completed",
        "paymentStatus": "approved",
        "orderItems": [
            {
                "orderItem_id": 17,
                "quantity": 3000,
                "menuitems": {
                    "menuitem_id": 4,
                    "menu_itemname": "Pancakes",
                    "price": 10,
                    "tax": 5
                }
            }
        ]
    }
}
},
OrderIdNotFound : {
    description : "Gives the order details",
    value :{
        "message": "Invalid id Order with given id is not available",
        "error": "Not Found",
        "statusCode": 404
    }
}

}