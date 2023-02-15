
import './App.css';
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import React, { Component } from 'react'

//* 18 //


class App extends Component {

  state = {
    users : [
      {
        id : 1,
        name : 'Gizem Tuncer',
        salary : 10000,
        department : 'software'
      },
      {
        id : 2,
        name : 'Cenk Çırıkka',
        salary : 10000,
        department : 'software'
      },
      {
        id : 3,
        name : 'Atak Çırıkka',
        salary : 10000,
        department : 'software'
      },
      {
        id : 4,
        name : 'Bıdık Çırıkka',
        salary : 10000,
        department : 'software'
      },
    ],

  }
  render() {
    
    return (
      <div className='container'>
      <Navbar title = "User App 2" />
      <hr/>
      <Users users = {this.state.users} />
      
    </div>
    )
  }
}
export default App;



