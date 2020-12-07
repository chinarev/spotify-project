import React from "react";
import {PAGE_STATE} from "../selected-playlist-page/SideOptionsContainer";
import SideOptionsCreateCustomStyle from "./SideOptionsCreateCustomStyle";

class SideOptionEditText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr_page_state: PAGE_STATE.EDIT_TEXT_PROPERTIES
        };
    }

    onclickSave() {
        window.location.assign(`http://localhost:3000/playlist`);
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
                    Set text color
                </button>
                <button className="side-options">
                    Set text font
                </button>
                <button className="side-options">
                    Set text size
                </button>
                <button className="side-options" onClick={(e) => this.onclickSave(e)}>
                    Save
                </button>
                <button className="side-options" onClick={(e) => this.onclickBack(e)}>
                    Back
                </button>
            </div>
        }
    }
}

export default SideOptionEditText;