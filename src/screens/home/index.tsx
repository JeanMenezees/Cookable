import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../common/components/button';
import SoraText from '../../common/components/text';
import TemplateScreen from '../../common/screens/template-screen';
import IngredientSection from './components/ingredient-section';

export default function Home(): JSX.Element {
	return (
		<View style={styles.container}>
			<TemplateScreen>
				<SoraText
					extraStyle={{
						fontSize: 32,
						marginTop: 16,
						paddingHorizontal: 16,
					}}
				>
          O que há de bom hoje?
				</SoraText>
				<IngredientSection />
			</TemplateScreen>
			<View style={styles.botaoBox}>
				<Button value="Cozinhar!"/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	botaoBox: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
});
