import React from "react";
import { store } from "../store";
import Playlist from "./Playlist";

const PlaylistCollection = () => {
  const playlists = store.useState((s) => s.playlists);

  return (
    <div className="playlist-collection">
      {playlists.length === 0 && <p>You have no playlist</p>}
      <ul>
        {playlists.map((playlist, index) => (
          <Playlist title={playlist.name} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default PlaylistCollection;
