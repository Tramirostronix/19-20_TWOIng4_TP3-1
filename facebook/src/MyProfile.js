import React from "react"
import App from "./App"
import Like from "./Like"
import usersData from "./usersData"


class MyProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: usersData,
            nombre: 0,
            bgBool: false,
            item: ''

        }
        this.handleClickProfile = this.handleClickProfile.bind(this)
        this.changeBackground = this.changeBackground.bind(this);   
    }

    handleClickProfile(i) {
        this.setState({ nombre: i })
        this.setState({ bgBool: !this.state.bgBool });
    }

    changeBackground(bool) {
        console.log(bool);
        this.setState({
           bgBool : bool    
        });
    }

    render() {
        return (
            <div>
                <div id="buttonPosition">
                    <button className="button1" onClick={() => this.handleClickProfile(0)}>
                        {this.state.users[0].prenom}
                    </button>

                    <button className="button1" onClick={() => this.handleClickProfile(1)}>
                        {this.state.users[1].prenom}
                    </button>

                    <button className="button1" onClick={() => this.handleClickProfile(2)}>
                        {this.state.users[2].prenom}
                    </button>
                </div>
                {<App image={this.state.users[this.state.nombre].image}
                    prenom={this.state.users[this.state.nombre].prenom}
                    nom={this.state.users[this.state.nombre].nom}
                    dateNaissance={this.state.users[this.state.nombre].dateNaissance}
                    bgBool={this.state.bgBool}
                    onHeaderClick={this.changeBackground}/>}
                <div className="sectionMessage">
                    <p>
                        {this.state.users[this.state.nombre].message}
                        <br />
                        <br />
                        <Like index={this.state.nombre}/>
                    </p>
                </div>
            </div>
        )

    }
}

export default MyProfile