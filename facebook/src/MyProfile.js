import React from "react"
import App from "./App"
import usersData from "./usersData"


class MyProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: usersData,
            nombre: 0,
        }
        this.handleClickProfile = this.handleClickProfile.bind(this)
    }

    handleClickProfile(i) {
        this.setState({nombre : i})
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
                <div id="buttonPosition">
          <button className="button1" onClick={() =>this.handleClickProfile(0)}>
                Gaétan
            </button>

            <button className="button1" onClick={() =>this.handleClickProfile(1)}>
                Cécile
            </button>

            <button className="button1" onClick={() =>this.handleClickProfile(2)}>
                Thomas
            </button>
            </div>
            {userItems[this.state.nombre]}       
            </div>
        )

    }
}

export default MyProfile