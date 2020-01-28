import React from 'react'

const Signup = props => {
  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={()=>props.setRoute("map")}>
        <label>
          Name:
          <input name="firstName" type="text" />
        </label>
        <label>
          Surname:
          <input name="lastName" type="text" />
        </label>
        <label>
          Password:
          <input name="password" type="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  
  )
}

export default Signup;