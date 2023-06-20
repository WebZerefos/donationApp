import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import style from '../../assets/styles/style'

const Header = (props) => {
	const titleStyle = () => {
		switch (props.type) {
			case 1:
				return style.title1
			case 2:
				return style.title2
			case 3:
				return style.title3
			default:
				return style.title1
		}
	}
	return (
		<View>
			<Text style={[titleStyle(), props.color && { color: props.color }]}>{props.title}</Text>
		</View>
	)
}

Header.prototypes = {
	title: PropTypes.string,
	type: PropTypes.number,
	color: '#000000',
}

export default Header
