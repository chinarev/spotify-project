import React from "react";
import SpotifyWebApi from "spotify-web-api-js";

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(localStorage.getItem("textToken"));

class SideOptionsContainer extends React.Component {

    onclickCover() {
        window.location.assign('http://localhost:3000/changeCover/');
    }

    onclickName() {
        var curr_name = localStorage.getItem("selected_playlist_name")
        var playlist_id = localStorage.getItem("selected_playlist_id")
        var new_name = prompt('Enter a new name', curr_name)
        if (new_name) {
            spotifyApi.changePlaylistDetails(
                playlist_id,
                {
                    name: new_name
                }
            )
            localStorage.setItem("selected_playlist_name", new_name);
        }
        document.location.reload()
    }

    render() {
        return <div id="side-options-container">
            <button className="side-options" onClick={(e) => this.onclickName(e)}>
                Change name
            </button>
            <button onClick={(e) => this.onclickCover(e)} className="side-options">
                Change cover
            </button>
        </div>
    }
}

export default SideOptionsContainer;