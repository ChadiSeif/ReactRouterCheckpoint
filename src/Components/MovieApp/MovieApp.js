import React, { useState } from "react";
import "./../MovieApp/MovieApp.css";

import MovieList from "./../MovieList/MovieList";
import FilterByTitle from "./../FilterByTitle/FilterByTitle";
import FilterByRate from "../FilterByRating/FilterByRating";
import Add from "./../Add/Add";
import MoviesData from "../MoviesData";
import { Nav } from "../../Navbar";

const MovieApp = () => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(0);
  const [Movies, setMovies] = useState(MoviesData);

  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="filters">
        <FilterByTitle setSearch={setSearch} search={search} />
        <FilterByRate value={value} setValue={setValue} />
      </div>

      <MovieList
        Movies={Movies}
        setMovies={setMovies}
        search={search}
        value={value}
      />
      <Add Movies={Movies} setMovies={setMovies} />

      <footer className="footer">Movie App made by SeifChadi</footer>
    </div>
  );
};

export default MovieApp;
