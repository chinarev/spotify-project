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

    onclickSave() {
        window.location.assign(`http://localhost:3000/playlist`);
    }

    onClickBackgroundGallery() {
        window.location.assign(`http://localhost:3000/background_gallery`);
    }

    render() {
        if (localStorage.getItem("page_state") === PAGE_STATE.CREATE_CUSTOM_STYLE) {
            return <SideOptionsCreateCustomStyle/>
        } else {
            return <div className="side-options-container">
                <button className="side-options" onClick={(e) => this.onClickBackgroundGallery(e)}>
                    Choose image from gallery
                </button>
                <button className="side-options">
                    Upload image
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

export default SideOptionsSetBackground;