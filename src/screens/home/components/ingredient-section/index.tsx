import React from "react";

import { StyleSheet, View } from "react-native";
import SoraText from "../../../../common/components/text";

const temperos = [
  {
    nome: "Pimenta",
  },
  {
    nome: "Sal",
  },
];

export default function IngredientSection(): JSX.Element {
  return (
    <View>
      <SoraText extraStyle={styles.ingredientTitle}>Temperos</SoraText>
      <View style={styles.flexBox}>
        {temperos.map((tempero) => {
          return (
            <SoraText key={tempero.nome} extraStyle={styles.tempero}>
              {tempero.nome}
            </SoraText>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 16,
  },
  tempero: {
    backgroundColor: "black",
    padding: 8,
    color: "white",
    fontSize: 16,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  ingredientTitle: {
    fontSize: 24,
    marginVertical: 32,
    paddingHorizontal: 16,
  },
});
