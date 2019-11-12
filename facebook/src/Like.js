import React from "react"
import LikeLogo from "./like.png"


class Like extends React.Component {
    render() {
        return (
            <div>
            <button>
                <img src={LikeLogo} /> C'est super
            </button>
        </div>
        )
    }
}


export default Like 