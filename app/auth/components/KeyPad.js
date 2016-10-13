import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import Button from 'app/common/Button';
import Loader from 'app/common/Loader';
import { colours, dimensions, fonts } from 'app/common/themes';

var keyPadWidth = dimensions.keypadWidth;

var styles = StyleSheet.create({
	container: {
	    alignItems: 'center',
	},
	keyPadButton: {
		backgroundColor: colours.transparent,
		width: keyPadWidth * 2/7,
		height: keyPadWidth * 2/7,
		borderRadius: keyPadWidth/7,
		borderColor: colours.textWhite,
		justifyContent: 'center',
	    alignItems: 'center',
		borderWidth: 1,
		margin: keyPadWidth/28,
	},
	keyPadText: {
		color: colours.textWhite,
		fontSize: keyPadWidth * 3/28,
	},
	keyPadInput: 	{
		width: keyPadWidth/7,
		height: keyPadWidth/7,
		borderWidth: 0,
		color: colours.textWhite,
		margin: 2,
		marginBottom: 20,
		textAlign: 'center',
	}
});

class KeyPadButton extends Component	{
	render()	{
		return <TouchableOpacity {...this.props} style={styles.keyPadButton}>
				<Text style={styles.keyPadText}>{this.props.children}</Text>
			</TouchableOpacity>
	}
}

class KeyPadInput extends Component	{
	render()	{
		return <TextInput
				style={styles.keyPadInput}
				maxLength={1}
				value={this.props.children}
				secureTextEntry={this.props.secureTextEntry}
				placeholder="o"
			/>
	}
}

class KeyPad extends Component	{

	constructor(props) {
        super(props);
        this.state = {
            password: props.password,
        };
    }

	render()	{
		return (
			<View {...this.props} style={styles.container}>
				<View flexDirection='row'>
					<KeyPadInput secureTextEntry={this.props.secureTextEntry}>
						{this.state.password.length > 0? this.state.password[0]: ''}</KeyPadInput>
					<KeyPadInput secureTextEntry={this.props.secureTextEntry}>
						{this.state.password.length > 1? this.state.password[1]: ''}</KeyPadInput>
					<KeyPadInput secureTextEntry={this.props.secureTextEntry}>
						{this.state.password.length > 2? this.state.password[2]: ''}</KeyPadInput>
					<KeyPadInput secureTextEntry={this.props.secureTextEntry}>
						{this.state.password.length > 3? this.state.password[3]: ''}</KeyPadInput>
				</View>

				<View flexDirection='row'>
					<KeyPadButton onPress={() => this.enterNumber(1)}>1</KeyPadButton>
					<KeyPadButton onPress={() => this.enterNumber(2)}>2</KeyPadButton>
					<KeyPadButton onPress={() => this.enterNumber(3)}>3</KeyPadButton>
				</View>

				<View flexDirection='row'>
					<KeyPadButton onPress={() => this.enterNumber(4)}>4</KeyPadButton>
					<KeyPadButton onPress={() => this.enterNumber(5)}>5</KeyPadButton>
					<KeyPadButton onPress={() => this.enterNumber(6)}>6</KeyPadButton>
				</View>

				<View flexDirection='row'>
					<KeyPadButton onPress={() => this.enterNumber(7)}>7</KeyPadButton>
					<KeyPadButton onPress={() => this.enterNumber(8)}>8</KeyPadButton>
					<KeyPadButton onPress={() => this.enterNumber(9)}>9</KeyPadButton>
				</View>

				<View flexDirection='row'>
					<KeyPadButton onPress={() => this.enterNumber(0)}>0</KeyPadButton>
				</View>

			</View>
		);
	}

	enterNumber(number)	{
		if(this.state.password.length < 4)	{
			this.setState({password: this.state.password.concat(number)}, this.updateVal);
		}
	}

	updateVal()	{
		this.props.onValueUpdated(this.state.password);
	}
}

export default KeyPad;