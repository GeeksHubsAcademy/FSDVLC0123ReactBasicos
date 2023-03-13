import React, { useState, useEffect } from "react";
import { bringUsers } from "../../services/apiCalls";
import "./Home.css";

export const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users.length === 0) {
      setTimeout(() => {
        bringUsers()
          .then((info) => {
            setUsers(info.data.users);
          })
          .catch((error) => console.log(error));
      }, 2500);
    }
  }, [users]);

  return (
    <div className="homeDesign">
      {users.length > 0 ? (
        <div>
          {/* Al cumplirse, mapearemos los usuarios que SI han venido */}

          {users.slice(0,10).map((usuario) => {
            return <div key={usuario.id}>{usuario.firstName}</div>;
          })}
        </div>
      ) : (
        <div>
          {/* Al no cumplirse, no tenemos nada que mapear, mostraremos mensaje de cargando */}
          CARGANDO USUARIOS
        </div>
      )}
    </div>
  );
};
