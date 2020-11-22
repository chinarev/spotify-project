import React from "react";
import pic from '../../assets/img/test_album_cover.jpg'

class Playlist extends React.Component {
    render() {
        return <div className="playlist-info">
            <img src={pic} id="playlist-cover" alt="Playlist cover"/>
            <p id="playlist-name">playlist 1</p>
        </div>
    }
}

export default Playlist;