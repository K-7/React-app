import {Actions as routes} from 'react-native-router-flux';

export const AUTH_LOGIN_START = 'AUTH_LOGIN_START';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

const urls = {
    LOGIN: 'http://localhost:8000/api/v1/login/',
};

export const login = ( username, password ) => {
    return dispatch => {
        dispatch(loginStart());

        setTimeout(() => {
            if (password.length) {
                routes.homePage();
                return dispatch(loginSuccess(username, password));
            }
            return dispatch(loginFail(new Error('Password field is required!')));
        }, Math.random() * 1000 + 500)
    };
};

export const admin_login = () => {
    var username = 'admin';
    var password = '92c|d,w#[Pl:Y]b';

    // return fetch(urls.LOGIN, {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         username,
    //         password
    //     })
    // }).then((response) => response.json())
    //     .then((responseJson) => {
    //         routes.homePage();
    //         return dispatch(loginSuccess(username));
    //     })
    //     .catch((error) => {
    //         return dispatch(loginFail(new Error('Password field is required!')));
    //     }
    // );

    return dispatch => {
        dispatch(loginStart());

        setTimeout(() => {
            if (password.length) {
                routes.loginPage();
                return dispatch(loginSuccess(username, password));
            }
            return dispatch(loginFail(new Error('Password field is required!')));
        }, Math.random() * 1000 + 500)
    };
}

const loginStart = () => {
    return {
        type: AUTH_LOGIN_START
    }
};

const loginSuccess = (username, password) => {
    return {
        type: AUTH_LOGIN_SUCCESS,
        payload: {
            token: Math.random().toString(),
            username: username,
            password: password,
        }
    }
};

const loginFail = error => {
    return {
        type: AUTH_LOGIN_FAIL,
        payload: error,
        error: true
    }
};

export const logout = () => {
    return dispatch => {
        routes.splashScreen();
        dispatch({
            type: AUTH_LOGOUT
        });
    };
};