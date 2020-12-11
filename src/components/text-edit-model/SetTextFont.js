import React from "react";
import SideOptionsCreateCustomStyle from "../side-options/SideOptionsCreateCustomStyle";
import {getSelect} from "./SetColorForm"
import {PAGE_STATE} from "../selected-playlist-page/SideOptionsContainer";

class SetTextFont extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Mem'};

        this.handleChange = this.handleChange.bind(this);
 //       this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log("value:" + event.target.value);
        localStorage.setItem("preview_text_font", event.target.value);
    }

    // handleSubmit(event) {
    //     alert('Your favorite flavor is: ' + this.state.value);
    //     event.preventDefault();
    // }

    render() {
        let options = ["Brush Script MT", "Lucida Handwriting", "Copperplate", "WhiteSmoke", "Comic Sans MS"];
        return getSelect(options, this.state.value, this.handleChange, "Set text font: ")
    }
}

export default SetTextFont;