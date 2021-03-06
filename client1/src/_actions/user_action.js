import axios, { Axios } from "axios";
import {
    LOGIN_USER,
    REGISTER_USER
}from './types'


export function loginUser(dataToSubmit) {

    const request = axios.post('./api/user/login', dataToSubmit) // 서버에서 받은 데이터를 request에 저장
        .then(response =>  response.data)
    
    return {
        type: LOGIN_USER,
        payload:request
    }
}

export function registerUser(dataToSubmit) {

    const request = axios.post('/api/users/register', dataToSubmit) // 서버에서 받은 데이터를 request에 저장
        .then(response =>  response.data)
    
    return {
        type: REGISTER_USER,
        payload:request
    }
}
