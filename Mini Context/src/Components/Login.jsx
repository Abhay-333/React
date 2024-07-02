import React, { useContext, useState } from "react";
import UserContext from "../Context/Context";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(userName, password)
};

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" value={userName} onChange={(e)=>setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
