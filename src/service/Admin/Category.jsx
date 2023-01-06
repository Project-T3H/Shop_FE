import { API_BASE_URL } from "../../env";

const API_URL_CATEGORY = API_BASE_URL;

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
    Lấy danh danh mục
**/
export function getListAllCategory(){

    return request({
        url: API_URL_CATEGORY + "category",
        method: 'GET'
    });

}

/* ===========================
    Lưu danh mục
**/
export function saveCategory(category){
    var raw = JSON.stringify({
        "category_name": category.category_name,
        "create_by": 1,
        "update_by": 1
      });

    return request({
        url: API_URL_CATEGORY + 'create-category',
        method: 'POST',
        body: raw,
        redirect: 'follow'
    });
}

/* ===========================
    Xóa danh mục
**/
export function deleteCategory(id){

    return request({
        url: API_URL_CATEGORY + 'delete-category/' + id,
        method: 'DELETE',
        redirect: 'follow'
    });
}


/* ===========================
    Lấy thông tin danh mục theo id
**/
export function getCategoryById(id){

    return request({
        url: API_URL_CATEGORY + 'category/' + id,
        method: 'GET',
        redirect: 'follow'
    });
}


/* ===========================
    Cập nhật danh mục
**/
export function updateCategory(category, id){

    // return request({
    //     url: API_URL_CATEGORY + 'update-category/' + id,
    //     method: 'PUT',
    //     redirect: 'follow'
    // });

    var raw = JSON.stringify({
        "category_name": category.category_name,
        "create_by": 1,
        "update_by": 1
      });

    return request({
        url: API_URL_CATEGORY + 'update-category/' + id,
        method: 'PUT',
        body: raw,
        redirect: 'follow'
    });
}

// =====================