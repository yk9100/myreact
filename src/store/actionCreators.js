import { SHOW_TABBAR, HIDE_TABBAR, ALREADY_LOGIN, NOT_LOGIN} from './type';

export const showTabbar = () =>({
    type:SHOW_TABBAR,
    payload:true,
})

export const hideTabbar = () => ({
    type: HIDE_TABBAR,
    payload: false,
})

export const alreadyLogin = () =>({
    type:  ALREADY_LOGIN,
    payload: true
})

export const notLogin = () => ({
    type: NOT_LOGIN,
    payload: false
})