import React, { useState, useEffect } from "react";
import { InputText } from "../../common/InputText/InputText";
import { loginMe } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [credencialesError, setCredencialesError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [welcome, setWelcome] = useState("");

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const inputValidate = (e) => {
    switch (e.target.name) {
      case "email":
        break;

      case "password":
        if (credenciales.password.length < 8) {
          setCredencialesError((prevState) => ({
            ...prevState,
            passwordError: "Debes escribir como mínimo 8 caracteres",
          }));
        } else {
          setCredencialesError((prevState) => ({
            ...prevState,
            passwordError: "",
          }));
        }

        break;

      default:
        console.log("uff....");
    }
  };

  const loginFuncion = () => {
    //aqui llamamos al servicio para intentar logear

    //imaginamos de momento que aquí tendríamos una validación.....

    loginMe(credenciales)
      .then((userData) => {
        setWelcome(`Bienvenida de nuevo.... ${userData.name}`);

        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="loginDesign">
      {welcome === "" ? (
        <>
          <InputText
            type="email"
            name="email"
            placeholder="escribe un email"
            changeFunction={(e) => inputHandler(e)}
            validateFunction={(e) => inputValidate(e)}
          />
          <div>{credencialesError.emailError}</div>
          <InputText
            type="password"
            name="password"
            placeholder="escribe un password"
            changeFunction={(e) => inputHandler(e)}
            validateFunction={(e) => inputValidate(e)}
          />
          <div>{credencialesError.passwordError}</div>

          <div className="buttonLoginDesign" onClick={() => loginFuncion()}>
            Log me
          </div>
        </>
      ) : (
        <div>{welcome}</div>
      )}
    </div>
  );
};
