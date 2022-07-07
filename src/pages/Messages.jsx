import React, { useState, useEffect, useContext } from "react";
import { getMessages } from "../utils/getMessages";
import { UserContext } from "../context/UserContext";
import MessagesList from "../components/MessagesList";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const unsuscribe = getMessages(user, (querySnapshot) => {
      const messagesReceived = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setMessages(messagesReceived);
    });
    return () => {
      unsuscribe();
    };
  }, [user]);

  return (
    <div>
      <MessagesList messages={messages} />
    </div>
  );
};

export default Messages;
