import axios from "axios"
import { SERVER_API_URL } from "../utils/consts"

const $host = axios.create({
    baseURL: SERVER_API_URL
})

const $auth_host = axios.create({
    baseURL: SERVER_API_URL
})

export { 
    $host,
    $auth_host
}