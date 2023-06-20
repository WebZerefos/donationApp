import { createSlice } from '@reduxjs/toolkit'
import { items } from '../../data/donations'

const initialState = {
	items: items,
	selectedDonationId: null,
}

const Donations = createSlice({
	name: 'donations',
	initialState: initialState,
	reducers: {
		resetDonations: () => {
			return initialState
		},
		updateSelectedDonationId: (state, action) => {
			state.selectedDonationId = action.payload
		},
	},
})

export const { resetDonations, updateSelectedDonationId } = Donations.actions
export default Donations.reducer
