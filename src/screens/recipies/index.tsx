import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import SoraText from '../../common/components/text';
import TemplateScreen from '../../common/screens/template-screen';
import Recipie from './components/recipie';

const recipies = [
	{
		titulo: 'Bolo de cenoura',
		description: 'com cobertura de chocolate...',
	},
	{
		titulo: 'Bolo de chocolate',
		description: 'com cobertura de morango...',
	},
	{
		titulo: 'Bolo de morango',
		description: 'com cobertura de chocolate...',
	},
];

export default function Recipies(): JSX.Element {
	return (
		<TemplateScreen>
			<SoraText extraStyle={styles.titulo}>Receitas</SoraText>
			<FlatList
				data={recipies}
				renderItem={({ item }) => (
					<Recipie
						title={item.titulo}
						description={item.description}
					/>
				)}
				keyExtractor={(item) => item.titulo}
			/>
		</TemplateScreen>
	);
}

const styles = StyleSheet.create({
	titulo: {
		fontSize: 32,
		marginVertical: 16,
		paddingHorizontal: 16,
	},
});
