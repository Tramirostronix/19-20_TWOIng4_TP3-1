import React from "react"
import LikeLogo from "./like.png"
import usersData from "./usersData"

class Like extends React.Component {
    constructor() {
        super()
        this.state= {
            likeNumber : 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {

            return {
                likeNumber: prevState.likeNumber +1
            }
        })

    }

    render() {
       
        return (
            <div>
            <button onClick={this.handleClick}>
                <img src={LikeLogo} /> C'est super {this.state.likeNumber}
            </button>
        </div>
        )
    }
}


export default Like 