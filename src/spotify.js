export const authEndpoint = "htpps://accounts.spotify.com/authorize";
const redirecturi = "http://localhost:3000/";

const clientId = "460b84ef0d054df58992bea1f4ab54cc";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client+id=${clientId}&redirect_uri=${redirecturi}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=false`;
