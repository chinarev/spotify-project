import React from "react";
import Header from "../all-playlists-page/Header";

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            name: null,
            id: this.props.id
        }
        this.getPlaylist();
    }

    getPlaylist = () => {
        Header.spotifyApi.getPlaylist(this.state.id).then(playlist => this.setState({
            img: playlist.images[0].url,
            name: playlist.name
        }));
    }

    componentDidUpdate() {
        localStorage.setItem("selected_playlist_name", this.state.name);
    }

    render() {
        return <div className="playlist-info">
            <img src={this.state.img} id="playlist-cover" alt="Playlist cover"/>
            <p id="playlist-name">{this.state.name}</p>
        </div>
    }
}

export default Playlist;