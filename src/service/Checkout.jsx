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
    console.log(options);
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
    var raw = JSON.stringify({
        "order_code": orders.order_code,
        "phone": orders.phone,
        "email": orders.email,
        "address": orders.address,
        "total_price": orders.total_price,
        "status": 0,
        "customer_name": 1,
        "lstOrderItem": orders.lstOrderItem
      });

    return request({
        url: API_URL_CHECKOUT + 'create-order',
        method: 'POST',
        body: raw,
        redirect: 'follow'
    });

}