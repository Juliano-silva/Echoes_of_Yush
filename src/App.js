import React from "react";
import Player from "./components/Player/Player";
import SongList from "./components/Player/SongList";
import songs from "../src/data/songs.json";
import SongDetail from "./components/Player/SongDetail";

for(let index = 0; index < songs.length; index++){
    const song = songs[index];
    song.id = index; 
}

const App = () => {
    return(
        <React.Fragment>
            <SongDetail />
            <SongList songs={songs} />
            <Player />
            <a href="#focused" id="focus-link" hidden>
                Go to playing element
            </a>
        </React.Fragment>
    );
};

export default App;