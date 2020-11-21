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