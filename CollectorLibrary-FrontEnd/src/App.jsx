import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "./component/Modal.css"; //sirve para mejorar la apariencia del modal, puedes personalizarlo a tu gusto
import Form from "./component/Form";
//import OtroButon from "./component/button";


function App() {
  const [formType, setFormType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (type) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormType("");
  };

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Dashboard</h1>
          <p>Selecciona qué deseas crear</p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <OtroButon
            Text="Crear Book"
            IconRef="/icons.svg#documentation-icon"
            onClick={() => openModal("book")}
          />

          <OtroButon
            Text="Crear Author"
            IconRef="/icons.svg#social-icon"
            onClick={() => openModal("author")}
          />
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Acciones</h2>
          <p>Presiona un botón para abrir el formulario en un popup.</p>
        </div>

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Estado</h2>
          <p>
            {isModalOpen
              ? `Popup activo: ${formType === "book" ? "Book" : "Author"}`
              : "No hay ningún popup abierto"}
          </p>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      {isModalOpen && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title">
                {formType === "book" ? "Crear Book" : "Crear Author"}
              </h2>
              <button className="close-btn" onClick={closeModal}>
                X
              </button>
            </div>

            <Form type={formType} onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;