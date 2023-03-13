import React from "react";
import './Header.css';
import { Navigator } from "../Navigator/Navigator";


export const Header = () => {
  return (
    <div className="headerDesign">
      <Navigator ruta={"Login"} destino={"/login"} />
      <Navigator ruta={"Register"} destino={"/register"} />
    </div>
  );
};
