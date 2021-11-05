import React from "react";
import { useAuth } from "../../hooks/auth";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import LogoSvg from "../../assets/logo.svg";
import { UserPhoto } from "../userPhoto";

export function Header() {
  const { signOut, user } = useAuth();
  return (
    <View style={styles.container}>
      <LogoSvg style={styles.logo} />
      <View style={styles.logout}>
<<<<<<< Updated upstream
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
        <UserPhoto imageUri="https://github.com/PedroHenrique-O.png" />
=======
        {user && (
          <TouchableOpacity>
            <Text style={styles.logoutText} onPress={signOut}>
              Sair
            </Text>
          </TouchableOpacity>
        )}
        <UserPhoto imageUri={user?.avatar_url} />
>>>>>>> Stashed changes
      </View>
    </View>
  );
}
