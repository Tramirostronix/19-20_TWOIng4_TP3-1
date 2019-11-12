import React from "react"
import ReactDOM from "react-dom"
import MyProfile from "./MyProfile"
import  "./index.css"


class Facebook extends React.Component {
    render() {
        return (

            <div>
            <MyProfile />
        </div>
        )
    }
}

ReactDOM.render(<Facebook/>, document.getElementById("root"))