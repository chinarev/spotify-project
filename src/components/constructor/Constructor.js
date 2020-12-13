import React from "react";
import SideOptionEditContainer from "./SideOptionEditContainer";
import Header from "../all-playlists-page/Header";
import pic from "../../assets/img/white_background.jpg";
import {getBase64Image} from "../styles-gallery/StylesContainer";
import '../../assets/constructorStyle.css'


class Constructor extends React.Component {

    constructor(props) {
        super(props);
        console.log("constructor container")
        const search = props.location.search; // returns the URL query String
        const params = new URLSearchParams(search);
        let IdFromURL = params.get('background');
        if(IdFromURL === null) {
            IdFromURL = pic;
        }
        this.state = {
            preview: pic,
            background: IdFromURL,
            text_size: 30,
            text_font: 'Brush Script MT',
            text_color: 'black',
        }
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleChangeTextSize = this.handleChangeTextSize.bind(this);

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
    }

    handleChangeColor(color, event) {
        this.setState({text_color: color.hex});
        getBase64Image(this.state.background, this.state.text_size,
            this.state.text_color, this.state.text_font).then(url => {
            this.setState({preview: url})
        })
    };

    handleChangeTextSize = async event => {
        await this.setState({text_size: event.target.value});

        getBase64Image(this.state.background, this.state.text_size,
            this.state.text_color, this.state.text_font).then(url => {
            this.setState({preview: url})
        })
    }

    handleChangeTextFont = async event => {
        await this.setState({text_font: event.target.value});

        getBase64Image(this.state.background, this.state.text_size,
            this.state.text_color, this.state.text_font).then(url => {
            this.setState({preview: url})
        })
    }


    render() {
        return <div className="selected-playlist-page">
            <Header/>
            <h1 className="playlists_title" id="edit_title">Create custom style</h1>
            <div id="playlist-page-container">
                <div className="playlist-info">
                    <img src={this.state.preview} id="playlist-cover" alt="Playlist cover"/>
                    <p id="playlist-name">{localStorage.getItem("selected_playlist_name")}</p>
                </div>
                <SideOptionEditContainer onChange={this.handleChangeColor}
                                         currColor={this.state.text_color}
                                         onChangeSize={this.handleChangeTextSize}
                                         currSize={this.state.text_size}
                                         onChangeFont={this.handleChangeTextFont}
                                         currFont={this.state.text_font}/>
            </div>
        </div>;
    }
}

export default Constructor;