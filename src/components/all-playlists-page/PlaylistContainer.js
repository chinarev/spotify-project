import React from "react";
import {spotifyApi} from "./Header";

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

    onclick(img, playlist_name, playlist_id) {
        window.location.assign(`http://localhost:3000/playlist?id=${playlist_id}`);
    }

    GetPlaylist(album_cover, album_name, album_id) {
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
            {className: "grid-item playlist", onClick: () => this.onclick(album_cover, album_name, album_id)},
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
        let albums = [];
        let i;
        let list_size = 0;
        if (this.state.playlists != null) {
            list_size = this.state.playlists.length;
            for (i = 0; i < list_size; i++) {
                albums[i] = this.GetPlaylist(this.state.playlists[i].images[0].url, this.state.playlists[i].name, this.state.playlists[i].id);
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