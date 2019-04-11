import {SHOW_TABBAR, HIDE_TABBAR} from './type';

export const showTabbar = () =>({
    type:SHOW_TABBAR,
    payload:true,
})

export const hideTabbar = () => ({
    type: HIDE_TABBAR,
    payload: false,
})