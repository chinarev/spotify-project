import React from "react";
import {PAGE_STATE} from "../selected-playlist-page/SideOptionsContainer";
import SideOptionsContainer from "../selected-playlist-page/SideOptionsContainer";
import SideOptionsCreateCustomStyle from "./SideOptionsCreateCustomStyle";


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

    onClickCreateCustomStyle() {
        localStorage.setItem("page_state", PAGE_STATE.CREATE_CUSTOM_STYLE);
        this.setState({
            curr_page_state: PAGE_STATE.CREATE_CUSTOM_STYLE
        });
    }

    render() {
        switch (localStorage.getItem("page_state")) {
            case (PAGE_STATE.SELECTED_PLAYLIST): {
                return <SideOptionsContainer/>
            }
            case (PAGE_STATE.CREATE_CUSTOM_STYLE): {
                return <SideOptionsCreateCustomStyle/>
            }
            default: {
                return <div id="side-options-container">
                    <button className="side-options">
                        Choose style template
                    </button>
                    <button className="side-options" onClick={(e) => this.onClickCreateCustomStyle(e)}>
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
}

export default SideOptionContainerChangeCover;