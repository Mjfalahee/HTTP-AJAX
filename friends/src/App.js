import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import FriendList from './components/FriendList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newfriend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => this.setState({friends: response.data}))
      .catch(error => console.log(error))
  }

  handleChanges = e => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    this.setState({
      newfriend: {
        ...this.state.newfriend,
        [e.target.name]: e.target.value
      }
    });
  };

  addFriend = e => {
    e.preventDefault();
    //console.log("Submitted!");
    axios 
      .post(`http://localhost:5000/friends`, this.state.newfriend)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} />


        <form className="addnewstudentform"
        onSubmit={this.addFriend}>
          <input className="namebox"
          placeholder="Name"
          value={this.state.newfriend.name}
          onChange={this.handleChanges}
          name="name" />
          <input className="agebox"
          placeholder="Age"
          value={this.state.newfriend.age}
          onChange={this.handleChanges}
          name="age" 
           />
          <input className="emailbox" 
          placeholder="Email"
          value={this.state.newfriend.email}
          onChange={this.handleChanges}
          name="email" />
          <button className="submitbtn">Submit</button>
        </form>

      </div>
      );
    }
  }

export default App;
   
// old fetch for data

// .fetch('http://localhost:5000/friends')
    //   .then(result => result.json())
    //   .then(friendlist => {
    //     console.log("Fetch done")
    //     console.log(friendlist)
    //     this.setState({friends: friendlist})})
    //   .catch(error => console.log(error))
    // console.log("Below the Fetch");