import React from "react";
import Header from "../all-playlists-page/Header";
import Playlist from "./Playlist";
import SideOptionsContainer from "./SideOptionsContainer";
import '../../assets/playlistPageStyle.css'

class SelectedPlaylistPage extends React.Component {
    constructor(props) {
        super(props);
        const search = props.location.search; // returns the URL query String
        const params = new URLSearchParams(search);
        this.state = {
            id: params.get('id')
        }
    }

    componentDidMount() {
        document.title = 'SPALCO - Playlist page';
    }

    render() {
        return <div className="selected-playlist-page">
            <Header/>
            <h1 className="playlists_title" id="edit_title">Edit your playlist</h1>
            <div id="playlist-page-container">
                <Playlist id={this.state.id}/>
                <SideOptionsContainer id={this.state.id}/>
            </div>
        </div>
    }
}

export default SelectedPlaylistPage;