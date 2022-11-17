import { store } from "../store";
import React, { useState } from "react";
import PlaylistCollection from "./PlaylistCollection";
import Button from "./Button";
import TextField from "./TextField";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [playlistName, setPlaylistName] = useState("");
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate("/search");
  };

  const onButtonClick = () => {
    store.update((s) => {
      s.playlists.push({ name: playlistName, movies: [] });
      setPlaylistName("");
      localStorage.setItem("playlists", JSON.stringify(s.playlists));
    });
  };

  const onSearchClick = () => {
    navigate("/search");
  };

  return (
    <header>
      <div className="logo" onClick={onLogoClick}>
        OMPL
      </div>
      <PlaylistCollection />
      <div className="header-actions">
        <a
          href="#"
          class="button primary-button header-search"
          onClick={onSearchClick}
        >
          Search movies
        </a>
        <div class="playlist-add-container">
          <TextField
            value={playlistName}
            placeholder="Enter a playlist name"
            onChange={(ev) => {
              setPlaylistName(ev.target.value);
            }}
          />
          <Button onClick={onButtonClick} buttonClass="primary-button">
            <i class="fas fa-plus"></i>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
