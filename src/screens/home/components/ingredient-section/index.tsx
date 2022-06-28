import React, { useEffect, useState } from 'react';

import { StyleSheet, View } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';
import SoraText from '../../../../common/components/text';
import { ApiService } from '../../../../services/api';
import { IIngredientSection } from './ingredient-section';
import { IngredientSectionProps } from './props';

export default function IngredientSection(props: IngredientSectionProps): JSX.Element {
	const [ingredientSection, setIngredientSection] = useState<IIngredientSection>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);

		ApiService.get<IIngredientSection>(props.apiPath)
			.then(ingredientSection => {
				setIngredientSection(ingredientSection);
			})
			.then(() => {
				setIsLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return isLoading ? (
		<View>
			<SkeletonContent containerStyle={{height: 32, width: 72}} isLoading={isLoading}/>
			<SkeletonContent containerStyle={{height: 24, width: 64}} isLoading={isLoading}/>
		</View>
	) : <View>
		<SoraText extraStyle={styles.ingredientTitle}>{ingredientSection?.title}</SoraText>
		<View style={styles.flexBox}>
			{ingredientSection?.ingredients.map((ingrediente) => {
				return (
					<SoraText key={ingrediente.id} extraStyle={styles.ingrediente}>
						{ingrediente.name}
					</SoraText>
				);
			})}
		</View>
	</View>;
}

const styles = StyleSheet.create({
	flexBox: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginHorizontal: 16,
	},
	ingrediente: {
		backgroundColor: 'black',
		padding: 8,
		color: 'white',
		fontSize: 16,
		lineHeight: 24,
		marginRight: 8,
	},
	ingredientTitle: {
		fontSize: 24,
		lineHeight: 32,
		marginVertical: 32,
		paddingHorizontal: 16,
	},
});
