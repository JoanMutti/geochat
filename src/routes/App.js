import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Home from "../pages/Home";
import "../App.css";
import Messages from "../pages/Messages";

function App() {
  const { user } = useContext(UserContext);

  return <Routes>{!user ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Messages />} />}</Routes>;
}

export default App;
