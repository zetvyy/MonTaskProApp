import React from "react";
import useDataInput from "../utils/custom-hooks";
import { useNavigate } from "react-router-dom";
import { loginByEmailPass, registerPageWithGogle } from "../utils/data-api";
import logoGogle from "../asset/icons/btn_google_signin_dark_pressed_web@2x.png";
import { FormLoginRegis } from "../components/formLogingRegis";
import { validasiFormRegisLogin } from "../utils/validasiLoginRegister";
import "../style/Register.css";

function Login() {
  const navigate = useNavigate();
  const [dataUser, setInputData] = useDataInput();
  const onHandleChange = (data) => {
    setInputData(data);
  };
  document.title = "Login";

  const onHandleSubmit = async () => {
    const response = await loginByEmailPass(dataUser).catch((err) => err);
    validasiFormRegisLogin(response);
    if (response.uid !== undefined) {
      localStorage.setItem("id", response.uid);
      setTimeout(() => {
        navigate("/Beranda");
      }, 1610)
    }
  };

  const onHandleSubmitWithGoogle = async () => {
    const responseGogle = await registerPageWithGogle().catch((err) => err);
    console.log(responseGogle);
  };

  const onNewRegister = () => {
    navigate("/register");
  };

  return (
    <div className="container">
      <div className="login">
        <p>Login</p>
        <FormLoginRegis handleChange={onHandleChange} />
        <button onClick={onHandleSubmit}>Login</button>
        <div className="pilihanLogin">Or</div>
        <button className="btnGogle" onClick={onHandleSubmitWithGoogle}>
          <img src={logoGogle} />
        </button>
        <div className="loginAccount">
          <p onClick={onNewRegister}>Belum punya akun</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
