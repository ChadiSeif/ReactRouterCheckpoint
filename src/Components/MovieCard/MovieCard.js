import React from "react";
import { Card } from "react-bootstrap";
import { Rate } from "antd";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  return (
    <div className="MovieCard">
      <Card style={{ width: "18rem", height: "550px" }}>
        <Card.Img variant="top" src={movie.PosterURL} alt="Movie photo" />
        <Card.Body>
          <Card.Title>
            {movie.Title}
            <Link to={`/movie/${movie.Id}`} className="nav-link" />
          </Card.Title>
          {/* <Card.Text>{movie.Description}</Card.Text> */}
          <Rate value={movie.Rating} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
