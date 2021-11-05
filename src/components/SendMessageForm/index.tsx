<<<<<<< Updated upstream
import React from "react";

import { TextInput, View } from "react-native";
=======
import React, { useState } from "react";

import { Alert, Keyboard, TextInput, View } from "react-native";
import { api } from "../../services/api";
>>>>>>> Stashed changes
import { COLORS } from "../../theme";
import { Button } from "../Button";

import { styles } from "./styles";

export function SendMessageForm() {
<<<<<<< Updated upstream
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
=======
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();

    if (messageFormatted.length > 0) {
      setSendingMessage(true);
      await api.post("/messages", { message: messageFormatted });
      setMessage("");
      Keyboard.dismiss();
      Alert.alert("Mensagem enviada com sucesso!");

      setSendingMessage(false);
    } else {
      Alert.alert("O campo de mensagem está vazio!");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
      />
>>>>>>> Stashed changes
      <Button
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        title="ENVIAR MENSAGEM"
<<<<<<< Updated upstream
=======
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
>>>>>>> Stashed changes
      />
    </View>
  );
}
