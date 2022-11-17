import React from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../store";

const Playlist = (props) => {
  const selectedPlaylistIndex = store.useState((s) => s.selectedPlaylistIndex);
  const isSelected = selectedPlaylistIndex === props.index;
  const navigate = useNavigate();

  const onViewPlaylist = () => {
    store.update((s) => {
      s.viewedPlaylistIndex = props.index;
      console.log("updated viewed playlist index", props.index);
    });
    navigate("/playlistview");
  };

  const onSelectPlaylist = () => {
    store.update((s) => {
      s.selectedPlaylistIndex = props.index;
    });
  };

  return (
    <li className={isSelected ? "selected" : ""} key="props.title">
      <a href="/#" onClick={onViewPlaylist}>
        {props.title}
      </a>
      <i class="far fa-plus-square" onClick={onSelectPlaylist}></i>
    </li>
  );
};

export default Playlist;
