import {  ALREADY_LOGIN, NOT_LOGIN } from '../type';

export const loginReducer = (prevState=false, action={}) => {
    let {type, payload} = action;
    switch (type) {
        case ALREADY_LOGIN:
        return payload;
        case NOT_LOGIN:
        return payload;
        default:
        return prevState;
    }
}