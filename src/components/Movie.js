import React from "react";
import MovieInfo from "./MovieInfo";

const Movie = (props) => {
  return (
    <li
      onClick={() => {
        if (props.onClick) {
          props.onClick(props.movie);
        }
      }}
      className={props.movie.checked ? "selected" : ""}
    >
      <img src={props.movie.Poster}></img>
      <MovieInfo movie={props.movie} />
      {props.children}
    </li>
  );
};

export default Movie;
