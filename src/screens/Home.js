import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import globalStyle from '../../assets/styles/globalStyle'
import Header from '../components/Header'
import Search from '../components/Search'
import Tab from '../components/Tab'
import { updateCategoryId } from '../redux/reducers/Categories'

const Home = () => {
	const user = useSelector((state) => state.user)
	const categories = useSelector((state) => state.categories)
	const donations = useSelector((state) => state.donations)
	const dispatch = useDispatch()

	//pagination setup
	const [categoryPage, setCategoryPage] = useState(1)
	const [categoryList, setcategoryList] = useState([])
	const [isLoadingCategories, setIsLoadingCategories] = useState(false)
	const categoryPageSize = 4

	const pagination = (items, pageNumber, pageSize) => {
		const startIndex = (pageNumber - 1) * pageSize
		const endIndex = startIndex + pageSize
		if (startIndex >= items.length) {
			return []
		}
		return items.slice(startIndex, endIndex)
	}

	useEffect(() => {
		setIsLoadingCategories(true)
		setcategoryList(pagination(categories.categories, categoryPage, categoryPageSize))
		setCategoryPage((prev) => prev + 1)
		setIsLoadingCategories(false)
	}, [])

	return (
		<SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.header}>
					<Text style={styles.greetText}>Hello!</Text>
					<View style={styles.userInfoContainer}>
						<Header title={user.firstName + ' ' + user.lastName[0] + '.👋🏻'} />
						<Image
							source={{ uri: user.imageProfile }}
							style={styles.imageProfile}
						/>
					</View>
				</View>
				<View style={styles.searchBox}>
					<Search />
				</View>
				<View style={styles.bannerContainer}>
					<View style={{ position: 'absolute', zIndex: 1, top: '20%', left: 20, width: '60%' }}>
						<Text style={styles.bannerText}>New Arrival change your lifestyle.</Text>
					</View>
					<Image
						source={{ uri: 'https://i.pinimg.com/originals/29/7c/de/297cde7558aab2a17271da2b9f9cbb3d.jpg' }}
						style={styles.imageBanner}
					/>
					<Pressable style={styles.bannerBtn}>
						<Text style={styles.btnText}>Check Now</Text>
					</Pressable>
				</View>
				<View style={styles.categories}>
					<Header
						title='Select Category'
						type={2}
					/>
					<FlatList
						horizontal
						onEndReachedThreshold={0.5}
						onEndReached={() => {
							setIsLoadingCategories(true)
							let newData = pagination(categories.categories, categoryPage, categoryPageSize)
							if (newData.length > 0) {
								setcategoryList((prevState) => [...prevState, ...newData])
								setCategoryPage((prevState) => prevState + 1)
							}
							setIsLoadingCategories(false)
						}}
						showsHorizontalScrollIndicator={false}
						data={categoryList}
						renderItem={({ item }) => (
							<View
								style={styles.categoryItem}
								key={item.categoryId}
							>
								<Tab
									tabId={item.categoryId}
									onPress={(value) => dispatch(updateCategoryId(value))}
									title={item.name}
									isInactive={item.categoryId !== categories.selectedCategoryId}
								/>
							</View>
						)}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home

const styles = StyleSheet.create({
	donationCardContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 24,
	},
	header: {
		marginTop: 20,
		marginHorizontal: 24,
	},
	greetText: {
		fontFamily: 'Poppins',
		fontSize: 16,
		marginBottom: -10,
		fontWeight: '400',
		color: '#636776',
	},
	imageProfile: {
		width: 50,
		height: 50,
		borderRadius: 100,
		resizeMode: 'contain',
	},

	userInfoContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	searchBox: {
		marginHorizontal: 24,
		marginTop: 20,
	},
	bannerContainer: {
		marginHorizontal: 24,
		marginTop: 20,
	},
	bannerText: {
		fontFamily: 'Poppins',
		fontSize: 20,
		fontWeight: '600',
		color: '#ffffff',
	},
	imageBanner: {
		width: '100%',
		height: 160,
		resizeMode: 'cover',
		borderRadius: 20,
	},
	bannerBtn: {
		position: 'absolute',
		zIndex: 1,
		bottom: '20%',
		left: 20,
	},
	btnText: {
		color: '#ffffff',
		fontWeight: '600',
		textDecorationLine: 'underline',
		fontSize: 14,
	},
	categories: {
		marginLeft: 24,
		marginTop: 20,
	},
	categoryItem: {
		marginRight: 10,
		marginVertical: 16,
	},
})
