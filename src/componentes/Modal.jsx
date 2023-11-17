import React from "react";
import { useEffect } from "react";

function Modal({ showModal, setShowModal, rut }) {
  useEffect(() => {
    const fetchData = async () => {
      if (showModal === true) {
        try {
          const response = await fetch(
            `https://finfastEastUSSoapApi.azurewebsites.net/api/test/getactivities`,
            {
              method: "POST",
              headers: {
                PruebaTecnica: "PruebaTecnica",
              },
              body: rut,
            }
          );
          if (response.ok) {
            const getActivities = await response.json();
            console.log(getActivities);
          } else {
            throw new Error("Error al obtener datos");
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [showModal]);

  return (
    showModal && (
      <div className="modal-overlay">
        <div className="modal-content">
          <span className="close" onClick={() => setShowModal(false)}>
            &times;
          </span>
          <h2>Modal Title</h2>
          <p>Contenido del modal...</p>
        </div>
      </div>
    )
  );
}

export default Modal;
