import React from "react";
import '../../assets/allPlaylistsStyle.css'

class Head extends React.Component {
    render() {
        return <div>
            <meta charSet="UTF-8" />
            <title>Spalco - All playlists</title>
            <link href="../../assets/allPlaylistsStyle.css" rel="stylesheet" />
            <style dangerouslySetInnerHTML={{
                __html: "\n\t@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');\n\t"
            }} />
        </div>;
    }

}

export default Head;