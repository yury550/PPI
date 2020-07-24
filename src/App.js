import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>HiAgua</h1>
      <table>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Correo</th>
        <th>Telefono</th>

        <tr>
          <td>Yury</td>
          <td>Jiménez Peña</td>
          <td>yuryjimpe@gmail.com</td>
          <td>3024452323</td>
        </tr>

        <tr>
          <td>Danna Yaren</td>
          <td>Múnera Calle</td>
          <td>dannamc0304@gmail.com </td>
          <td>3107279959</td>
        </tr>

        <tr>
          <td>Daniela</td>
          <td>Mendoza Solano</td>
          <td>dannielaamendoza@gmail.com</td>
          <td>3017325934</td>
        </tr>
      </table>

      <h2>¿Qué es babel y webpack y para que se usa en react?</h2>
      <p>
        Babel es un transcompilador de JavaScript gratuito y de código abierto
        que se utiliza principalmente para convertir el código ECMAScript 2015+
        en una versión de JavaScript compatible con versiones anteriores que
        pueden ejecutar los motores JavaScript más antiguos.
      </p>
      <p>
        Webpack Es una herramienta extremadamente útil cuando desarrollas
        aplicaciones web diseñadas con filosofía modular, es decir, separando el
        código en módulos que luego se utilizan como dependencias en otros
        módulos. Una de las cosas que hace realmente bien Webpack es la gestión
        de esos módulos y de sus dependencias, pero también puede usarse para
        cuestiones como concatenación de código, minimización y ofuscación,
        verificación de buenas prácticas (linting), carga bajo demanda de
        módulos, etc...
      </p>
    </div>
  );
}
