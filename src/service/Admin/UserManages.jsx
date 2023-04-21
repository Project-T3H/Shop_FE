import { API_BASE_URL } from "../../env";

const API_URL_USER_MANAGES = API_BASE_URL;

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
    Lấy danh tài user
**/
export function getListAllUserManages(){

    return request({
        url: API_URL_USER_MANAGES + 'user-manages',
        method: 'GET'
    });

}

/* ============================
    Lấy danh khách hàng
**/
export function getListAllCustomer(){

    return request({
        url: API_URL_USER_MANAGES + 'list-customer',
        method: 'GET'
    });

}

// =====================