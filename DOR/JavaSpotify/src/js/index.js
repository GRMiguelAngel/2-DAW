import Player from "./player.js"
import songs from "../assets/songs/*.mp3"

Object.keys(songs);
const map = {};

let aux = 1;
for (var key of Object.keys(songs)) {
    map[".item-" + aux] = songs[key];
    aux++;
}

const player = new Player(map);
console.log(map);