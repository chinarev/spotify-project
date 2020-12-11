import React from "react";
import pic from "../../assets/img/white_background.jpg";

class Background extends React.Component {

    render() {
        return <div className="playlist-info">
            <img src={pic} id="playlist-cover" alt="Playlist cover"/>
            <p id="playlist-name">{localStorage.getItem("selected_playlist_name")}</p>
        </div>
    }
}

export default Background;