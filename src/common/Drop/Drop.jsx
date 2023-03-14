import React from "react";
import "./Drop.css";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export const Drop = ({changeFunction, titulo}) => {
  return (
    <DropdownButton id="dropdown-basic-button" title={titulo}>
      <Dropdown.Item onClick={()=>changeFunction(true)}>Doctor</Dropdown.Item>
      <Dropdown.Item onClick={()=>changeFunction(false)}>Paciente</Dropdown.Item>
    </DropdownButton>
  );
};
