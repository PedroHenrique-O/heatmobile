import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import LogoSvg from "../../assets/logo.svg";
import { UserPhoto } from "../userPhoto";

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />
      <UserPhoto imageUri="https://github.com/PedroHenrique-O.png" />
      <TouchableOpacity>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
