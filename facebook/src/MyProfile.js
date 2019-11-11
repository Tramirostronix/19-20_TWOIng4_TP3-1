import React from "react"
import App from "./App"
import utilisateurs from "./utilisateur"

function MyProfile() {

    

    const userComponents= utilisateurs.map((user) => {
        return (
            <App image={user.image} 
            prenom={user.prenom} 
            nom={user.nom} 
            dateNaissance={user.dateNaissance} 
            message={user.message} />
        )

    })
    return (
        <div>
  {userComponents[0]}
    </div>
    )
}

export default MyProfile