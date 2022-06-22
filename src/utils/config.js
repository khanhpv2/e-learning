import axios from "axios"


export const TOKEN_CYBERSOFT ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNiIsIkhldEhhblN0cmluZyI6IjA4LzExLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2Nzg2NTYwMDAwMCIsIm5iZiI6MTYzNzY4NjgwMCwiZXhwIjoxNjY4MDEzMjAwfQ.QkTkDXeVpyqSwqxo_HmH-aQhbITi8vZC_UPJ7cPM3W4'
export const DOMAIN = 'https://elearningnew.cybersoft.edu.vn/'
export const ACCESS_TOKEN = 'accessToken'

export const http = axios.create ({
    baseURL: DOMAIN,
    timeout:30000
});



http.interceptors.request.use((config)=>{
    config.headers = {
        ...config.headers,
        'TokenCybersoft': TOKEN_CYBERSOFT,
        'Authorization': 'Bearer '+ ACCESS_TOKEN
    };
    return config;
},errors => {
    return Promise.reject({errors})
})