import React from "react"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: ''
        }
        this.handleButtonStyle = this.handleButtonStyle.bind(this)
    }

    handleButtonStyle = () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = "rgb" + "(" + r + "," + g + "," + b + ")";
        this.setState({bgColor : color});
       
    }

    render() {


        return (
            <div>
                <div className="sectionProfile" style={{ backgroundColor: this.state.bgColor }}>
                    <br />
                    <img src={this.props.image} />
                    <p>
                        <div id="prenom"><div className="prenomNom">Prénom : </div>{this.props.prenom}</div> <div id="nom"> <div className="prenomNom">Nom : </div>{this.props.nom}</div>
                        <br />
                        <br />
                        <br />
                        <div id="naissance">{`Date de naissance : ${this.props.dateNaissance}`} </div>
                        <br />
                        <br />
                        <br />
                        <div id="styleButton"><button onClick={this.handleButtonStyle} >
                            Change Style
            </button></div>
                    </p>
                </div>

                <br />
                <br />
                <br />
            </div>
        )
    }
}



export default App