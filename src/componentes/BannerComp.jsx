import React from "react";
/* import banner from "./images/2_banner-test.png"; // Reemplaza './assets/banner.jpg' con la ruta correcta a tu imagen */
import Cuadro from "./Cuadro.jsx";

function BannerComp() {
  return (
    <div className="banner-container">
      <div className="text-overlay">
        <h1>Protege tu empresa con seguros </h1>
        <h1>100% online</h1>
        <br />
        <p>Responsabilidad Civil para Empresas</p>
        <br />
        <p>Protección Financiera para Empleadores</p>
      </div>
      {/* Otras partes del banner */}
      <Cuadro />
    </div>
  );
}

export default BannerComp;
