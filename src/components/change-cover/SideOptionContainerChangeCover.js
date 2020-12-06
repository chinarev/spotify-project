import React from "react";
import {PAGE_STATE} from "../selected-playlist-page/SideOptionsContainer";
import SideOptionsContainer from "../selected-playlist-page/SideOptionsContainer";


class SideOptionContainerChangeCover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr_page_state: PAGE_STATE.CHANGE_COVER
        };
    }

    onclickBack() {
        localStorage.setItem("page_state", PAGE_STATE.SELECTED_PLAYLIST);
        this.setState({
            curr_page_state: PAGE_STATE.SELECTED_PLAYLIST
        });
        console.log("state in onclickBack: " + localStorage.getItem("page_state"))
    }

    render() {
        console.log("state in change cover render: " + localStorage.getItem("page_state"))
        if (localStorage.getItem("page_state") === PAGE_STATE.SELECTED_PLAYLIST) {
            return <SideOptionsContainer/>
        } else {
            return <div id="side-options-container">
                <button className="side-options">
                    Choose style template
                </button>
                <button className="side-options">
                    Create custom style
                </button>
                <button className="side-options">
                    Remove cover
                </button>
                <button className="side-options" onClick={(e) => this.onclickBack(e)}>
                    Back
                </button>
            </div>
        }
    }
}

export default SideOptionContainerChangeCover;