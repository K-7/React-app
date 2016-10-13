import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import KeyPad from './KeyPad';
import Button from 'app/common/Button';
import Loader from 'app/common/Loader';
import ErrorDialog from 'app/common/ErrorDialog';
import { content, input, errorText} from 'app/common/commonStyles';
import { colours, dimensions, fonts } from 'app/common/themes';

var styles = StyleSheet.create({
    content,
    input,
    errorText,
    container: {
        position: 'absolute',
        backgroundColor: colours.fillDarkBlue,
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colours.textWhite,
    },
    heading: {
        fontSize: 40,
        fontWeight: fonts.weightThin,
    },
    subHeading: {
        fontSize: 28,
        fontWeight: fonts.weightThin,
    }
});

class Login extends Component {
    static propTypes = {
        errorStatus: PropTypes.string.isRequired,
        login: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.state = {
            username: '100831',
            employee_name: 'Dr. Shalini Rajesh',
            password: ''
        };
    }

    // render() {
    //     const {errorStatus, loading} = this.props;
    //     return (
    //         <View style={[styles.container, styles.content]}>
    //             <TextInput
    //                 style={styles.input}
    //                 value={this.state.password}
    //                 type="password"
    //                 autoCorrect={false}
    //                 placeholder="Password"
    //                 maxLength={140}
    //                 onSubmitEditing={() => this.onSubmit()}
    //                 onChangeText={(password) => this.setState({password: password})}
    //             />
    //             <Button onPress={() => this.onSubmit()}>
    //                 Login
    //             </Button>
    //             <Loader
    //                 errorStatus
    //                 loading
    //                 retry={ this.props.login }
    //                 request={ this.state.password }
    //             />
    //         </View>
    //     );
    // }

    render() {
        const {errorStatus, loading} = this.props;
        return (
            <View style={[styles.container, styles.content]}>
                <Text style={[styles.text, styles.heading]}>Good Morning, {this.state.employee_name}</Text>
                <Text style={[styles.text, styles.subHeading]}>Enter Authentication Code</Text>
                <KeyPad
                    password={this.state.password}
                    onValueUpdated={(password) => this.setState({password: password}, this.submit)}
                    onSubmit={() => this.onSubmit()}
                    secureTextEntry={true}
                />
                <View flexDirection='row'>
                    <Button>Back</Button>
                    <Loader
                        onRetry={() => this.onSubmit()}
                    />
                    <Button>Cancel</Button>
                </View>


            </View>
        );
    }

    submit(password)    {
        if(this.state.password.length === 4)    {
            this.onSubmit();
        }
    }

    onSubmit() {
        this.props.login(this.state.username, this.state.password);
        this.setState({
            username: '100831',
            employee_name: 'Dr. Shalini Rejesh',
            password: ''
        });
    }
}

export default Login;