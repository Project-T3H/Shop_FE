import { API_BASE_URL } from "../env";

const API_URL_CHECKOUT = API_BASE_URL;

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    // if(localStorage.getItem('accessToken')) {
    //     headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'))
    // }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function checkout(orders){
    let user = JSON.parse(localStorage.getItem("currentUser"));
    var raw = JSON.stringify({
        "order_code": orders.order_code,
        "phone": orders.phone,
        "email": orders.email,
        "address": orders.address,
        "total_price": orders.total_price,
        "status": 0,
        "customer_name": user[0].id,
        "lstOrderItem": orders.lstOrderItem
      });

    return request({
        url: API_URL_CHECKOUT + 'create-order',
        method: 'POST',
        body: raw,
        redirect: 'follow'
    });

}

export function saveOrderDetail (orderItem) {
    var raw = JSON.stringify({
        "order": orderItem.orderId,
        "product": orderItem.productId,
        "quantity": orderItem.quantity,
        "price": orderItem.price
      });

    return request({
        url: API_URL_CHECKOUT + 'create-orderdetail',
        method: 'POST',
        body: raw,
        redirect: 'follow'
    });
}