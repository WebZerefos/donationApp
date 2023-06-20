import { createSlice } from '@reduxjs/toolkit'
import { categories } from '../../data/categories'

const initialState = {
	categories: categories,
	selectedCategoryId: 1,
}

const Categories = createSlice({
	name: 'categories',
	initialState: initialState,
	reducers: {
		resetCategories: () => {
			return initialState
		},
		updateCategoryId: (state, action) => {
			state.selectedCategoryId = action.payload
		},
	},
})

export const { resetCategories, updateCategoryId } = Categories.actions

export default Categories.reducer
