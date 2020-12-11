import React from "react";
import SideOptionEditContainer from "./SideOptionEditContainer";
import Background from "./Background";
import Header from "../all-playlists-page/Header";
import Playlist from "../selected-playlist-page/Playlist";
import SideOptionsContainer from "../selected-playlist-page/SideOptionsContainer";

class Constructor extends React.Component {

    onclick() {
    }

    componentDidMount() {
        document.title = 'SPALCO - Main page';
    }

    render() {
        return <div className="selected-playlist-page">
            <Header/>
            <div id="playlist-page-container">
                <Background/>
                <SideOptionEditContainer/>
            </div>
        </div>;
    }
}

export default Constructor;