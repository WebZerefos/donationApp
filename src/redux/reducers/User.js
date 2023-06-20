import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	firstName: 'Victor',
	lastName: 'Zerefos',
	userId: 1,
	imageProfile: 'https://archive.org/download/discordprofilepictures//discordred_thumb.jpg',
}

export const User = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		updateFirstName: (state, action) => {
			state.firstName = action.payload.firstName
		},
		resetInitialState: () => {
			return initialState
		},
	},
})

export const { updateFirstName, resetInitialState } = User.actions
export default User.reducer
