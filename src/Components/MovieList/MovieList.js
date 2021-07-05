import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./../MovieCard/MovieCard.css";

const MovieList = ({ Movies, setMovies, search, value }) => {
  return (
    <div className="MovieCard">
      {Movies.filter(
        (movie) =>
          movie.Rating >= value &&
          movie.Title.toLowerCase().includes(search.toLowerCase())
      ).map((movie, i) => (
        <MovieCard key={i} movie={movie} setMovies={setMovies} />
      ))}
    </div>
  );
};

export default MovieList;
