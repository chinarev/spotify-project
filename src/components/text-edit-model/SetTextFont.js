import React from "react";
import {getSelect} from "./SetColorForm"

class SetTextFont extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let options = ["Brush Script MT", "Lucida Handwriting", "Copperplate", "WhiteSmoke", "Comic Sans MS"];
        return getSelect(options, this.props.font, this.props.onChange, "Set text font: ", true)
    }
}

export default SetTextFont;