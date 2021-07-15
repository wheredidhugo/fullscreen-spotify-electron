const config = require("./config.json");
const { LastFmNode } = require("lastfm");

const l = new LastFmNode({
  api_key: config.apiKey,
  secret: config.secret,
});

const trackStream = l.stream(config.username);

trackStream.start();

window.addEventListener("DOMContentLoaded", () => {
  function replaceText(selector, text) {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  }

  function replaceImg(selector, text) {
    const element = document.getElementById(selector);
    if (element) element.src = text;
  }

  function changeBackground(selector, text) {
    document.getElementsByClassName(selector)[0].style.backgroundImage = "url('" + text + "')";
  }

  trackStream.on("nowPlaying", function (track) {
    replaceText("tName", track.name);
    replaceText("tArtist", track.artist["#text"]);
    replaceImg("tAlbumImg", track.image[3]["#text"]);
    changeBackground("bgImg", track.image[3]["#text"])
  });
});
