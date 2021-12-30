import axios from 'axios';

const BASE_URL = 'http://13.211.146.21:8080/';
//const BASE_URL = 'http://api.zhechundemo.com:8080/';
//const BASE_URL = 'http://localhost:8080/';

export function postRequest<T>(data: any | null, suffix: string, header: any | null) {
    console.log("post: " + BASE_URL + suffix)
    return axios.request<T>({
        method: 'post',
        url: BASE_URL + suffix,
        data: data,
        headers: header
    })
}

export function getRequest<T>(suffix: string, header: any | null) {
    console.log("get: " + BASE_URL + suffix)
    return axios.request<T>({
        method: 'get',
        url: BASE_URL + suffix,
        headers: header
    })
}
