import React from "react";
import text_properties from "../styles-gallery/DefinedStyles";

class BackgroundsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgrounds_gallery: text_properties.map(function(x){return x.img})
        }
    }

    onclickGallery(img) {
        window.location.assign(`http://localhost:3000/constructor?playlistID=${this.props.playlistID}&background=${img}`);
    }

    GetBackground(image, i) {
        const background_image = React.createElement(
            'img',
            {className: "album-cover", src: image, alt: "Album cover image", style: {objectFit: "cover"}}
        )

        const name = React.createElement(
            'p',
            {className: "playlist-name"},
            "Background " + i
        )

        return React.createElement(
            'div',
            {className: "grid-item playlist", onClick: () => this.onclickGallery(image)},
            [background_image, name],
        );
    }

    render() {
        let backgrounds = [];
        let i;
        for (i = 1; i <= this.state.backgrounds_gallery.length; i++) {
            backgrounds[i] = this.GetBackground(this.state.backgrounds_gallery[i - 1], i);
        }
        return React.createElement(
            'div',
            {className: "grid-container backgrounds-page"},
            backgrounds
        );
    }
}

export default BackgroundsContainer;