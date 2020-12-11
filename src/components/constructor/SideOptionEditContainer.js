import React from "react";
import SetColorForm from "../text-edit-model/SetColorForm";
import SetTextFont from "../text-edit-model/SetTextFont";
import SetTextSize from "../text-edit-model/SetTextSize";


class SideOptionEditContainer extends React.Component {

    onclickGallery() {
        window.location.assign(`http://localhost:3000/background_gallery/`);
    }

    render() {
        return <div id="side-options-container">

            <button className="side-options" onClick={(e) => this.onclickGallery(e)}> Choose from gallery </button>
            <button className="side-options">Upload background</button>
            <div>
                <SetColorForm/>
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