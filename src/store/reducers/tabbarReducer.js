import { SHOW_TABBAR, HIDE_TABBAR} from '../type';
export const tabbarReducer = (prevState=true, action={})=> {
    let {type, payload} = action;
    switch (type) {
        case SHOW_TABBAR:
        return payload;
        case HIDE_TABBAR:
        return payload;
        default:
        return prevState;
    }
}