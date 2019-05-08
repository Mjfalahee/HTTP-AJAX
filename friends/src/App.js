import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import FriendList from './components/FriendList';
import AddItemForm from './components/AddItemForm';
import UpdateFriendForm from './components/UpdateFriendForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      activefriend: {},
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({friends: response.data})
        console.log(response.data);
      })
      .catch(error => console.log(error))
  }

  //adds new friend
  
  addFriend = (e, newFriend) => {
    e.preventDefault();
    //console.log("Submitted!");
    axios 
      .post(`http://localhost:5000/friends`, newFriend)
      .then(response => this.setState({friends: response.data}))
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  //updates a friend's info

  updateFriend = (e, updatedFriend) => {
    console.log("UPDATE!");
    console.log(updatedFriend);
    axios
     .put(`http://localhost:5000/friends/${this.state.activefriend.id}`, updatedFriend)
     .then(res => {
        this.setState({friends: res.data})
        console.log("Updated Friend: ")
        console.log(res.data);
      })
    .catch(err => console.log(err))
  }
  
  // deletes a friend's info

  deleteFriend = () => {
    // will delete
  }

  // set active Friend

  setActiveFriend = (thing) => {
    console.log("PREUPDATE STATE: ")
    console.log(thing);
    this.setState({activefriend: thing})
    console.log("ACTIVE?");
    console.log(this.state.activefriend);
  }

  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} 
        updateFriend={this.updateFriend} 
        deleteFriend={this.deleteFriend}
        setActiveFriend={this.setActiveFriend}
        />
        <AddItemForm 
        AddFriend={this.addFriend}/>
        <UpdateFriendForm 
        updateActive={this.state.activefriend}
        updateFriend={this.updateFriend}/>

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