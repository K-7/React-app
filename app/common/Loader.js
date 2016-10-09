import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, ListView, Dimensions } from 'react-native';
import { colours, dimensions, fonts } from './themes';
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

const Loader = () => {
    return (
        <Image source={require('./images/Splash/splash_bg.imageset/01.2-NARAYANA-HEALTH-Ipad-SplashScreen-BackGround-Divide.png')} style={styles.container}>
            <View style={ styles.curaBrand }>
                <Image style={ styles.curaIcon } source={require('./images/Splash/Logo.imageset/02-CURA Icon-Divide.png')} />
                <Text style={ styles.brandText }>
                    <Text style={{ fontSize: fonts.sizeBrandTitle, fontWeight: fonts.weightThin }} >Cura</Text>
                </Text>
                <View style={ styles.lineBreak }></View>
                <Text style={ styles.brandText }>
                    <Text style={{ fontSize: fonts.sizeBrandSubTitle, fontWeight: fonts.weightLight }}>AFFORDABLE, CONTINOUS, PERSONALIZED.</Text>
                </Text>
            </View>
            <Image style={ styles.loaderIcon } source={require('./images/Loader/loader.gif')} />
        </Image>
    )
};

export default Loader;