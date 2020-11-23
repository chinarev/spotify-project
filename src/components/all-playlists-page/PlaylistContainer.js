import React from "react";
import pic from '../../assets/img/test_album_cover.jpg'

class PlaylistContainer extends React.Component {
    onclick() {
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
            {className: "grid-item playlist", onClick: () => this.onclick()},
            [cover, name],
        );
    }

    render() {
        let albums = [];
        let i;
        let list_size = 4;
        for (i = 1; i <= list_size; i++) {
            albums[i] = this.GetPlaylist(pic, "playlist " + i);
        }
        return React.createElement(
            'div',
            {className: "grid-container all-playlists-page"},
            albums
        );
    }
}

export default PlaylistContainer;