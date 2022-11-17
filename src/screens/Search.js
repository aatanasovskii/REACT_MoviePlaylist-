import axios from "axios";
import React, { useState } from "react";
import Button from "../components/Button";
import Movie from "../components/Movie";
import { store } from "../store";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const selectedPlaylistIndex = store.useState((s) => s.selectedPlaylistIndex);
  const playlists = store.useState((s) => s.playlists);

  console.log(playlists);

  const onMovieClick = (movie) => {
    store.update((s) => {
      let movieExistsInPlaylist = false;

      // to add the same movie only once, not multiple times.
      s.playlists[selectedPlaylistIndex].movies.map((item) => {
        if (movie.imdbID === item.imdbID) {
          movieExistsInPlaylist = true;
        }
      });

      if (!movieExistsInPlaylist) {
        movie.checked = false;
        s.playlists[selectedPlaylistIndex].movies.push(movie);

        localStorage.setItem("playlists", JSON.stringify(s.playlists));
      }
    });
  };

  // axios.get("http://www.omdbapi.com/?apikey=58d1e4a4&s=indiana").then((res) => console.log(res));
  return (
    <div class="search-from-container">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          axios
            .get(`http://www.omdbapi.com/?apikey=58d1e4a4&s=${searchTerm}`)
            .then((res) => {
              const searchResults = res.data.Search;
              setSearchResults(searchResults);
              console.log(searchResults);
            });
        }}
      >
        <input
          type="text"
          className="search-input"
          placeholder="search for your favorite movies"
          onChange={(ev) => setSearchTerm(ev.target.value)}
        ></input>

        <Button buttonClass="primary-button">
          <i class="fas fa-search"></i>
        </Button>
        <ul class="movie-list">
          {searchResults.map((result) => (
            <Movie movie={result} onClick={onMovieClick}>
              <div class="movie-overlay">
                <i class="far fa-plus-square"></i>
              </div>
            </Movie>
          ))}
          ;
        </ul>
      </form>
    </div>
  );
};

export default Search;
