import React from "react";
import SideOptionEditContainer from "./SideOptionEditContainer";
import Header from "../all-playlists-page/Header";
import pic from "../../assets/img/white_background.jpg";
import {getBase64Image} from "../styles-gallery/StylesContainer";
import '../../assets/constructorStyle.css'

class Constructor extends React.Component {
    constructor(props) {
        super(props);
        const search = props.location.search; // returns the URL query String
        const params = new URLSearchParams(search);
        let backgroundFromURL = params.get('background');
        if (backgroundFromURL === null) {
            backgroundFromURL = pic;
        }

        this.state = {
            preview: pic,
            background: backgroundFromURL,
            text_size: 30,
            text_font: 'Brush Script MT',
            text_color: 'black',
            playlistID: params.get('playlistID'),
            text_input: localStorage.getItem('selected_playlist_name')
        }

        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleChangeTextSize = this.handleChangeTextSize.bind(this);
        this.handleUploadClick = this.handleUploadClick.bind(this)
        this.handleChangeTextInput = this.handleChangeTextInput.bind(this)

        getBase64Image(this.state.background, this.state.text_size,
            this.state.text_color, this.state.text_font, this.state.text_input).then(url => {
            this.setState({preview: url})
        })
    }

    componentDidMount() {
        document.title = 'SPALCO - Cover constructor';
    }

    handleChangeColor(color) {
        this.setState({text_color: color.hex});
        getBase64Image(this.state.background, this.state.text_size,
            this.state.text_color, this.state.text_font, this.state.text_input).then(url => {
            this.setState({preview: url})
        })
    }

    handleChangeTextSize = async event => {
        await this.setState({text_size: event.target.value});
        getBase64Image(this.state.background, this.state.text_size,
            this.state.text_color, this.state.text_font, this.state.text_input).then(url => {
            this.setState({preview: url})
        })
    }

    handleChangeTextFont = async event => {
        await this.setState({text_font: event.target.value});
        getBase64Image(this.state.background, this.state.text_size,
            this.state.text_color, this.state.text_font, this.state.text_input).then(url => {
            this.setState({preview: url})
        })
    }

    handleChangeTextInput = async event => {
        await this.setState({text_input: event.target.value});
        getBase64Image(this.state.background, this.state.text_size,
            this.state.text_color, this.state.text_font, this.state.text_input).then(url => {
            this.setState({preview: url})
        });
    }

    async handleUploadClick() {
        if (document.getElementById("myImage") != null) {
            await this.setState({background: document.getElementById("myImage").src});
            getBase64Image(this.state.background, this.state.text_size,
                this.state.text_color, this.state.text_font, this.state.text_input).then(url => {
                this.setState({preview: url})
                document.getElementById("closeID").click();
            })
        }
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
                                         currFont={this.state.text_font}
                                         onClickUpload={this.handleUploadClick}
                                         currPreview={this.state.preview}
                                         playlistID={this.state.playlistID}
                                         changeInput={this.handleChangeTextInput}/>
            </div>
        </div>;
    }
}

export default Constructor;