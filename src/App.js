import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/movies")
      .then((res) => {
        console.log(res);
        setMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  async function addMovie(title, genre, image) {
    const imageFormData = new FormData()
    imageFormData.append('file', image)
    imageFormData.append('upload_preset', 'movie-list')
    try {
      const cloudinary = await axios(
        {
          method: "post",
          url: 'https://api.cloudinary.com/v1_1/CLOUDINARY-USER-NAME/image/upload',
          data: imageFormData,
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      )
      console.log(cloudinary)
      const flask_db = await axios(
        {
          method: "post",
          url: 'http://localhost:5000/api/v1/movie',
          data: {
              title: title,
              genre: genre,
              // Either http or https
              // image_url: cloudinary.data.url,
              image_url: cloudinary.data.secure_url,
              public_id: cloudinary.data.public_id
          },
          headers: {
              'Content-Type': 'application/json'
          }
        }
      )
      console.log(flask_db)
      setMovies([...movies, flask_db.data])
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="app">
      <NavBar movies={movies} />
      <MovieList movies={movies} />
      <MovieForm addMovie={addMovie} />
    </div>
  );
};

export default App;
