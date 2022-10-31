import React from "react";
// import { Buttom } from "../components/button";
import useDataInput from "../utils/custom-hooks";
// import { register } from "../utils/data-api";
import { useNavigate } from "react-router-dom";
// import { LocaleConsumer } from "../contexts/locale-contexts";
// import { loading } from "../utils/custom-toast";
import "../style/Register.css";

function Register() {
  const navigate = useNavigate();
  const [dataUser, setInputData] = useDataInput();
  const onHandleChange = (data) => {
    setInputData(data);
  };
  document.title = "Register";

  const onHandleSubmit = async () => {
    // const response = await register(dataUser);
    // if (response.error === false) {
    //   loading("Loading register", response);
    //   setTimeout(() => {
    //     navigate("/login");
    //   }, 1610);
    // } else {
    //   loading("Loading register", response);
    // }
    console.log("hai");
  };

  const onNewLogin = () => {
    navigate("/login");
  };

  return (
        <div className="container register">
          <div className="register">
            <p>Register</p>
            <form>
              <input
                type="name"
                id="name"
                placeholder="Name"
                onChange={(data) => onHandleChange(data)}
              />
              <br />
              <input
                type="email"
                id="email"
                placeholder="Email"
                onChange={(data) => onHandleChange(data)}
              />
              <br />
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={(data) => onHandleChange(data)}
              />
              <br />
            </form>
            <button
              onClick={onHandleSubmit}
            />
            <div className="registerNewAccount">
              <p onClick={onNewLogin}>
              </p>
            </div>
          </div>
        </div>
      );
}

export default Register;