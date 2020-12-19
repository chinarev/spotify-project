import React from "react";
import text_properties from './DefinedStyles'
import {spotifyApi} from "../all-playlists-page/Header";

export function getBase64Image(src, font_size, text_color, font) {
    return new Promise((resolve, reject) => {
        let playlist_name = localStorage.getItem("selected_playlist_name");
        let align = "center";
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            let dataURL;
            //to resize image into 500x500 square:
            let size = img.naturalHeight;
            let sy = 0;
            let sx = (img.naturalWidth - size) / 2;
            if (size > img.naturalWidth) {
                sy = (size - img.naturalWidth) / 2;
                size = img.naturalWidth;
                sx = 0;
            }
            canvas.height = 500;
            canvas.width = 500;

            ctx.drawImage(img, sx, sy, size, size, 0, 0, canvas.width, canvas.height);
            ctx.font = font_size + "px " + font;
            ctx.fillStyle = text_color;
            ctx.textAlign = align;
            ctx.fillText(playlist_name, canvas.height / 2, canvas.height / 2 + font_size / 4);
            dataURL = canvas.toDataURL('image/jpeg');
            resolve(dataURL);
        };
        img.onerror = reject;
        img.src = src;
    })
}

class StylesContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor container")
        this.state = {
            styles: []
        }
    }

    onclick(img) {
        let playlist_id = localStorage.getItem("selected_playlist_id")
        localStorage.setItem("selected_playlist_image", img);
        spotifyApi.uploadCustomPlaylistCoverImage(
            playlist_id,
            img.substring(img.indexOf(",") + 1)
        ).then(() => window.location.assign('http://localhost:3000/playlist/'))
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
        console.log("component did mount container")
        for (let i = 0; i < text_properties.length; i++) {
            getBase64Image(text_properties[i].img, text_properties[i].font_size,
                text_properties[i].text_color, text_properties[i].font).then(url => {
                let joined = this.state.styles.concat(url);
                this.setState({styles: joined})
            });
        }
    }

    render() {
        console.log("render container")
        let styles_elements = [];

        for (let i = 1; i <= this.state.styles.length; i++) {
            styles_elements[i - 1] = this.GetStyle(this.state.styles[i - 1], i);
        }

        return React.createElement(
            'div',
            {className: "grid-container styles-page"},
            styles_elements
        );
    }
}

export default StylesContainer;