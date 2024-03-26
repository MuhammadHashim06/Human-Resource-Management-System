import { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import image from './images/Log-in_vector.png'

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const User = [
    {
      id: 1,
      name: "Muhammad",
      email: "muhammad@gmail.com",
      password: "Muhammad123",
      role: "Admin",
    },
    {
      id: 2,
      name: "Hashim",
      email: "hashim@gmail.com",
      password: "Hashim123",
      role: "User",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = User.find((u) => u.email === email && u.password === password);
    if (user) {
      console.log("User found:", user);
      props.handleUser(user);
      navigate('/Dashboard')
    } else {
      setError("Invalid email or password");
      setEmail("");
      setPassword("");
    }
};

  return (
    <div className="login">
      <div className="box1">
        <h1>Log-in</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
          // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])"
            type="password"
            name="password"
            id=""
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Log-in" />
          <p className="error">{error}</p>
        </form>
      </div>
      <div className="box2">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Login;
