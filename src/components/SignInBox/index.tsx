import React from "react";

import { View } from "react-native";
import { COLORS } from "../../theme";
<<<<<<< Updated upstream
=======
import { useAuth } from "../../hooks/auth";
>>>>>>> Stashed changes
import { Button } from "../Button";

import { styles } from "./styles";

export function SignInBox() {
<<<<<<< Updated upstream
  return (
    <View style={styles.container}>
      <Button
        title="Entrar com github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icons="github"
=======
  const { signIn, isSigning } = useAuth();
  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icons="github"
        onPress={signIn}
        isLoading={isSigning}
>>>>>>> Stashed changes
        //isLoading
      />
    </View>
  );
}
