import React, { useState } from "react";

const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setGenre("");
    setImage("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <div className="file-submit-wrapper">
        <input
          type="file"
          onChange={e => setImage(e.target.files[0])}
        />
        <input type="submit" value="Add Movie" />
      </div>
    </form>
  );
};

export default MovieForm;
