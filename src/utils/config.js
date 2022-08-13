import axios from "axios"


export const TOKEN_CYBERSOFT ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNiIsIkhldEhhblN0cmluZyI6IjA4LzExLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2Nzg2NTYwMDAwMCIsIm5iZiI6MTYzNzY4NjgwMCwiZXhwIjoxNjY4MDEzMjAwfQ.QkTkDXeVpyqSwqxo_HmH-aQhbITi8vZC_UPJ7cPM3W4'
export const DOMAIN = 'https://elearningnew.cybersoft.edu.vn/'
export const ACCESSTOKEN = 'accessToken'
export const USER_LOGIN = 'USER_LOGIN'

export const http = axios.create ({
    baseURL: DOMAIN,
    timeout:30000
});

// const arr = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]

// const display = arr.map(()=>{
    
// })

http.interceptors.request.use((config)=>{
    let a = localStorage.getItem(ACCESSTOKEN);
    let b = 'Bearer '+JSON.parse(a)
  
    config.headers = {
        ...config.headers,
        'TokenCybersoft': TOKEN_CYBERSOFT,
        ['Authorization']:   b
    };
    console.log("aaaaa",config.headers);

    // console.log('configheader',config.headers)
    return config;
},errors => {
    return Promise.reject({errors})
})

