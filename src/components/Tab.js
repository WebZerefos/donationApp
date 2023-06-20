import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'

import PropTypes from 'prop-types'

const Tab = (props) => {
	const [width, setWidth] = useState(0)
	const textRef = useRef()
	const paddingHorizontal = 33

	const tabWidth = {
		width: paddingHorizontal * 2 + width,
	}

	return (
		<Pressable
			onPress={() => props.onPress(props.tabId)}
			style={[styles.tab, props.isInactive && styles.inactiveTab, tabWidth]}
		>
			<Text
				onTextLayout={(e) => {
					setWidth(e.nativeEvent.lines[0].width)
				}}
				ref={textRef}
				style={[styles.tabText, props.isInactive && styles.inactiveTitle]}
			>
				{props.title}
			</Text>
		</Pressable>
	)
}

Tab.prototype = {
	tabId: PropTypes.number,
	title: PropTypes.string,
	isInactive: PropTypes.bool,
	onPress: PropTypes.func,
}

export default Tab

const styles = StyleSheet.create({
	tab: {
		backgroundColor: '#5bc0de',
		height: 50,
		justifyContent: 'center',
		borderRadius: 100,
	},
	tabText: {
		fontSize: 14,
		color: '#ffffff',
		fontFamily: 'Poppins',
		fontWeight: 500,
		lineHeight: 17,
		textAlign: 'center',
	},
	inactiveTab: {
		opacity: 0.5,
	},
	inactiveTab: {
		backgroundColor: '#F3F5F9',
	},
	inactiveTitle: {
		color: '#79869F',
	},
})
