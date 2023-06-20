import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import PropTypes from 'prop-types'

const Button = (props) => {
	return (
		<Pressable
			onPress={() => props.onPress()}
			disabled={props.isDisabled}
			style={[styles.button, props.isDisabled && styles.disabled]}
		>
			<Text style={styles.buttonText}>{props.title}</Text>
		</Pressable>
	)
}

Button.prototype = {
	title: PropTypes.string,
	isDisabled: PropTypes.bool,
	onPress: PropTypes.func,
}

export default Button

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#5bc0de',
		height: 55,
		justifyContent: 'center',
		borderRadius: 100,
	},
	buttonText: {
		fontSize: 16,
		color: '#ffffff',
		fontFamily: 'Poppins',
		fontWeight: 500,
		lineHeight: 19,
		textAlign: 'center',
	},
	disabled: {
		opacity: 0.5,
	},
})
