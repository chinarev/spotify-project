import React from "react";
import {getSelect} from "./SetTextFont"

class SetTextSize extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let options = ["30", "40", "50", "60", "70", "80", "90", "100", "110", "120"];
        console.log("this.props.size:" + this.props.size);
        return getSelect(options, this.props.size, this.props.onChange, "Set text size: ")
    }
}

export default SetTextSize;