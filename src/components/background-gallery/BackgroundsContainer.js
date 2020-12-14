import React from "react";
import back1 from '../../assets/img/background_gallery/background_gallery1.jpg'
import back2 from '../../assets/img/background_gallery/background_gallery2.jpg'
import back3 from '../../assets/img/background_gallery/background_gallery3.jpg'
import back4 from '../../assets/img/background_gallery/background_gallery4.jpg'
import back5 from '../../assets/img/background_gallery/background_gallery5.jpg'
import back6 from '../../assets/img/background_gallery/background_gallery6.jpg'
import back7 from '../../assets/img/background_gallery/background_gallery7.jpg'
import back8 from '../../assets/img/background_gallery/background_gallery8.jpg'
import back9 from '../../assets/img/background_gallery/background_gallery9.jpg'
import back10 from '../../assets/img/background_gallery/background_gallery10.jpg'
import back11 from '../../assets/img/background_gallery/background_gallery11.jpg'
import back12 from '../../assets/img/background_gallery/background_gallery12.jpg'
import back13 from '../../assets/img/background_gallery/background_gallery13.jpg'
import pic from "../../assets/img/white_background.jpg";

class BackgroundsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            background: pic
        }
    }

    onclickGallery(img) {
        //TODO: перевести img в base64
        this.setState({background: img})
        //this.setState({text_color: color.hex});
        localStorage.setItem("preview_background", img);
        console.log("preview background: " + img);
        window.location.assign(`http://localhost:3000/constructor?background=${img}`);

    }

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
            {className: "grid-item playlist", onClick: () => this.onclickGallery(image)},
            [background_image, name],
        );
    }

    render() {
        let backgrounds = [];
        let backgrounds_gallery = [back1, back2, back3, back4, back5, back6, back7, back8, back9, back10, back11, back12, back13];
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