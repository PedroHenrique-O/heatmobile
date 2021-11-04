import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import LogoSvg from "../../assets/logo.svg";
import { UserPhoto } from "../userPhoto";

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg style={styles.logo} />
      <View style={styles.logout}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
        <UserPhoto imageUri="https://github.com/PedroHenrique-O.png" />
      </View>
    </View>
  );
}
