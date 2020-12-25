import React from "react";
import SetTextFont from "./SetTextFont";

class SetTextSize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ["30", "40", "50", "60", "70", "80", "90", "100", "110", "120"]
        }
    }

    render() {
        return SetTextFont.getSelect(this.state.options, this.props.size, this.props.onChange, "Set text size:")
    }
}

export default SetTextSize;