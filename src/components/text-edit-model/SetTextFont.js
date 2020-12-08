import React from "react";
import SideOptionsCreateCustomStyle from "../side-options/SideOptionsCreateCustomStyle";
import {getSelect} from "./SetColorForm"

class SetTextFont extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Mem'};

        this.handleChange = this.handleChange.bind(this);
 //       this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    // handleSubmit(event) {
    //     alert('Your favorite flavor is: ' + this.state.value);
    //     event.preventDefault();
    // }

    render() {
        let options = ["Mem", "Kek", "Puk", "Lol", "Bam"];
        return getSelect(options, this.state.value, this.handleChange, "Set text font: ")
    }
}

export default SetTextFont;