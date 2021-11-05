import React, { Props, useState, useEffect } from "react";
import { Message, MessageProps } from "../Message";
import { ScrollView, View } from "react-native";
import { io } from "socket.io-client";

import { styles } from "./styles";
import { api } from "../../services/api";

let messageQueue: MessageProps[] = [];
const socket = io(String(api.defaults.baseURL));
socket.on("new_message", (newMessage) => {
  messageQueue.push(newMessage);
  console.log(newMessage);
});

export function MessageList() {
  const [currentMessage, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const messagesResponse = await api.get<MessageProps[]>("/messages/last3");
      setCurrentMessages(messagesResponse.data);
    }
    fetchMessages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messageQueue.length > 0) {
        setCurrentMessages((prevState) => [
          messageQueue[0],
          prevState[0],
          prevState[1],
        ]);
        messageQueue.shift();
      }
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // const message: MessageProps = {
  //   id: "1",
  //   text: "Aplicação para o DoWhile 2021, utilizando React-Native com TypeScript. ",
  //   user: {
  //     name: "Pedro Henrique",
  //     avatar_url: "http://github.com/PedroHenrique-O.png",
  //   },
  // };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessage.map((messages) => (
        <Message key={messages.id} data={messages} />
      ))}
    </ScrollView>
  );
}
