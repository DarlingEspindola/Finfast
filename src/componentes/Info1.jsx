import React from "react";

function Info1({ title }) {
  return (
    <section className="content-card">
      <article className="card-col">
        <h2 className="card-title">{title}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
          quaerat natus veritatis eius quam magnam, consequuntur nisi architecto
          labore autem molestiae nam, aut voluptas repellendus nesciunt eos
          dignissimos accusantium deserunt?
        </p>
      </article>
      <article className="card-col">
        <div className="coberturas">
          <div className="cobertura-title">
            <h2>
              PRINCIPALES <strong>COBERTURAS</strong>
            </h2>
            <hr color="#d83030" />
          </div>
          <div className="cobertura-section">
            <div className="card-col hr">Responsabilidad Civil Cruzada</div>
            <div className="card-col hr">
              Responsabilidad Civil por Transporte de Personas
            </div>
          </div>
          <div className="cobertura-section">
            <div className="card-col hr">Responsabilidad Civil Patronal</div>
            <div className="card-col hr">Defensa Penal del Asegurado</div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Info1;
