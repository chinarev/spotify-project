import React from "react";
import text_properties from './DefinedStyles'
import {spotifyApi} from "../all-playlists-page/Header";

var getLineMulti = function(ctx, text, opts) {

    // Default options
    if(!opts)
        opts = {}
    if (!opts.font)
        opts.font = 'sans-serif'
    if (typeof opts.stroke == 'undefined')
        opts.stroke = false
    if (typeof opts.verbose == 'undefined')
        opts.verbose = false
    if (!opts.rect)
        opts.rect = {
            x: 0,
            y: 0,
            width: ctx.canvas.width,
            height: ctx.canvas.height
        }
    if (!opts.lineHeight)
        opts.lineHeight = 1.1
    if (!opts.minFontSize)
        opts.minFontSize = 30
    if (!opts.maxFontSize)
        opts.maxFontSize = 100
    // Default log function is console.log - Note: if verbose il false, nothing will be logged anyway
    if (!opts.logFunction)
        opts.logFunction = function(message) { console.log(message) }


    const words = require('words-array')(text)
    if (opts.verbose) opts.logFunction('Text contains ' + words.length + ' words')
    var lines = []

    // Finds max font size  which can be used to print whole text in opts.rec
    for (var fontSize = opts.minFontSize; fontSize <= opts.maxFontSize; fontSize++) {

        // Line height
        var lineHeight = fontSize * opts.lineHeight

        // Set font for testing with measureText()
        ctx.font = " " + fontSize + "px " + opts.font

        // Start
        var x = opts.rect.x
        var y = opts.rect.y + fontSize // It's the bottom line of the letters
        lines = []
        var line = ""

        // Cycles on words
        for (var word of words) {
            // Add next word to line
            var linePlus = line + word + " "
            // If added word exceeds rect width...
            if (ctx.measureText(linePlus).width > (opts.rect.width)) {
                // ..."prints" (save) the line without last word
                lines.push({ text: line, x: x, y: y })
                // New line with ctx last word
                line = word + " "
                y += lineHeight
            } else {
                // ...continues appending words
                line = linePlus
            }
        }

        // "Print" (save) last line
        lines.push({ text: line, x: x, y: y })

        // If bottom of rect is reached then breaks "fontSize" cycle
        if (y > opts.rect.height)
            break

    }

    if (opts.verbose) opts.logFunction("Font used: " + ctx.font)

    // Print lines
    for (var line of lines)
        // Fill or stroke
        if (opts.stroke)
            ctx.strokeText(line.text.trim(), line.x, line.y)
        else
            ctx.fillText(line.text.trim(), line.x, line.y)

    // Returns font size
    return fontSize

}


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
                //const drawMultilineText = require('canvas-multiline-text')

                const fontSizeUsed = getLineMulti(
                    ctx, //"Please could you stop the noise, I'm trying to get some rest from all the unborn chicken voices in my head. What's that? What's that?",
                    "mem",
                    {
                        rect: {
                            x: canvas.width / 2,
                            y: canvas.height / 5,
                            width:  canvas.width - 20,
                            height: canvas.height,

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
