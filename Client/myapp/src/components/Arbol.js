import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/arbol.css";

function Arbol() {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/arbol").then((response) => {
      setInformation(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="contenedor">
      <h1>
          Arbol
      </h1>
      <table className="tabla">
        <tbody>
          <tr>
            <th>Id</th>
            <th>nombre_sensor</th>
            <th>temperatura</th>
            <th>humedad</th>
            <th>toma</th>
            <th>soil</th>
            <th>actuador</th>
          </tr>
          {information.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.nombre_sensor}</td>
                <td>{val.temperatura}</td>
                <td>{val.humedad}</td>
                <td>{val.toma}</td>
                <td>{val.soil}</td>
                <td>{val.actuador ? val.actuador : "null"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    )
}

export default Arbol
