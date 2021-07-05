import React, { useState, useEffect } from "react";

import MoviesData from "../MoviesData";
import YoutubeEmbed from "../MovieDescription/YoutubeEmbed";
import "./MovieDescription.css";
import { Button } from "react-bootstrap";

const MovieDescription = ({ match, history }) => {
  const [movie, setMovie] = useState({});
  console.log(movie);
  useEffect(() => {
    setMovie(MoviesData.find((movie) => movie.Id === +match.params.Id));
  }, [match.params.Id]);

  return (
    <div className="MovieDesc">
      <h2 style={{ color: "white" }}>{movie.Title}</h2>
      <p>Description: {movie.Description}</p>
      <YoutubeEmbed embedId={`${movie.Trailer}`} />
      <Button variant="outline-light" onClick={() => history.goBack()}>
        Go back
      </Button>
    </div>
  );
};

export default MovieDescription;
