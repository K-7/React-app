import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colours, dimensions } from './themes';

var styles = StyleSheet.create({
    loaderIcon: {
        width: 70,
        height: 70,
        margin: dimensions.controlMargin,
        marginTop: 40,
        alignItems: 'stretch',
    },
    button: {
        borderColor: colours.textWhite,
        borderWidth: 1,
        padding: 5,
        margin: dimensions.controlMargin,
        width: 70,
    },
    text: {
        color: colours.textWhite,
        textAlign: 'center',
    }
});

class Loader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: props.loading,
            errorStatus: props.errorStatus,
        };
    }

    render()    {
        const { errorStatus, loading } = this.props;
        return (
            <View style={{ backgroundColor: colours.transparent }}>
                {loading?
                    <Image style={ styles.loaderIcon } source={require('./images/Loader/loader.gif')} /> :
                    errorStatus? 
                        <TouchableOpacity style={ styles.button } onPress={ this.props.onRetry }>
                            <Text style={ styles.text }>Retry</Text>
                        </TouchableOpacity> :
                        <View style={ styles.loaderIcon }/>
                }               
            </View>
        )
    }
};

function mapStateToProps(state) {
    return {
        loading: state.auth.loading,
        errorStatus: state.auth.errorStatus
    }
}

export default connect(mapStateToProps)(Loader);