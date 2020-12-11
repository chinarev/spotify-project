import React from "react";
import back1 from '../../assets/img/background_gallery/background_gallery1.jpg'
import back2 from '../../assets/img/background_gallery/background_gallery2.jpg'
import back3 from '../../assets/img/background_gallery/background_gallery3.jpg'
import back4 from '../../assets/img/background_gallery/background_gallery4.jpg'
import back5 from '../../assets/img/background_gallery/background_gallery5.jpg'
import back6 from '../../assets/img/background_gallery/background_gallery6.jpg'

import SpotifyWebApi from "spotify-web-api-js";

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(localStorage.getItem("textToken"));

function getBase64Image(src, font_size, text_color, font) {
    return new Promise((resolve, reject) => {
        let playlist_name = localStorage.getItem("selected_playlist_name");
        let align = "center";
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            let dataURL;
            //to resize image into 300x300 square:
            let size = 300;
            canvas.height = size;
            canvas.width = size;
            ctx.drawImage(img, 0, 0, size, size);
            ctx.font = font_size + "px " + font;
            ctx.fillStyle = text_color;
            ctx.textAlign = align;
            ctx.fillText(playlist_name, size / 2, size / 2 + font_size / 2);
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
            styles: [],
            pictures: [back1, back2, back3, back4, back5, back6]
        }
    }

    onclick(img) {
        var playlist_id = localStorage.getItem("selected_playlist_id")
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
        //TODO: перенести эти стили в файл и импортировать сюда массив
        //предопределенные вручную стили для галереи готовых стилей
        let text_prop1 = {
            font_size: 40,
            text_color: "SlateBlue",
            font: "Brush Script MT",
        }

        //блестящие штуки
        let text_prop2 = {
            font_size: 30,
            text_color: "#625c8a",
            font: "Lucida Handwriting",
        }

        //гора
        let text_prop3 = {
            font_size: 70,
            text_color: "black",
            font: "Copperplate",
        }

        //лес
        let text_prop4 = {
            font_size: 50,
            text_color: "WhiteSmoke",
            font: "Papyrus",
        }

        //небо
        let text_prop5 = {
            font_size: 60,
            text_color: "white",
            font: "Brush Script MT",
        }

        //кислотный микс
        let text_prop6 = {
            font_size: 40,
            text_color: "#3366cc",
            font: "Comic Sans MS",
        }

        let text_properties = [text_prop1, text_prop2, text_prop3, text_prop4, text_prop5, text_prop6];
        for (let i = 0; i < this.state.pictures.length; i++) {
            getBase64Image(this.state.pictures[i], text_properties[i].font_size,
                text_properties[i].text_color, text_properties[i].font).then(url => {
                let joined = this.state.styles.concat(url);
                this.setState({styles: joined})
            })
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