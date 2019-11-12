import React from "react"
import Gaetan from "./gaetan.jpg"
import Style from "./Style"
import Like from "./Like"


class App extends React.Component {
    render() {
        return (
            <div>
            
            <div className="sectionProfile">
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
            <Style className = "styleButton" />
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