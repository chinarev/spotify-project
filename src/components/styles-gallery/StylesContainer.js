import React from "react";
import back1 from  '../../assets/img/background_gallery/background_gallery1.jpg'

class StylesContainer extends React.Component {

    // onclick(img, playlist_name, playlist_id) {
    //
    //     //window.location.assign('http://localhost:3000/playlist/');
    // }

    GetBackground(image, i) {
        const background_image = React.createElement(
            'img',
            {className: "album-cover", src: image, alt: "Album cover image"}
        )

        const name = React.createElement(
            'p',
            {className: "playlist-name"},
            "Style " + i
        )

        return React.createElement(
            'div',
            {className: "grid-item playlist"},
            [background_image, name],
        );
    }

    render() {
        let backgrounds = [];
        let i;
        let list_size = 10;
            for (i = 1; i <= list_size; i++) {
                backgrounds[i] = this.GetBackground(back1, i);
            }

        return React.createElement(
            'div',
            {className: "grid-container styles-page"},
            backgrounds
        );
    }
}

export default StylesContainer;