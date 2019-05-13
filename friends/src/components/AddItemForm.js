import React, { Component } from 'react';
import './Friend.css';


class AddItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newfriend: {
                name: '',
                age: '',
                email: ''
              }
        }
    }

    handleSubmit = e => {
        this.props.AddFriend(e, this.state.newfriend);
        this.setState({newfriend: {
            name:'',
            age: '',
            email: ''
        }})
    }

    handleChanges = e => {
        this.setState({
          newfriend: {
            ...this.state.newfriend,
            [e.target.name]: e.target.value
          } 
        });
        //console.log(this.state.newfriend);
      };


    render() {
        return (
        <div>
            <h3> New Student? </h3>
        <form className="addnewstudentform"
        onSubmit={this.handleSubmit}>
        
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
        )}
}


export default AddItemForm;