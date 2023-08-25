
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
},
updatedQuantity : {
    description : "updates the menuItem and returns menuitem",
    value : {
        success: true,
       data: {
        "succes": true,
        "data": {
            "orderItem_id": 17,
            "quantity": 31,
            "menuitems": {
                "menuitem_id": 4,
                "menu_itemname": "Pancakes",
                "price": 10,
                "tax": 5
            }
        }
    }
    }
},
updateIdNotFound : {
    description : "This error occurs when name with given customername is not found",
    value : {
        "message": "Id_with_given_customerName_is_not_avalaible",
        "error": "Bad Request",
    }
},
updateMenuItemNotFound : {
    description : "This error occurs when menuItemName  is not found",
    value : {
        "message": "Invalid_Menuitem_name",
        "error": "Bad Request",
    }
},
quantityNull : {
    description : "This error occurs when quanitty is null",
    value : {
        "message": [
            "quantity should not be empty"
        ],
        "error": "Bad Request",
    }
},
menuItemnull : {
    description : "This error occurs when quanitty is null",
    value :{
        "message": [
            "menuItem should not be empty"
        ],
        "error": "Bad Request",
    }
}

}