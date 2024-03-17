import './Login.css'; // Assuming your CSS file is named index.css and is located in the same directory as Login.js

function Login() {
  return (
    <div className="login">
      <div className="box1">
        <h1>Log-in</h1>
        <form action="submit">
          {/* <label htmlFor="email">Company Email</label> */}
          <input type="email" name="email" id="" placeholder="Enter your Email" />
    
          {/* <label htmlFor="password">Password</label> */}
          <input type="password" name="password" id="" placeholder="Enter your Password" />
    
          <input type="submit" value="Log-in" />
          <a href="./Dashboard.html">Forget Password?</a>
        </form>
      </div>
      <div className="box2">
        <img src="../Images/Log-in_vector.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
