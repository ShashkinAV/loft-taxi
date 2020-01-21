import React from 'react';

const Login = ({setRoute}) => {
	return (
	  <>
		<h1>Login</h1>
		<form onSubmit={()=>setRoute("profile")}>
		  <label>
			Email:
			<input name="email" type="email"/>
		  </label>
		  <label>
			Password:
			<input name="password" type="password"/>
		  </label>
		  <input type="submit" value="Login" />
		</form>
	  </>
	);
  }

export default Login; 