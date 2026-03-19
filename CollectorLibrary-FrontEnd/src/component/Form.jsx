import { useState } from "react";
import "./Form.module.css";

export default function Form({ type, onClose }) {
  const [bookData, setBookData] = useState({
    title: "",
    author_id: "",
    genre: "",
    publication_year: "",
    isbn: "",
    page_count: "",
  });

  const [authorData, setAuthorData] = useState({
    first_name: "",
    last_name: "",
    birth_year: "",
    nationality: "",
  });

  const handleBookChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAuthorChange = (e) => {
    const { name, value } = e.target;
    setAuthorData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "book") {
      console.log("Book payload:", {
        title: bookData.title,
        author_id: Number(bookData.author_id),
        genre: bookData.genre,
        publication_year: bookData.publication_year
          ? Number(bookData.publication_year)
          : null,
        isbn: bookData.isbn,
        page_count: bookData.page_count ? Number(bookData.page_count) : null,
      });

      alert("Book creado correctamente");
    } else {
      console.log("Author payload:", {
        first_name: authorData.first_name,
        last_name: authorData.last_name,
        birth_year: authorData.birth_year ? Number(authorData.birth_year) : null,
        nationality: authorData.nationality,
      });

      alert("Author creado correctamente");
    }

    onClose();
  };

  if (type === "book") {
    return (
      <form onSubmit={handleSubmit} className="form">
        <div className="form-grid">
          <div className="form-group">
            <label className="label">Título</label>
            <input
              className="input"
              type="text"
              name="title"
              value={bookData.title}
              onChange={handleBookChange}
              placeholder="Ingrese el título"
              required
            />
          </div>

          <div className="form-group">
            <label className="label">Author ID</label>
            <input
              className="input"
              type="number"
              name="author_id"
              value={bookData.author_id}
              onChange={handleBookChange}
              placeholder="Ingrese el ID del autor"
              required
            />
          </div>

          <div className="form-group">
            <label className="label">Género</label>
            <input
              className="input"
              type="text"
              name="genre"
              value={bookData.genre}
              onChange={handleBookChange}
              placeholder="Ingrese el género"
            />
          </div>

          <div className="form-group">
            <label className="label">Año de publicación</label>
            <input
              className="input"
              type="number"
              name="publication_year"
              value={bookData.publication_year}
              onChange={handleBookChange}
              placeholder="Ejemplo: 2024"
            />
          </div>

          <div className="form-group">
            <label className="label">ISBN</label>
            <input
              className="input"
              type="text"
              name="isbn"
              value={bookData.isbn}
              onChange={handleBookChange}
              placeholder="Ingrese el ISBN"
            />
          </div>

          <div className="form-group">
            <label className="label">Cantidad de páginas</label>
            <input
              className="input"
              type="number"
              name="page_count"
              value={bookData.page_count}
              onChange={handleBookChange}
              placeholder="Ingrese el número de páginas"
            />
          </div>
        </div>

        <div className="actions">
          <button type="button" className="btn-secondary" onClick={onClose}>
            Cancelar
          </button>
          <button type="submit" className="btn-primary">
            Guardar Book
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-grid">
        <div className="form-group">
          <label className="label">Nombre</label>
          <input
            className="input"
            type="text"
            name="first_name"
            value={authorData.first_name}
            onChange={handleAuthorChange}
            placeholder="Ingrese el nombre"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Apellido</label>
          <input
            className="input"
            type="text"
            name="last_name"
            value={authorData.last_name}
            onChange={handleAuthorChange}
            placeholder="Ingrese el apellido"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Año de nacimiento</label>
          <input
            className="input"
            type="number"
            name="birth_year"
            value={authorData.birth_year}
            onChange={handleAuthorChange}
            placeholder="Ejemplo: 1990"
          />
        </div>

        <div className="form-group">
          <label className="label">Nacionalidad</label>
          <input
            className="input"
            type="text"
            name="nationality"
            value={authorData.nationality}
            onChange={handleAuthorChange}
            placeholder="Ingrese la nacionalidad"
          />
        </div>
      </div>

      <div className="actions">
        <button type="button" className="btn-secondary" onClick={onClose}>
          Cancelar
        </button>
        <button type="submit" className="btn-primary">
          Guardar Author
        </button>
      </div>
    </form>
  );
}