import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isLogin = true;
        
        this._userInformation = {
            isRegistration: false,
            email: null,
            password: null
        };

        makeAutoObservable(this);
    }

    setIsLogin(value) {
        this._isLogin = value;
    }

    setUserInformation(value) {
        this._userInformation = value;
    }

    get isLogin() {
        return this._isLogin;
    }

    get userInformation() {
        return this._userInformation;
    }
}