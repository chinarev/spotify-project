import React from "react";

class Playlist extends React.Component {

    render() {
        return <div className="playlist-info">
            <img src={localStorage.getItem("selected_playlist_image")} id="playlist-cover" alt="Playlist cover"/>
            <p id="playlist-name">{localStorage.getItem("selected_playlist_name")}</p>
        </div>
    }
}

export default Playlist;