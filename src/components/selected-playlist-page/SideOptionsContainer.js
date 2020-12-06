import React from "react";
import SideOptionContainerChangeCover from "../change-cover/SideOptionContainerChangeCover";

export const PAGE_STATE = {
    SELECTED_PLAYLIST : "selected_playlist",
    CHANGE_COVER : "change_cover",
    CREATE_CUSTOM_STYLE : "create_custom_style",
    SET_BACKGROUND_COLOR : "set_background_color"
};


class SideOptionsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curr_page_state: PAGE_STATE.SELECTED_PLAYLIST
        };
        localStorage.setItem("page_state", PAGE_STATE.SELECTED_PLAYLIST);
    }

    onclickChangeCover() {
        this.setState({
            curr_page_state: PAGE_STATE.CHANGE_COVER
        });
        localStorage.setItem("page_state", PAGE_STATE.CHANGE_COVER);
        console.log("onclickChangeCover state:" + localStorage.getItem("page_state"));
    }

    onclickName() {

    }


    render() {
        console.log("state in render: " + localStorage.getItem("page_state"))
        switch (localStorage.getItem("page_state")){
            case (PAGE_STATE.CHANGE_COVER): {
                return <SideOptionContainerChangeCover/>
            }
            default: {
                return <div id="side-options-container">
                    <button className="side-options" onClick={(e) => this.onclickName(e)}>
                        Change name
                    </button>
                    <button onClick={(e) => this.onclickChangeCover(e)} className="side-options" >
                        Change cover
                    </button>
                </div>
            }
        }
    }
}

export default SideOptionsContainer;