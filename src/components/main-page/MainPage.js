import React from "react";
import Body from "./Body";
import '../../assets/mainStyle.css'


class MainPage extends React.Component {
    componentDidMount() {
        document.title = 'SPALCO - Main page';
    }


    render() {
        return <div>

            <Body/>
        </div>
    }
}

export default MainPage;