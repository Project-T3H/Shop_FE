import { API_BASE_URL } from "../env";

const API_URL_AUTH = API_BASE_URL +  "login";

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

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

export function login(username, password){
    var raw = JSON.stringify({
        "username": username,
        "password": password
      });

    return request({
        url: API_URL_AUTH,
        method: 'POST',
        body: raw,
        redirect: 'follow'
    });

}