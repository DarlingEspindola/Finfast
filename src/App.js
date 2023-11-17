import React from "react";
import BannerComp from "./componentes/BannerComp.jsx"; // Importa el componente BannerComp
import Info1 from "./componentes/Info1.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerComp />
      </header>
      <main>
        <div className="container-card">
          <Info1 title="Responsabilidad Civil General para Empresas" />
          <div className="divider" />
          <Info1 title="Protección Financiera para Empleadores" />
        </div>
      </main>
    </div>
  );
}

export default App;
