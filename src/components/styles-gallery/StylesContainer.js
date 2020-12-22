import React from "react";
import text_properties from './DefinedStyles'
import {spotifyApi} from "../all-playlists-page/Header";

export function getBase64Image(src, font_size, text_color, font, text) {
    return new Promise((resolve, reject) => {
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

            if (text !== undefined) {
                ctx.font = font_size + "px " + font;
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.textBaseline = 'middle';
                const drawMultilineText = require('canvas-multiline-text')

                const fontSizeUsed = drawMultilineText(
                    ctx,
                    "Please could you stop the noise, I'm trying to get some rest from all the unborn chicken voices in my head. What's that? What's that?",
                    {
                        rect: {
                            width:  canvas.width - 20,
                            height: canvas.height - 20,
                            x: canvas.width / 2,
                            y: 0,
                        },
                        lineHeight: 0.5,
                        font: font_size + "px " + font
                    }
                )


                // let maxWidth = 450;
                // let lineHeight = font_size;
                // let x = canvas.width / 2;
                // let y = font_size/2;
                // let words = text.split(' ');
                // let line = '';
                //
                // //to calculate text height and y position
                // for (let n = 0; n < words.length; n++) {
                //     let testLine = line + words[n] + ' ';
                //     let metrics = ctx.measureText(testLine);
                //     let testWidth = metrics.width;
                //     if (testWidth > maxWidth && n > 0) {
                //         line = words[n] + ' ';
                //         y += lineHeight;
                //     } else {
                //         line = testLine;
                //     }
                // }
                //
                // y = (canvas.height - y + font_size) / 2;
                // words = text.split(' ');
                // line = '';
                //
                // for (let n = 0; n < words.length; n++) {
                //     let testLine = line + words[n] + ' ';
                //     let metrics = ctx.measureText(testLine);
                //     let testWidth = metrics.width;
                //     if (testWidth > maxWidth && n > 0) {
                //         ctx.fillText(line, x, y);
                //         line = words[n] + ' ';
                //         y += lineHeight;
                //     } else {
                //         line = testLine;
                //     }
                // }
                // ctx.fillText(line, x, y);
            }
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
        this.state = {
            styles: []
        }
    }

    onclick(img) {
        let playlist_id = this.props.playlistID
        spotifyApi.uploadCustomPlaylistCoverImage(
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
        spotifyApi.getPlaylist(this.props.playlistID).then(playlist => {
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
