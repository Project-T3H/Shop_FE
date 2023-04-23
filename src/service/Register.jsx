import { API_BASE_URL } from "../env";
const API_URL_AUTH = API_BASE_URL +  "register";

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

export function register(dataRegister){
    var raw = JSON.stringify({
        "username": dataRegister.username,
        "password": dataRegister.password,
        "email": dataRegister.email,
        "phone": dataRegister.phone,
        "last_name": dataRegister.last_name,
        "role_id": dataRegister.role,
      });

    return request({
        url: API_URL_AUTH,
        method: 'POST',
        body: raw,
        redirect: 'follow'
    });

}