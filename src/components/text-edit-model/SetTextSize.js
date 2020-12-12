import React from "react";
import SideOptionsCreateCustomStyle from "../side-options/SideOptionsCreateCustomStyle";
import {getSelect} from "./SetColorForm"

class SetTextSize extends React.Component {
    constructor(props) {
        super(props);

        let selectedValue =  localStorage.getItem("preview_text_size");
        // if (selectedValue === "none"){
        //     selectedValue = "30"
        //     localStorage.setItem("preview_text_size", selectedValue);
        // }
        this.state = {value: selectedValue};


       // localStorage.setItem("preview_text_size", this.state.value);
        this.handleChange = this.handleChange.bind(this);
  //      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        localStorage.setItem("preview_text_size", event.target.value);
        document.location.reload();
    }

    // handleSubmit(event) {
    //     alert('Your favorite flavor is: ' + this.state.value);
    //     event.preventDefault();
    // }

    render() {
        let options = ["30", "40", "50", "60", "70", "80"];
        return getSelect(options, this.state.value, this.handleChange, "Set text size: ")
    }
}

export default SetTextSize;