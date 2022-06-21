import React from 'react';

import { StyleSheet, TouchableOpacity } from 'react-native';
import SoraText from '../../../../common/components/text';
import { RecipieProps } from './recipie-props';

export default function Recipie(props: RecipieProps): JSX.Element {
	return (
		<TouchableOpacity style={styles.container}>
			<SoraText extraStyle={styles.titulo}>{props.title}</SoraText>
			<SoraText extraStyle={styles.descricao}>{props.description}</SoraText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		padding: 16,
		marginHorizontal: 16,
		borderRadius: 8,
		marginVertical: 8,
		flex: 1
	},
	titulo: {
		fontSize: 24,
		paddingHorizontal: 16,
		marginBottom: 8,
		color: 'white'
	},
	descricao: {
		fontSize: 16,
		paddingHorizontal: 16,
		color: 'white'
	}
});
