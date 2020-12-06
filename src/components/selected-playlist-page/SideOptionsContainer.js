import React from "react";

class SideOptionsContainer extends React.Component {

    onclickCover() {
        window.location.assign('http://localhost:3000/changeCover/');
    }

    onclickName() {

    }

    render() {
        return <div id="side-options-container">
            <button className="side-options" onClick={(e) => this.onclickName(e)}>
                Change name
            </button>
            <button onClick={(e) => this.onclickCover(e)} className="side-options" >
                Change cover
            </button>
        </div>
    }
}

export default SideOptionsContainer;