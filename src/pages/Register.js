import React from "react";
// import { Buttom } from "../components/button";
import useDataInput from "../utils/custom-hooks";
// import { register } from "../utils/data-api";
import { useNavigate } from "react-router-dom";
import {registerPage, registerPageWithGogle} from "../utils/data-api";
// import { LocaleConsumer } from "../contexts/locale-contexts";
// import { loading } from "../utils/custom-toast";
import logoGogle from "../asset/icons/btn_google_signin_dark_pressed_web@2x.png";
import "../style/Register.css";

function Register() {
  const navigate = useNavigate();
  const [dataUser, setInputData] = useDataInput();
  const onHandleChange = (data) => {
    setInputData(data);
  };
  document.title = "Register";

  const onHandleSubmit = async () => {
    const response = await registerPage(dataUser).catch(err => err)
    if (response === "auth/invalid-email") {
      // loading("Loading register", response);
      // setTimeout(() => {
      //   navigate("/login");
      // }, 1610);
      alert("Maff email tidak valid");
    } else if (response === "auth/internal-error") {
      alert("Password harus terisi");
    } else if (response === "auth/weak-password") {
      alert("Minimal password 6 karacter");
    } else if (response === "auth/email-already-in-use") {
      alert("Email sudah terdaftar");
    } else if (response.uid !== undefined) {
      console.log("login berhasil")
    }
  };

  const onHandleSubmitWithGoogle = async () => {
    const responseGogle = await registerPageWithGogle().catch(err => err)
    console.log(responseGogle);
  }

  const onNewLogin = () => {
    navigate("/login");
  };

  return (
        <div className="container">
          <div className="register">
            <p>Register</p>
            <form>
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
            >Register</button>
            <div className="pilihanLogin">Or</div>
            <button className="btnGogle" onClick={onHandleSubmitWithGoogle}>
              <img src={logoGogle} />
            </button>
            <div className="registerNewAccount">
              <p onClick={onNewLogin}>
                Sudah punya akun 
              </p>
            </div>
          </div>
        </div>
      );
}

export default Register;