import React from "react"
import Gaetan from "./gaetan.jpg"
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
            <img src={Gaetan} />
            <p>
                <span>{`Prénom : ${this.props.prenom} Nom : ${this.props.nom}`} </span> 
             <br/>
             <br/>
             <br/>
                <span>{`Date de naissance : ${this.props.dateNaissance}`} </span>  
            <br/>
            <br/>
            <br/>
            <button className= "styleButton" onClick={this.handleButtonStyle} >
                Change Style
            </button>
            </p>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="sectionMessage">
            <p>
                <span>{this.props.message}</span>
                <Like />
            </p>
            </div>
            
        </div>
        )
    }
}



export default App