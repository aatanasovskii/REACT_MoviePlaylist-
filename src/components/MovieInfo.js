import React from "react";

const MovieInfo = (props) => {
  const { movie } = props;
  return (
    <div className="movie-info">
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieInfo;
