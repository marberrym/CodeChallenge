import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import UserLink from '../components/UserLink';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => {console.log(response)
      this.setState({users: response})
    }) 
  }
  
  render() {
    let assignUser = (name, id) => {
      let action = {type: "ASSIGN_USER", user: {
        name: name,
        id: id
      }}
      console.log(action);
      this.props.dispatch(action);
    }

    return <div className="pageLayout">
      <NavBar />
      <Header />
      {this.state.users ?
        <div className="userSection">
          {this.state.users.map(user => <UserLink user={user} key={user.id} assignUser={assignUser}/>)}
        </div>
      :
        <div>Loading</div>    
      }
    </div>
  }
}

let AppSmart = connect()(App)
export default AppSmart;
