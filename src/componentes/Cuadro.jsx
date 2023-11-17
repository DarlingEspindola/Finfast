import React, { useState } from "react";
import Modal from "./Modal";

function Cuadro() {
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal (HOOK)
  const [rut, setRut] = useState("");
  const [rutValidation, setRutValidation] = useState("");
  const [activities, setActivities] = useState("");

  const validarRut = (rut) => {
    if (!/^[0-9]+-[0-9kK]{1}$/.test(rut)) {
      return false; // El formato no es válido
    }

    const rutLimpio = rut.replace(/[^0-9kK]/g, ""); // Elimina todos los caracteres que no sean números ni 'k'
    const rutDigitos = parseInt(rutLimpio.slice(0, -1), 10);
    const rutVerificador = rutLimpio.slice(-1).toLowerCase();

    let suma = 0;
    let multiplicador = 2;

    // Calcula la suma ponderada de los dígitos del RUT
    for (let i = rutDigitos.toString().length - 1; i >= 0; i--) {
      suma += parseInt(rutDigitos.toString().charAt(i), 10) * multiplicador;
      multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const digitoVerificadorCalculado = 11 - (suma % 11);

    const digitoVerificador =
      digitoVerificadorCalculado === 10
        ? "k"
        : digitoVerificadorCalculado.toString();

    return digitoVerificador === rutVerificador;
  };

  const onChangeRut = (event) => {
    setRut(event.target.value);
    setRutValidation(validarRut(event.target.value));
  };

  return (
    <div className="content-box">
      <div className="item-box">
        <label htmlFor="rut">Rut Empresa</label>
        <input
          className="form-input"
          type="text"
          id="rut"
          name="rut"
          value={rut}
          onChange={onChangeRut}
        />
        <label style={{ color: rutValidation ? "#ddd" : "red" }}>
          {rutValidation ? "campo obligatorio" : "Rut Invalido"}
        </label>
      </div>

      <div className="item-box">
        <label htmlFor="actividad">Actividad para asegurar</label>
        <input
          className="form-input"
          type="text"
          id="actividad"
          name="actividad"
        />
      </div>
      <div className="button-group item-box">
        <button onClick={() => setShowModal(rutValidation ? true : false)}>
          Cotizar seguro
        </button>
        <Modal showModal={showModal} setShowModal={setShowModal} rut={rut} />{" "}
        {/* Pasar el estado y la función al componente Modal */}
      </div>
    </div>
  );
}

export default Cuadro;
