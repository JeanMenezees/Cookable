import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Recipies from '../../screens/recipies';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';

export default function RootRoute(): JSX.Element {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: '#000',
				},
				tabBarActiveTintColor: '#fff',
				tabBarShowLabel: false,
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ color, size }) => {
						return <MaterialIcons name="food-bank" color={color} size={size} />;
					},
					tabBarLabelStyle: {
						marginTop: 8,
					},
				}}
			/>
			<Tab.Screen
				name="Recipies"
				component={Recipies}
				options={{
					tabBarIcon: ({ color, size }) => {
						return <Entypo name="book" color={color} size={size} />;
					},
					tabBarLabelStyle: {
						marginTop: 8,
					},
				}}
			/>
		</Tab.Navigator>
	);
}
