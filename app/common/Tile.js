import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colours, dimensions, fonts } from './themes';

var styles = StyleSheet.create({
	tile: {
		marginBottom: dimensions.tileMargin,
		padding: dimensions.tileMargin,
		backgroundColor: colours.textWhite,		
	},
	header: {
		flex: 1
	}
	text: {
		color: colours.textBlue,
		fontSize: fonts.sizeRegular,
	}
});

export default class Tile extends Component {
	render() {
		return (
			<View {...this.props} style={styles.tile}>
			<View/>
		)
	}
}