import React from "react";
import SpotifyWebApi from "spotify-web-api-js";

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(localStorage.getItem("textToken"));

class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: "<User name>",
            image: null,
            user_id: null
        };

    }

    GetPlaylist(album_cover, album_name) {
        const cover = React.createElement(
            'img',
            {className: "album-cover", src: album_cover, alt: "Album cover image"}
        )

        const name = React.createElement(
            'p',
            {className: "playlist-name"},
            album_name
        )

        return React.createElement(
            'div',
            {className: "grid-item playlist", onClick: () => this.onclick()},
            [cover, name],
        );
    }

    getUserID = () => {
        spotifyApi.getMe()
            .then(data => this.setState({
                user_id: data.id
            }));
    }

    getPlaylists = () => {
        spotifyApi.getUserPlaylists(this.state.user_id)
            .then(data => this.setState({
                playlists: data.items
            }));
    }

    componentDidMount() {
        this.getUserID();
        this.getPlaylists();

    }

    render() {
        console.log("getUserID: " + this.state.user_id);
        console.log("getPlaylists: " + this.state.playlists);

        let selectedPlaylist;
        if (this.state.playlists != null) {
            selectedPlaylist = this.GetPlaylist(this.state.playlists[1].images[0].url, this.state.playlists[1].name);
        }

        localStorage.getItem("selected_playlist_image");
        localStorage.getItem("selected_playlist_name");

        return React.createElement(
            'div',
            {className: "grid-container selected-playlist-page"},
            selectedPlaylist
        );
    }
}

export default Playlist;