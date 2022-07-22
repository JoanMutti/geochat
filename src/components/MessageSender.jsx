import React, { useState, useRef, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { sendMessage } from "../utils/sendMessage";
import "../styles/MessageSender.css";

const MessageSender = ({ position }) => {
  const { user } = useContext(UserContext);
  const [messageText, setMessageText] = useState("");
  const [messageTo, setMessageTo] = useState("");
  const messageTextInput = useRef(null);
  const messageToInput = useRef(null);

  const handleMessageTextChange = () => {
    setMessageText(messageTextInput.current.value);
  };

  const handleMessageToChange = () => {
    setMessageTo(messageToInput.current.value);
  };

  const handleSubmit = () => {
    const message = {
      from: user,
      to: messageTo,
      text: messageText,
      location: position,
      timeStamp: new Date().getTime(),
      notification: false,
    };
    sendMessage(message);
  };

  return (
    <div className="MessageSender">
      <input type="text" value={messageTo} ref={messageToInput} onChange={handleMessageToChange} placeholder="Para quien es el mensaje?" />
      <input type="text" value={messageText} onChange={handleMessageTextChange} ref={messageTextInput} placeholder="Escribe aqui el mensaje" />
      <button type="button" onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
};

export default MessageSender;
