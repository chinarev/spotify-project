import React from "react";
import '../../assets/mainStyle.css'

class Head extends React.Component {
    render() {
        return <div>
            <meta charSet="UTF-8"/>
            <title>Spalco - Main page</title>
            <link href="../../assets/mainStyle.css" rel="stylesheet" />
            <style dangerouslySetInnerHTML={{
                __html: "\n\t@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');\n\t"
            }}/>
        </div>;
    }

}

export default Head;