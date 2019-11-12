import React from "react"
import Like from "./Like"


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colory: "purple"
        }
        this.handleButtonStyle= this.handleButtonStyle.bind(this)
    }
    
  handleButtonStyle() {
      this.setState({colory: "red"})
  }  

    render() {

    
        return (
            <div>
            
            <div className="sectionProfile" style={{backgroundColor:this.state.colory}}>
            <br/>
            <img src={this.props.image}/>
            <p>
                <div id="prenom"><div className="prenomNom">Prénom : </div>{this.props.prenom}</div> <div id="nom"> <div className="prenomNom">Nom : </div>{this.props.nom}</div> 
             <br/>
             <br/>
             <br/>
                <div id="naissance">{`Date de naissance : ${this.props.dateNaissance}`} </div>  
            <br/>
            <br/>
            <br/>
            <div id="styleButton"><button onClick={this.handleButtonStyle} >
                Change Style
            </button></div>
            </p>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="sectionMessage">
            <p>
                {this.props.message}
                <br/>
                <br/>
                <Like />
            </p>
            </div>
            
        </div>
        )
    }
}



export default App