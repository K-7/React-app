import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colours, dimensions, fonts } from './themes';

export default class Button extends Component {
	render() {
		return <TouchableOpacity {...this.props} style={styles.button}>
			<Text style={styles.text}>{this.props.children}</Text>
		</TouchableOpacity>
	}
}

var styles = StyleSheet.create({
	button: {
		marginBottom: dimensions.controlMargin,
		padding: dimensions.controlPadding,
		backgroundColor: colours.fillDarkBlue,		
	},
	text: {
		color: colours.textWhite,
		fontSize: fonts.sizeRegular,
	}
});