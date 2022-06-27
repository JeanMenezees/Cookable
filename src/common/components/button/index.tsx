import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import SoraText from '../text';
import { ButtonProps } from './button-props';

export default function Button(props: ButtonProps): JSX.Element {
	return <TouchableOpacity style={styles.botao}>
		<SoraText extraStyle={styles.textoBotao}>{props.value}</SoraText>
	</TouchableOpacity>;
}

const styles = StyleSheet.create({
	botao: {
		margin: 16,
		backgroundColor: 'black',
		paddingVertical: 16,
		borderRadius: 8,
		marginBottom: 32
	},
	textoBotao: { 
		color: 'white',
		textAlign: 'center'
	}
});