import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SoraTextProps } from './props';

export default function SoraText(props: SoraTextProps): JSX.Element { 
	return <Text style={[props.extraStyle, styles.text]}>
		{props.children}
	</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontFamily: 'Sora Regular'
	}
});