import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./Addmovie.module.css";

function AddMovieForm(props) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
  });

  const [errors, setErrors] = useState({
    title: false,
    date: false,
  });

  const { movies, setMovies } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const { title, date } = formData;

  function validate() {
    const newErrors = {
      title: title === "",
      date: date === "",
    };
    setErrors(newErrors);
    return !newErrors.title && !newErrors.date;
  }

  function addMovie() {
    const movie = {
      id: "xyz",
      title: title,
      year: date,
      type: "Movie",
      poster: "https://picsum.photos/200/300?grayscale",
    };
    setMovies([...movies, movie]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    validate() && addMovie();
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input_form}
          id="title"
          type="text"
          value={title}
          name="title"
          onChange={handleChange}
        />
        {errors.title && <Alert>Title Wajib Diisi</Alert>}

        <input
          className={styles.input_form}
          id="date"
          type="text"
          value={date}
          name="date"
          onChange={handleChange}
        />
        {errors.date && <Alert>Date Wajib Diisi</Alert>}

        <button className={styles.button_form}>Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovieForm;
