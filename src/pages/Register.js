import React from "react";
import useDataInput from "../utils/custom-hooks";
import { useNavigate } from "react-router-dom";
import { registerPage } from "../utils/data-api";
import { FormLoginRegis } from "../components/formLogingRegis";
import { validasiFormRegisLogin } from "../utils/reuseFuction";
import "../style/Register.css";

function Register() {
  const navigate = useNavigate();
  const [dataUser, setInputData] = useDataInput();
  const onHandleChange = (data) => {
    setInputData(data);
  };
  document.title = "Register";

  const onHandleSubmit = async () => {
    const response = await registerPage(dataUser).catch((err) => err);
    validasiFormRegisLogin(response);
  };

  const onNewLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="register">
        <p>Register</p>
        <FormLoginRegis handleChange={onHandleChange} />
        <button onClick={onHandleSubmit}>Register</button>
        <div className="registerNewAccount">
          <p onClick={onNewLogin}>Sudah punya akun</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
