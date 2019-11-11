import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Navbar"
import MyProfile from "./MyProfile"
import  "./index.css"

function Facebook () {
    return (
        <div>
            <Navbar />
            <MyProfile />
        </div>
    )
}

ReactDOM.render(<Facebook/>, document.getElementById("root"))