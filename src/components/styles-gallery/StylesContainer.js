import React from "react";
import back1 from  '../../assets/img/background_gallery/background_gallery1.jpg'
import back2 from  '../../assets/img/background_gallery/background_gallery2.jpg'
import back3 from  '../../assets/img/background_gallery/background_gallery3.jpg'
import back4 from  '../../assets/img/background_gallery/background_gallery4.jpg'
import back5 from  '../../assets/img/background_gallery/background_gallery5.jpg'
import back6 from  '../../assets/img/background_gallery/background_gallery6.jpg'

import SpotifyWebApi from "spotify-web-api-js";


var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(localStorage.getItem("textToken"));

function getBase64Image(src, callback) {
    let playlist_name = localStorage.getItem("selected_playlist_name");
    let font_size = 60;
    let text_color = "black";
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = src;
    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        let dataURL;

        //to crop image into square:
        let size = img.naturalHeight;
        if (size > img.naturalWidth) {
            size = img.naturalWidth;
        }
        canvas.height = size;
        canvas.width = size;
        ctx.drawImage(img, -(img.naturalWidth/2 - size/2),
            -(img.naturalHeight/2 - size/2));
        ctx.font = font_size + "px Comic Sans MS";
        ctx.fillStyle = text_color;
        ctx.textAlign = "center";
        ctx.fillText(playlist_name, size/2, size/2 + font_size/2);
        dataURL = canvas.toDataURL('image/jpeg');
        callback(dataURL);
    };

    if (img.complete || img.complete === undefined) {
        img.src = "data:image/jpeg;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        img.src = src;
    }
}

class StylesContainer extends React.Component {
    onclick(img) {
        var playlist_id = localStorage.getItem("selected_playlist_id")
        getBase64Image(
            img,
            function(dataUrl) {
                localStorage.setItem("selected_playlist_image", dataUrl);
                spotifyApi.uploadCustomPlaylistCoverImage(
                    playlist_id,
                    dataUrl.substring(dataUrl.indexOf(",") + 1)
                ).then(() => window.location.assign('http://localhost:3000/playlist/'))
            }
        );
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
    
    render() {
        let styles = [];
        let style_gallery = [back1, back2, back3, back4, back5, back6];
        let i;
            for (i = 1; i <= style_gallery.length; i++) {
                styles[i] = this.GetStyle(style_gallery[i-1] , i);
            }

        return React.createElement(
            'div',
            {className: "grid-container styles-page"},
            styles
        );
    }
}

export default StylesContainer;