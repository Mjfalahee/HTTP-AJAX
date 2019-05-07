import React from 'react';
import Friend from './Friend';
import "./Friend.css";
// import NewFriend from './NewFriends';


function FriendList(props) {
    //console.log("FriendsList props --->")
    //console.log(props);
    return (
        <div className="list-container">
        {props.friends.map(friend => <Friend friend={friend} key={friend.id} />)}
        </div>
        // <NewFriend />
    );
}

export default FriendList;


