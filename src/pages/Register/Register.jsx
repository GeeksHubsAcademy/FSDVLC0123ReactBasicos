import React, { useState, useEffect } from "react";
import { Drop } from "../../common/Drop/Drop";
import { InputText } from "../../common/InputText/InputText";
import "./Register.css";

export const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    country: "",
    colegiado: "",
    especialidad: "",
  });

  const [conditional, setConditional] = useState(false);

  const inputHandler = (e) => {
    //Binding....
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dropDownHandler = (option) => {
    setConditional(option);
  };

  const inputValidate = (e) => {};

  return (
    <div className="registerDesign">
      {/* {<pre>{JSON.stringify(userData, null,2)}</pre>} */}
      <InputText
        type="text"
        name="name"
        placeholder="escribe un nombre"
        changeFunction={(e) => inputHandler(e)}
        validateFunction={(e) => inputValidate(e)}
      />
      <InputText
        type="text"
        name="surname"
        placeholder="escribe un apellido"
        changeFunction={(e) => inputHandler(e)}
        validateFunction={(e) => inputValidate(e)}
      />
      <InputText
        type="email"
        name="email"
        placeholder="escribe un email"
        changeFunction={(e) => inputHandler(e)}
        validateFunction={(e) => inputValidate(e)}
      />
      <InputText
        type="text"
        name="country"
        placeholder="escribe un pais"
        changeFunction={(e) => inputHandler(e)}
        validateFunction={(e) => inputValidate(e)}
      />

      {conditional && (
        <>
          <InputText
            type="text"
            name="colegiado"
            placeholder="numero de colegiado"
            changeFunction={(e) => inputHandler(e)}
            validateFunction={(e) => inputValidate(e)}
          />
          <InputText
            type="text"
            name="especialidad"
            placeholder="especialidad"
            changeFunction={(e) => inputHandler(e)}
            validateFunction={(e) => inputValidate(e)}
          />
        </>
      )}

      <Drop
        titulo={"Rol"}
        //ChangeFunction es una funcion que pasamos como prop, la prop es changefunction en si
        changeFunction={(option) => dropDownHandler(option)}
        //Yo soy el padre, tengo una funcion local que se llama dropDownHandler
      />
    </div>
  );
};
