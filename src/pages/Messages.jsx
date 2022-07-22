import React, { useState, useEffect, useContext } from "react";
import { getMessages } from "../utils/getMessages";
import { UserContext } from "../context/UserContext";
import MessagesList from "../components/MessagesList";
import { getTokener } from "../utils/firebaseConfig";
import { onMessageListener } from "../utils/firebaseConfig";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { user } = useContext(UserContext);
  const [isTokenFound, setIsTokenFound] = useState(false);

  // getTokener(setIsTokenFound);

  onMessageListener()
    .then((payload) => {
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  // useEffect(() => {
  //   getTokener(setIsTokenFound);
  // }, []);

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

  const handleSeeToken = () => {
    try {
      getTokener(setIsTokenFound);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      {isTokenFound ? <p>Notificaciones activadas</p> : <p>Notificaciones desactivadas</p>}
      {isTokenFound && <p>{isTokenFound}</p>}
      <button type="button" onClick={handleSeeToken}>
        Activar notificaciones
      </button>
      <MessagesList messages={messages} />
    </div>
  );
};

export default Messages;
