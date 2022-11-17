import { Store } from "pullstate";

export const store = new Store({
  playlists: [],
  selectedPlaylistIndex: 0,
  viewedPlaylistIndex: 0,
});
