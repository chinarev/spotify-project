import React from "react";
import {PAGE_STATE} from "../selected-playlist-page/SideOptionsContainer";
import SideOptionsCreateCustomStyle from "./SideOptionsCreateCustomStyle";

class SideOptionsSetBackground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr_page_state: PAGE_STATE.SET_BACKGROUND_IMAGE
        };
    }

    onclickBack() {
        localStorage.setItem("page_state", PAGE_STATE.CREATE_CUSTOM_STYLE);
        this.setState({
            curr_page_state: PAGE_STATE.CREATE_CUSTOM_STYLE
        });
    }

    render() {
        if (localStorage.getItem("page_state") === PAGE_STATE.CREATE_CUSTOM_STYLE) {
            return <SideOptionsCreateCustomStyle/>
        } else {
            return <div id="side-options-container">
                <button className="side-options">
                    Choose image from gallery
                </button>
                <button className="side-options">
                    Upload image
                </button>
                <button className="side-options">
                    Save
                </button>
                <button className="side-options" onClick={(e) => this.onclickBack(e)}>
                    Back
                </button>
            </div>
        }
    }
}

export default SideOptionsSetBackground;