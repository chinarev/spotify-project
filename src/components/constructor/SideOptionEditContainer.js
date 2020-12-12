import React from "react";
import SetColorForm from "../text-edit-model/SetColorForm";
import SetTextFont from "../text-edit-model/SetTextFont";
import SetTextSize from "../text-edit-model/SetTextSize";
import { ChromePicker } from 'react-color';

class SideOptionEditContainer extends React.Component {
    state = {
        background: localStorage.getItem("preview_text_color")
    };
    onclickGallery() {
        window.location.assign(`http://localhost:3000/background_gallery/`);
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
        localStorage.setItem("preview_text_color", color.hex);
        document.location.reload();
    };

    render() {
        return <div id="side-options-container">

            <button className="side-options" onClick={(e) => this.onclickGallery(e)}> Choose from gallery </button>
            <button className="side-options">Upload background</button>
            <div>
                <ChromePicker color={ this.state.background }
                              onChangeComplete={ this.handleChangeComplete }/>
            </div>
            <div>
                <SetTextFont/>
            </div>
            <div>
                <SetTextSize/>
            </div>

            <button className="side-options">Save</button>
            <button className="side-options">Back</button>
        </div>;
    }
}

export default SideOptionEditContainer;