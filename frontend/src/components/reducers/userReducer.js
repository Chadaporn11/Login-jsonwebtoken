export function userReducer(state=null, action){
    switch(action.type){
        case 'LOGIN':
            return "login 555";
        case 'LOGOUT':
            return "logout 555";
        default:
            return state;
    }
}