import React from "react";
import Header from "../all-playlists-page/Header";
import Playlist from "./Playlist";
import SideOptionsContainer from "./SideOptionsContainer";
import '../../assets/playlistPageStyle.css'


class SelectedPlaylistPage extends React.Component {
    componentDidMount() {
        document.title = 'SPALCO - Playlist page';
    }

    render() {
        console.log("selected_playlist_name: " + localStorage.getItem("selected_playlist_name"));
        console.log("selected_playlist_image: " + localStorage.getItem("selected_playlist_image"));
        console.log("selected_playlist_id: " + localStorage.getItem("selected_playlist_id"));
        return <div className="selected-playlist-page">
            <Header/>
            <h1 className="playlists_title" id="edit_title">Edit your playlist</h1>
            <div id="playlist-page-container">
                <Playlist/>
                <SideOptionsContainer/>
            </div>

        </div>
    }
}

export default SelectedPlaylistPage;