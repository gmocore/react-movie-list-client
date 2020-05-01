import React from "react";

const MovieDetails = ({ movie }) => {
  return (
    <li>
      <div className="title">{movie.title}</div>
      <div className="genre">{movie.genre}</div>
      <img src={movie.image_url} alt={movie.title}/>
    </li>
  );
};

export default MovieDetails;
