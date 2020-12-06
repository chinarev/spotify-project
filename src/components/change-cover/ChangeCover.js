import React from "react";
import Header from "../all-playlists-page/Header";
import Playlist from "./Playlist";
import SideOptionContainerChangeCover from "./SideOptionContainerChangeCover";

class ChangeCover extends React.Component {

    componentDidMount() {
        document.title = 'SPALCO - Playlist page';
    }

    render() {
        console.log("selected_playlist_name: " + localStorage.getItem("selected_playlist_name"));
        console.log("selected_playlist_image: " + localStorage.getItem("selected_playlist_image"));
        return <div className="selected-playlist-page">
            <Header/>
            <div id="playlist-page-container">
                <Playlist/>
                <SideOptionContainerChangeCover/>
            </div>
        </div>
    }

}

export default ChangeCover;