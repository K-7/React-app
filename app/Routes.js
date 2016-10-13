import React, {Component} from 'react'
import {Scene, Reducer, Router, Actions as routes} from 'react-native-router-flux'
import { connect } from 'react-redux';

import HomePage from './home/HomePage';
import LoginPage from './auth/LoginPage';
import SplashScreen from './auth/SplashScreen';
import ProfilePage from './profile/ProfilePage';
import EncounterListPage from './encounters/EncounterListPage';
import Loader from './common/Loader';

const reducerCreate = params => (state, action) => Reducer(params)(state, action);

const Routes = ({loading, needSignIn}) => (
    <Router createReducer={reducerCreate} showNavigationBar={false}>
        <Scene key="splashScreen" initial={needSignIn} component={SplashScreen} title="Splash Screen" type="reset" hideNavBar/>
        <Scene key="loginPage" component={LoginPage} title="Login" type="reset" hideNavBar/>

        
        <Scene key="profilePage" component={ProfilePage} title="Profile" hideNavBar/>
    </Router>
);

function mapStateToProps(state) {
    return {
        loading: !state.storage.storageLoaded,
        needSignIn: !state.auth.token
    }
}

export default connect(mapStateToProps)(Routes);
// <Scene key="encounterListPage" initial={!needSignIn} component={EncounterListPage} title="Encounters Home" type="replace" hideNavBar/>