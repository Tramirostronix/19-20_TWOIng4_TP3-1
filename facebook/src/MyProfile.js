import React from "react"
import App from "./App"
import usersData from "./usersData"

class MyProfile extends React.Component {
    constructor() {
        super()
        this.state = {
            users: usersData
        }
    }
    render() {
        const userItems= this.state.users.map(item => 
            <App image={item.image} 
            prenom={item.prenom} 
            nom={item.nom} 
            dateNaissance={item.dateNaissance} 
        message={item.message} />)  
        
        return (
            <div>
            {userItems[0]}       
            </div>
        )

    }
}

export default MyProfile