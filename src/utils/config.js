import axios from "axios"


export const TOKEN_CYBERSOFT ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg'
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

