import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Sora_400Regular, useFonts } from '@expo-google-fonts/sora';
import AppLoading from 'expo-app-loading';

export default function App() {
	let [fontsLoaded] = useFonts({
		Sora_400Regular
	});

	return fontsLoaded ? (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	) : <AppLoading />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
