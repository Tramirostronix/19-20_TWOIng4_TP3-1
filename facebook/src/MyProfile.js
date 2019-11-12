import React from "react"
import App from "./App"
import usersData from "./usersData"
import Navbar from "./Navbar"

class MyProfile extends React.Component {
    constructor() {
        super()
        this.state = {
            users: usersData,
            nombre: 1,
            click: "myriam"
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
            <Navbar prenom="Gaétan" />
            <Navbar prenom="Cécile"  />
            <Navbar prenom="Thomas" /> 
            {userItems[this.state.nombre]}       
            </div>
        )

    }
}

export default MyProfile