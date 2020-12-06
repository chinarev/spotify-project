import React from "react";
import {PAGE_STATE} from "../selected-playlist-page/SideOptionsContainer";
import SideOptionContainerChangeCover from "./SideOptionContainerChangeCover";
import SideOptionsSetBackground from "./SideOptionsSetBackground";
import SideOptionEditText from "./SideOptionEditText";

class SideOptionsCreateCustomStyle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr_page_state: PAGE_STATE.CREATE_CUSTOM_STYLE
        };
    }

    onclickBack() {
        localStorage.setItem("page_state", PAGE_STATE.CHANGE_COVER);
        this.setState({
            curr_page_state: PAGE_STATE.CHANGE_COVER
        });
        console.log("state in onclickBack: " + localStorage.getItem("page_state"))
    }

    onclickSetBackgroundImage() {
        localStorage.setItem("page_state", PAGE_STATE.SET_BACKGROUND_IMAGE);
        this.setState({
            curr_page_state: PAGE_STATE.SET_BACKGROUND_IMAGE
        });
    }

    onclickEditText() {
        localStorage.setItem("page_state", PAGE_STATE.EDIT_TEXT_PROPERTIES);
        this.setState({
            curr_page_state: PAGE_STATE.EDIT_TEXT_PROPERTIES
        });
    }

    render() {
        switch (localStorage.getItem("page_state")) {
            case (PAGE_STATE.CHANGE_COVER): {
                return <SideOptionContainerChangeCover/>
            }
            case (PAGE_STATE.SET_BACKGROUND_IMAGE) : {
                return <SideOptionsSetBackground/>
            }
            case (PAGE_STATE.EDIT_TEXT_PROPERTIES) : {
                return <SideOptionEditText/>
            }
            default: {
                return <div id="side-options-container">
                    <button className="side-options" onClick={(e) => this.onclickSetBackgroundImage(e)}>
                        Set background image
                    </button>
                    <button className="side-options" onClick={(e) => this.onclickEditText(e)}>
                        Edit text properties
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
}

export default SideOptionsCreateCustomStyle;