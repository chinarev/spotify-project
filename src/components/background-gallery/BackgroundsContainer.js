import React from "react";
import back1 from  '../../assets/img/background_gallery/background_gallery1.jpg'
import back2 from  '../../assets/img/background_gallery/background_gallery2.jpg'
import back3 from  '../../assets/img/background_gallery/background_gallery3.jpg'
import back4 from  '../../assets/img/background_gallery/background_gallery4.jpg'
import back5 from  '../../assets/img/background_gallery/background_gallery5.jpg'
import back6 from  '../../assets/img/background_gallery/background_gallery6.jpg'

class BackgroundsContainer extends React.Component {

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
            "Background " + i
        )

        return React.createElement(
            'div',
            {className: "grid-item playlist"},
            [background_image, name],
        );
    }

    render() {
        let backgrounds = [];
        let backgrounds_gallery = [back1, back2, back3, back4, back5, back6]
        let i;
        let list_size = 6;
            for (i = 1; i <= list_size; i++) {
                backgrounds[i] = this.GetBackground(backgrounds_gallery[i - 1], i);
            }

        return React.createElement(
            'div',
            {className: "grid-container backgrounds-page"},
            backgrounds
        );
    }
}

export default BackgroundsContainer;