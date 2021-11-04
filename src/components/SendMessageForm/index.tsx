import React from "react";

import { TextInput, View } from "react-native";
import { COLORS } from "../../theme";
import { Button } from "../Button";

import { styles } from "./styles";

export function SendMessageForm() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <Button
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        title="ENVIAR MENSAGEM"
      />
    </View>
  );
}
