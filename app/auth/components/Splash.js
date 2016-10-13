import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Loader from 'app/common/Loader';

import { colours, dimensions, fonts } from 'app/common/themes';
import {loaderIcon} from 'app/common/commonStyles';

var styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    curaBrand: {
        backgroundColor: colours.transparent,
        alignItems: 'center',
    },
    curaIcon: {
        width: 80,
        height: 300,
        marginBottom: dimensions.controlMargin,
        alignItems: 'stretch',
    },
    brandText:  {
        color: colours.textWhite,
        textAlign: 'center',
        fontFamily: 'System',
    },
    lineBreak: {
        backgroundColor: colours.textWhite,
        height: 1,
        width: 360,
        margin: dimensions.controlMargin,
    },
    loaderIcon
});

class Splash extends Component {
    static propTypes = {
        errorStatus: PropTypes.string.isRequired,
        login: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.login();
    }

    render()    {
        const {errorStatus, loading} = this.props;
        return (
            <Image
                source={require('app/common/images/Splash/splash_bg.imageset/01.2-NARAYANA-HEALTH-Ipad-SplashScreen-BackGround-Divide.png')}
                style={styles.container}>
                <View style={ styles.curaBrand }>
                    <Image style={ styles.curaIcon } source={ require('app/common/images/Splash/Logo.imageset/02-CURA Icon-Divide.png') } />
                    <Text style={ styles.brandText }>
                        <Text style={{ fontSize: fonts.sizeBrandTitle, fontWeight: fonts.weightThin }} >Cura</Text>
                    </Text>
                    <View style={ styles.lineBreak }></View>
                    <Text style={ styles.brandText }>
                        <Text style={{ fontSize: fonts.sizeBrandSubTitle, fontWeight: fonts.weightLight }}>AFFORDABLE, CONTINOUS, PERSONALIZED.</Text>
                    </Text>
                </View>
                <Loader
                    onRetry={() => this.props.login()}
                />
            </Image>
        )
    }    
};

export default Splash;