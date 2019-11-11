import React from "react"
import Gaetan from "./gaetan.jpg"
import Style from "./Style"
import Like from "./Like"

function App (props) {
    return (

        <div>
            
            <div className="sectionProfile">
            <br/>
            <img src={Gaetan} />
            <p>
                <span>{`Prénom : ${props.prenom} Nom : ${props.nom}`} </span> 
             <br/>
             <br/>
             <br/>
                <span>{`Date de naissance : ${props.dateNaissance}`} </span>  
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
                <span>{props.message}</span>
                <Like />
            </p>
            </div>
            
        </div>
    )
}

export default App