import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendInput from './FriendInput';

function FriendsList(){

	const [friends, setFriends] = useState([])

	useEffect(()=>{
		axiosWithAuth().get('/Friends')
			.then((response)=>{
				setFriends(...friends, response.data)
			})
			.catch(error => {
				console.log(error)
			})
	}, [])

	return(
		<div>
			<h1>Friends</h1>
            <FriendInput />
			{friends.length ? (friends.map(friend => {return(
				<div key={friend.id}>
					<h3>Name: {friend.name}</h3>
					<p>Age: {friend.age}</p>
					<p>Email: {friend.email}</p>
				</div>
				)})):(<div>Loading...</div>)}
		</div>
	)
}

export default FriendsList;