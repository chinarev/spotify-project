import React from "react";
import SideOptionEditContainer from "./SideOptionEditContainer";
import Header from "../all-playlists-page/Header";
import pic from "../../assets/img/white_background.jpg";
import {getBase64Image} from "../styles-gallery/StylesContainer";

class Constructor extends React.Component {

    constructor(props) {
        super(props);
        console.log("constructor container")
        this.state = {
            preview: pic,
            background: pic,
            text_size: localStorage.getItem("preview_text_size"),
            text_font: localStorage.getItem("preview_text_font"),
            text_color: 'black',
        }
        this.handleChangeColor = this.handleChangeColor.bind(this);
        getBase64Image(this.state.background, this.state.text_size,
            this.state.text_color, this.state.text_font).then(url => {
            this.setState({preview: url})
        })
    }

    componentDidMount() {
        document.title = 'SPALCO - Cover constructor';
        console.log("constructor DidMount");
        console.log("text_size: " + localStorage.getItem("preview_text_size"));
        console.log("text_font: " + localStorage.getItem("preview_text_font"));
        console.log("text_color: " + localStorage.getItem("preview_text_color"));

        // this.setState({
        //     text_size: localStorage.getItem("preview_text_size"),
        //     text_font: localStorage.getItem("preview_text_font"),
        //     text_color: localStorage.getItem("preview_text_font")
        // });
    }

    handleChangeColor(color, event) {
        this.setState({text_color: color.hex});
        localStorage.setItem("preview_text_color", color.hex);
        console.log("color changed")

        getBase64Image(this.state.background, this.state.text_size,
            this.state.text_color, this.state.text_font).then(url => {
            this.setState({preview: url})
        })
    };

    render() {
        return <div className="selected-playlist-page">
            <Header/>
            <div id="playlist-page-container">
                <div className="playlist-info">
                    <img src={this.state.preview} id="playlist-cover" alt="Playlist cover"/>
                    <p id="playlist-name">{localStorage.getItem("selected_playlist_name")}</p>
                </div>
                <SideOptionEditContainer onChange={this.handleChangeColor} currColor={this.state.text_color}/>
            </div>
        </div>;
    }
}

export default Constructor;