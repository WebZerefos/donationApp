import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

import Badge from './Badge'
import Header from './Header'

const DonationCard = (props) => {
	return (
		<View>
			<View style={styles.imageContainer}>
				<View style={styles.badge}>
					<Badge title={props.badgeTitle} />
				</View>
				<Image
					source={{ uri: props.uri }}
					style={styles.image}
				/>
			</View>
			<View style={styles.infoContainer}>
				<Header
					title={props.donationTitle}
					type={3}
					color={'#606060'}
				/>
				<Header
					title={'$' + props.price.toFixed(2)}
					type={3}
					color={'#88abb8'}
				/>
			</View>
		</View>
	)
}

DonationCard.propTypes = {
	uri: PropTypes.string.isRequired,
	badgeTitle: PropTypes.string.isRequired,
	donationTitle: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
}

export default DonationCard

const styles = StyleSheet.create({
	image: {
		width: 155,
		height: 170,
		resizeMode: 'contain',
	},
	imageContainer: {
		position: 'relative',
	},
	badge: {
		position: 'absolute',
		zIndex: 1,
		top: 13,
		left: 10,
	},
	infoContainer: {
		marginTop: 16,
		gap: 5,
	},
})
