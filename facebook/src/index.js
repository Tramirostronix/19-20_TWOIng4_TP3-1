import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Navbar"
import MyProfile from "./MyProfile"
import  "./index.css"


class Facebook extends React.Component {
    render() {
        return (

            <div>
            <Navbar />
            <MyProfile />
        </div>
        )
    }
}

ReactDOM.render(<Facebook/>, document.getElementById("root"))