import React from "react"


class Navbar extends React.Component {
    render() {
        return (
            <button className="button1" onClick={this.props.onClick}>
                {this.props.prenom}
            </button>
        )
    }
}

export default Navbar 