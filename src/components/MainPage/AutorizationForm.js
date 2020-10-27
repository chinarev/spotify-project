import React from "react";

class AutorizationForm extends  React.Component {
    onclick () {
        window.location.assign('http://localhost:3000/second/');
    }

    render() {
        return(
            <form>
                <input type="text" name="email"/>
                <input type="text" name="password"/>
                <input type="button" value={"Log in"} onClick={(e) => this.onclick(e)}/>
            </form>
        )
    }
}

export default AutorizationForm;