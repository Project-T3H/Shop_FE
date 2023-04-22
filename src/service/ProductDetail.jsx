import { API_BASE_URL } from "../env";

const API_URL_PRODUCT_DETAIL = API_BASE_URL;

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

export function getProductDetail(id){

    return request({
        url: API_URL_PRODUCT_DETAIL + 'product-by-id/' + id,
        method: 'GET'
    });

}

// =====================