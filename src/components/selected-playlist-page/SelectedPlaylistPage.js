import React from "react";
import Header from "../all-playlists-page/Header";
import Playlist from "./Playlist";
import SideOptionsContainer from "./SideOptionsContainer";
import '../../assets/playlistPageStyle.css'
import SpotifyWebApi from "spotify-web-api-js";

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(localStorage.getItem("textToken"));

class SelectedPlaylistPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "<User name>",
            image: null,
            user_id: null
        };

    }

    render() {
        console.log("selected_playlist_name: " + localStorage.getItem("selected_playlist_name"));
        console.log("selected_playlist_image: " + localStorage.getItem("selected_playlist_image"));

        return <div className="selected-playlist-page">
            <Header/>
            <div id="playlist-page-container">
                <Playlist/>
                <SideOptionsContainer/>
            </div>
        </div>
    }


}

export default SelectedPlaylistPage;