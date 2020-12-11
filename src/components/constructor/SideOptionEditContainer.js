import React from "react";
import Popup from "reactjs-popup";
import SetColorForm from "../text-edit-model/SetColorForm";
import SetTextFont from "../text-edit-model/SetTextFont";
import SetTextSize from "../text-edit-model/SetTextSize";
import pic from "../../assets/img/white_background.jpg";
import BackgroundsContainer from "../background-gallery/BackgroundsContainer";

class SideOptionEditContainer extends React.Component {

    render() {
        return <div id="side-options-container">
            <Popup
                trigger={<button className="side-options"> Set background image </button>}
                modal
                nested>
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header"> Edit text</div>
                        <div className="content">
                            {' '}
                            <BackgroundsContainer/>
                        </div>
                    </div>
                )}
            </Popup>
            <div>
                <SetColorForm/>
            </div>
            <div>
                <SetTextFont/>
            </div>
            <div>
                <SetTextSize/>
            </div>
            <button className="side-options">
                Save
            </button>
            <button className="side-options">
                Back
            </button>

        </div>;
    }
}

export default SideOptionEditContainer;