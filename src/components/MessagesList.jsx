import React from "react";
import MessageSender from "./MessageSender";
import { usePosition } from "../hooks/usePosition";
import { getDistance } from "../utils/getDistance";

import "../styles/MessageList.css";

const Message = ({ message, position }) => {
  const date = new Date(message.timeStamp);
  const distance = getDistance(position.lat, position.lng, message.location.lat, message.location.lng);
  console.log(position);
  return (
    <div className="Message">
      <div className="Message-info">
        <p className="Message-from">De: {message.from}</p>
        <p className="Message-from">
          {date.getDay()}/{date.getMonth()}/{date.getFullYear()} - {date.getHours()}:{date.getMinutes()}
        </p>
        <p>A {distance} km</p>
      </div>
      <p className="Message-text">{message.text}</p>
    </div>
  );
};

const MessagesList = ({ messages }) => {
  const { position } = usePosition();

  return (
    <div className="MessageList">
      <div>
        <h1>Lista de mensajes</h1>
      </div>
      {messages && messages.map((message) => <Message position={position} key={message.id} message={message} />)}
      <div>
        <MessageSender position={position} />
      </div>
    </div>
  );
};

export default MessagesList;
