import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './Routes';

console.disableYellowBox = true; // to hide warnings on console

const Root = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

export default Root;