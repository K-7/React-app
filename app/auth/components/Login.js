import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import Button from 'app/common/Button';
import Loader from 'app/common/Loader';
import {container, content, input, errorText} from 'app/common/commonStyles';

var styles = StyleSheet.create({
    container,
    content,
    input,
    errorText
});

class Login extends Component {
    static propTypes = {
        errorStatus: PropTypes.string.isRequired,
        login: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.state = {password: ''};
    }

    render() {
        const {errorStatus, loading} = this.props;
        return (
            <View style={[styles.container, styles.content]}>
                <TextInput
                    style={styles.input}
                    value={this.state.password}
                    type="password"
                    autoCorrect={false}
                    placeholder="Password"
                    maxLength={140}
                    onSubmitEditing={() => this.onSubmit()}
                    onChangeText={(password) => this.setState({password: password})}
                />
                <Button onPress={() => this.onSubmit()}>
                    Login
                </Button>
                {errorStatus ? <Text style={styles.errorText}>{errorStatus}</Text> : undefined}
                {loading ? <Loader/> : undefined}
            </View>
        );
    }

    onSubmit() {
        this.props.login(this.state.password);
        this.setState({password: ''});
    }
}

export default Login;