import React, { Props } from "react";
import { Message, MessageProps } from "../Message";
import { ScrollView, View } from "react-native";

import { styles } from "./styles";

export function MessageList() {
  const message: MessageProps = {
    id: "1",
    text: "Aplicação para o DoWhile 2021, utilizando React-Native com TypeScript. ",
    user: {
      name: "Pedro Henrique",
      avatar_url: "http://github.com/PedroHenrique-O.png",
    },
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
