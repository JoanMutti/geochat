import { useRef, useState } from "react";

const Login = ({ setUser }) => {
  const [name, setName] = useState("");
  const nameInput = useRef();

  const handleNameChange = () => {
    setName(nameInput.current.value);
  };

  const handleSubmit = () => {
    sessionStorage.setItem("user", name);
    setUser(name);
  };

  return (
    <div>
      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" value={name} onChange={handleNameChange} ref={nameInput} />
      <button type="button" onClick={handleSubmit}>
        Ingresar
      </button>
    </div>
  );
};

export default Login;
