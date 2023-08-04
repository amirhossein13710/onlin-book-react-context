import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  return (
    <div className="container">
      <div className="aouth-main background-reg">
        <div className="aouth">
          <h2>ثبت نام کنید</h2>
          <form onSubmit={handelSubmit}>
            <div className="form-group">
              <label>نام کاربری</label>
              <input
                name="name"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="نام کاربری"
              />
            </div>
            <div className="form-group">
              <label>ایمیل</label>
              <input
                name="email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="ایمیل..."
              />
            </div>
            <div className="form-group">
              <label>پسوورد</label>
              <input
                name="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="پسوورد..."
              />
            </div>
            <div className="form-group">
              <button type="submit">ثبت نام</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
