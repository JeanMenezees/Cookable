import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Button from '../../common/components/button';
import SoraText from '../../common/components/text';
import TemplateScreen from '../../common/screens/template-screen';
import IngredientSection from './components/ingredient-section';

const reqPaths: string[] = [
	'carnes-vermelhas',
	'carboidratos',
	'grãos',
	'frutas',
	'legumes-e-verduras',
	'aves',
	'peixes-e-frutos-do-mar'
];

export default function Home(): JSX.Element {
	const baseUrl = 'http://192.168.1.10:3000/ingredientes';

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
				<FlatList
					data={reqPaths}
					renderItem={({ item }) => <IngredientSection apiPath={baseUrl} />}
					keyExtractor={(item) => item}
					ListFooterComponent={
						<Button value="Cozinhar!" extraStyle={styles.buttonMargin}/>
					}
				/>
			</TemplateScreen>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	buttonMargin: {
		marginBottom: 64
	}
});
