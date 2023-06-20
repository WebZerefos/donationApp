import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const Search = (props) => {
	const inputRef = useRef()
	const [searchInput, setSearchInput] = useState('')

	const handleFocus = () => {
		inputRef.current.focus()
	}

	const handleSearch = (value) => {
		setSearchInput(value)
		props.onSearch(value)
	}

	return (
		<Pressable
			style={styles.searchInputContainer}
			onPress={handleFocus}
		>
			<FontAwesomeIcon
				icon={faSearch}
				size={22}
				color='#5cb85c'
			/>
			<TextInput
				ref={inputRef}
				placeholder='Search'
				style={styles.searchInput}
				value={searchInput}
				onChangeText={(value) => handleSearch(value)}
			/>
		</Pressable>
	)
}

Search.propTypes = {
	onSearch: PropTypes.func,
}

export default Search

const styles = StyleSheet.create({
	searchInputContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'rgba(190,203,214,0.3)',
		gap: 10,
		padding: 16,
		borderRadius: 10,
	},
	searchInput: {
		flex: 1,
		fontSize: 14,
		fontFamily: 'Poppins',
	},
})
