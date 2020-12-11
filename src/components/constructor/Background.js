import React from "react";
import pic from "../../assets/img/white_background.jpg";
import {getBase64Image} from "../styles-gallery/StylesContainer";

class Background extends React.Component {

    constructor(props) {
        super(props);
        console.log("constructor container")
        this.state = {
            preview: pic,
            background: localStorage.getItem("preview_background"),
            text_size: localStorage.getItem("preview_text_size"),
            text_font: localStorage.getItem("preview_text_font"),
            text_color: localStorage.getItem("preview_text_color"),
        }
    }

    componentDidMount() {
        console.log("component background DidMount");
        console.log("back: " + localStorage.getItem("preview_background"));
        console.log("text_size: " + localStorage.getItem("preview_text_size"));
        console.log("text_font: " + localStorage.getItem("preview_text_font"));
        console.log("text_color: " + localStorage.getItem("preview_text_color"));
        console.log("state: " + this.state.text_size);

        let text_props = {
            text_size: localStorage.getItem("preview_text_size"),
            text_font: localStorage.getItem("preview_text_font"),
            text_color: localStorage.getItem("preview_text_color"),
        }
        if (this.state.text_size !== text_props.text_size) {
            this.setState({
                text_size: localStorage.getItem("preview_text_size"),
            });
        }
        if (this.state.text_font !== text_props.text_font) {
            this.setState({
                text_font: localStorage.getItem("preview_text_font"),
            });
        }
        if (this.state.text_color !== text_props.text_color) {
            this.setState({
                text_color: localStorage.getItem("preview_text_color"),
            });
        }
        // this.setState({
        //     text_size: localStorage.getItem("preview_text_size"),
        //     text_font: localStorage.getItem("preview_text_font"),
        //     text_color: localStorage.getItem("preview_text_font")
        // });
        getBase64Image(this.state.preview, this.state.text_size,
            this.state.text_color, this.state.text_font).then(url => {
            this.setState({preview: url})
        })


    }

    render() {

        return <div className="playlist-info">
            <img src={this.state.preview} id="playlist-cover" alt="Playlist cover"/>
            <p id="playlist-name">{localStorage.getItem("selected_playlist_name")}</p>
        </div>
    }
}

export default Background;