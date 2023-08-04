import React, { useState } from "react";
import "./aouth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password)
  };
  return (
    <div className="container">
      <div className="aouth-main background-log">
        <div className="aouth">
          <h2>وارد شوید</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>ایمیل</label>
              <input
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ایمیل..."
              />
            </div>
            <div className="form-group">
              <label>پسوورد</label>
              <input
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="پسوورد..."
              />
            </div>
            <div className="form-group">
              <button type="submit">ورود به حساب کاربری</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
