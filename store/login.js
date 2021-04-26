import {makeAutoObservable, toJS} from "mobx";
import {createContext} from "react";

class Login {
    constructor() {
        makeAutoObservable(this);
    }

    isAuth = false;

    setIsAuth = (bool) => {
        this.isAuth = bool
    }
}


export const userContext = createContext(new Login())
export const userParams = new Login()
