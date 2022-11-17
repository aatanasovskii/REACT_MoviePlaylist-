import React from "react";
import Movie from "../components/Movie";
import { store } from "../store";

const Playlistview = () => {
  const playlistIndex = store.useState((s) => s.viewedPlaylistIndex);

  console.log("playlist index", playlistIndex);

  if (typeof playlistIndex === "undefined") {
    return <p>Playlist could not be found</p>;
  }

  const playlists = store.useState((s) => s.playlists);
  const playlist = playlists[playlistIndex];

  if (!playlist) return <p>Playlist doesn't exist!</p>;

  const movies = playlist.movies;

  const onDelete = (index) => {
    const newMovies = [...movies];
    newMovies.splice(index, 1); // we are taking a copy of that and deleting 1 movie.
    store.update((s) => {
      s.playlists[playlistIndex].movies = newMovies;
      localStorage.setItem("playlists", JSON.stringify(s.playlists));
    });
  };

  const onCheck = (index) => {
    store.update((s) => {
      s.playlists[playlistIndex].movies[index].checked = !s.playlists[
        playlistIndex
      ].movies[index].checked;
      localStorage.setItem("playlists", JSON.stringify(s.playlists));
    });
  };

  return (
    <>
      <h1>{playlist.name}</h1>
      {movies.length === 0 && (
        <p>Sorry, you seem to have no movies in this playlist.</p>
      )}
      <ul className="movie-list">
        {movies.map((movie, index) => (
          <Movie movie={movie} key={index}>
            <div className="movie-overlay">
              <i class="far fa-check-circle" onClick={onCheck(index)}></i>
              <i class="far fa-trash-alt" onClick={onDelete(index)}></i>
            </div>
          </Movie>
        ))}
        ;
      </ul>
    </>
  );
};

export default Playlistview;
