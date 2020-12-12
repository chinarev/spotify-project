import React from "react";
import SideOptionEditContainer from "./SideOptionEditContainer";
import Background from "./Background";
import Header from "../all-playlists-page/Header";

class Constructor extends React.Component {

    constructor(props) {
        super(props);

        if (localStorage.getItem("preview_text_color") == null) {
            localStorage.setItem("preview_text_color", "black");
            localStorage.setItem("preview_text_font", "Brush Script MT");
            localStorage.setItem("preview_text_size", "30");
        }
    }

    onclick() {
    }

    componentDidMount() {
        document.title = 'SPALCO - Main page';
    }

    render() {
        return <div className="selected-playlist-page">
            <Header/>
            <div id="playlist-page-container">
                <Background/>
                <SideOptionEditContainer/>
            </div>
        </div>;
    }
}

export default Constructor;