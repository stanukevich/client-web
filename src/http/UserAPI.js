import { $host, $auth_host } from ".";

export const registerFunc = async (username, password) => {
    const response = await $host.post("/api/user/register", {username, password})
    return response
}

export const loginFunc = async (username, password) => {
    const response = await $host.post("/api/user/login", {username, password})
    return response
}

export const getAuthUserData = async (username, password) => {
    const response = await $auth_host.post("/api/user/getAuthUser", {username, password})
    return response
}

export const getMessages = async () => {
    const response = await $auth_host.get("api/user/getMessages")
    return response
}