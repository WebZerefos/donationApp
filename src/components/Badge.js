import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'

import PropTypes from 'prop-types'

const Badge = (props) => {
	const [width, setWidth] = useState(0)
	const textRef = useRef()
	const paddingHorizontal = 10

	const tabWidth = {
		width: paddingHorizontal * 2 + width,
	}

	return (
		<View style={[styles.badge, tabWidth]}>
			<Text
				onTextLayout={(e) => {
					setWidth(e.nativeEvent.lines[0].width)
				}}
				ref={textRef}
				style={[styles.badgeText]}
			>
				{props.title}
			</Text>
		</View>
	)
}

Badge.prototype = {
	title: PropTypes.string,
}

export default Badge

const styles = StyleSheet.create({
	badge: {
		backgroundColor: '#3e747e',
		height: 30,
		justifyContent: 'center',
		borderRadius: 50,
	},
	badgeText: {
		fontSize: 10,
		color: '#ffffff',
		fontFamily: 'Poppins',
		fontWeight: 600,
		textAlign: 'center',
	},
})
