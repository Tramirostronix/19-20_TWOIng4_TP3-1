import React from "react"
import LikeLogo from "./like.png"
import usersData from "./usersData"

class Like extends React.Component {
    constructor() {
        super()
        this.state = {
            users: usersData,
            numberOfLike: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.state.users[this.props.index].like += 1;
        this.forceUpdate();
    }

    render() {
        console.log(this.state.users);
        return (
            <div>
                <button onClick={this.handleClick}>
                    <img src={LikeLogo} /> C'est super {this.state.users[this.props.index].like}
                </button>
            </div>
        )
    }
}


export default Like 