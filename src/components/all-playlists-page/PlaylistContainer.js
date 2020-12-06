import React from "react";
import SpotifyWebApi from "spotify-web-api-js";

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(localStorage.getItem("textToken"));

class PlaylistContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: null,
            playlists: null
        };
        this.getUserID();
        this.getPlaylists();
    }

    onclick(img, playlist_name) {
        localStorage.setItem("selected_playlist_name", playlist_name);
        localStorage.setItem("selected_playlist_image", img);
        window.location.assign('http://localhost:3000/playlist/');
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
            {className: "grid-item playlist", onClick: () => this.onclick(album_cover, album_name)},
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
                playlists: data.items.filter(playlist =>  (playlist.owner.id === this.state.user_id))
            }));
    }

    componentDidMount() {
        this.getUserID();
        this.getPlaylists();
    }

    render() {
        console.log("getUserID: " + this.state.user_id);
        console.log("getPlaylists: " + this.state.playlists);

        let albums = [];
        let i;
        let list_size = 0;
        if (this.state.playlists != null) {
            list_size = this.state.playlists.length;
            for (i = 0; i < list_size; i++) {
                albums[i] = this.GetPlaylist(this.state.playlists[i].images[0].url, this.state.playlists[i].name);
            }
        }

        return React.createElement(
            'div',
            {className: "grid-container all-playlists-page"},
            albums
        );
    }
}

export default PlaylistContainer;