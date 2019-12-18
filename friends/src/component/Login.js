import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function Login(props){
	const [loginInfo, setLoginInfo] = useState({
		username: '',
		password: ''
	})

	const handleChange = e =>{
		setLoginInfo({
			...loginInfo, 
			[e.target.name]: e.target.value
		})
	}

	const entry = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/login', { 
            username: 'Lambda School', 
            password: 'i<3Lambd4' 
        })
        .then(response => {
            console.log(response);
            localStorage.setItem('token', response.data.payload);
            console.log(response.data.payload)
            props.history.push('/Friends')
        })
        .catch(error => {
            console.log(error);
        })    
    }

	return(
		<div>
			<h2>Login</h2>
			<form onSubmit ={ entry }>
				
                <input 
                    type='username' 
                    name='username' 
                    placeholder='Username' 
                    value={loginInfo.username} 
                    onChange ={handleChange} /> <br/>
                <input 
                    type='password' 
                    name='password' 
                    placeholder='Password' 
                    value={loginInfo.password} 
                    onChange ={handleChange} /><br/>

				<button type='submit'>Login</button>
			</form>
		</div>
		)
}

export default Login;