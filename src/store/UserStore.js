import {makeAutoObservable} from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._messages = {}
        // this._messageValue = ""
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    setMessages(messages) {
        this._messages = messages
    }

    // setMessageValue(value) {
    //     this._messageValue = value
    // }

    get isAuth() {
        return this._isAuth
    }

    get getUser() {
        return this._user
    }

    get getMessages() {
        return this._messages
    }

    // getMessageValue() {
    //     return this._messageValue
    // }
}