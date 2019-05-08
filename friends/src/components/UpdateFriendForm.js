import React, { Component } from 'react';
import './Friend.css';


class UpdateItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateFriend: props.updateActive,
            newupdateFriend: {}
        }
    }

    activeStudent = () => {
        if (this.state.updateFriend)
        return this.state.updateFriend.name;
        else
        return "None";
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.updateFriend(e, this.state.newupdateFriend);
        this.setState({newupdateFriend: {
            name:'',
            age: '',
            email: ''
        }})
    }

    handleChanges = e => {
        this.setState({
          newupdateFriend: {
            ...this.state.newupdateFriend,
            [e.target.name]: e.target.value
          }
     
        });   
        console.log(this.state.newupdateFriend)
      };

     


    render() { 
        return (
        <div>
        <h3>Update Info!</h3>
        <h5>Click update next to student, then fill out the form with new information</h5>
        
        <form className="updatestudentform"
        onSubmit={this.handleSubmit}>
        
          <input className="namebox"
          placeholder="Name"
          value={this.state.newupdateFriend.name}
          onChange={this.handleChanges}
          name="name" />

          <input className="agebox"
          placeholder="Age"
          value={this.state.newupdateFriend.age}
          onChange={this.handleChanges}
          name="age" 
           />

          <input className="emailbox" 
          placeholder="Email"
          value={this.state.newupdateFriend.email}
          onChange={this.handleChanges}
          name="email" />

          <button className="submitbtn">Submit</button>
        </form>
        </div>
        )}
}


export default UpdateItemForm;