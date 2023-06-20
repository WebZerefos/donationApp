import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Routes } from './Routes'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator()

const MainNavigation = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name={Routes.Home}
				component={Home}
			/>
		</Stack.Navigator>
	)
}

export default MainNavigation
