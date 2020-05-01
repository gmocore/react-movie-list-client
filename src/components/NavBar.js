import React from "react";

const NavBar = ({ movies }) => {
  return (
    <div className="navbar">
      <h1>Movie List</h1>
      <p>you currently have {movies.length} to watch</p>
    </div>
  );
};

export default NavBar;
