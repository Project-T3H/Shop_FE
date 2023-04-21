import { API_BASE_URL } from "../../env";

const API_URL_SUPPLIER = API_BASE_URL;

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
    Lấy danh nhà cung cấp
**/
export function getListAllSupplier(){

    return request({
        url: API_URL_SUPPLIER  +  "supplier",
        method: 'GET'
    });

}


/* ============================
    Lưu nhà cung cấp
**/
export function saveSupplier(supplier){

    var raw = JSON.stringify({
        "supplier_name": supplier.supplier_name,
        "phone": supplier.phone,
        "address": supplier.address,
        "create_by": 1,
        "update_by": 1
      });

    return request({
        url: API_URL_SUPPLIER + 'create-supplier',
        method: 'POST',
        body: raw,
        redirect: 'follow'
    });

}

// =====================