import { API_BASE_URL } from "../env";

const API_URL_SHOP = API_BASE_URL;

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

/* ============================
    Lấy danh sách nhãn hàng
*/
export function getListBranch(){

    return request({
        url: API_URL_SHOP + 'branch',
        method: 'GET'
    });

}

/* =========================
    Lấy danh sách size
*/
export function getListSize(){

    return request({
        url: API_URL_SHOP + 'list-size',
        method: 'GET'
    });

}
/* =========================
    Lấy danh sách màu
*/
export function getListColor(){

    return request({
        url: API_URL_SHOP + 'list-color',
        method: 'GET'
    });

}


/* =========================
    Lấy danh sản phẩm
*/
export function getListProduct(){

    return request({
        url: API_URL_SHOP + 'list-product-shop',
        method: 'GET'
    });

}

// =====================