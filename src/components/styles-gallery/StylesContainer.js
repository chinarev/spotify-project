import React from "react";
import text_properties from './DefinedStyles'
import Header from "../all-playlists-page/Header";
import {getBase64Image} from "../../service/drawText";

class StylesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: []
        }
    }

    onclick(img) {
        let playlist_id = this.props.playlistID
        Header.spotifyApi.uploadCustomPlaylistCoverImage(
            playlist_id,
            img.substring(img.indexOf(",") + 1)
        ).then(() => window.location.assign(`http://localhost:3000/playlist?id=${playlist_id}`));
    }

    GetStyle(image, i) {
        const style_image = React.createElement(
            'img',
            {className: "album-cover", src: image, alt: "Style image"}
        )

        const name = React.createElement(
            'p',
            {className: "playlist-name"},
            "Style " + i
        )

        return React.createElement(
            'div',
            {className: "grid-item playlist", onClick: () => this.onclick(image)},
            [style_image, name],
        );
    }

    componentDidMount() {
        Header.spotifyApi.getPlaylist(this.props.playlistID).then(playlist => {
            for (let i = 0; i < text_properties.length; i++) {
                getBase64Image(text_properties[i].img, text_properties[i].font_size,
                    text_properties[i].text_color, text_properties[i].font, playlist.name).then(url => {
                    let joined = this.state.styles.concat(url);
                    this.setState({styles: joined})
                });
            }
        })
    }

    detailedReactHTMLElement;

    render() {
        let styles_elements = [];

        for (let i = 1; i <= this.state.styles.length; i++) {
            styles_elements[i - 1] = this.GetStyle(this.state.styles[i - 1], i);
        }

        this.detailedReactHTMLElement = React.createElement(
            'div',
            {className: "grid-container styles-page"},
            styles_elements
        );
        return this.detailedReactHTMLElement;
    }
}

export default StylesContainer;
