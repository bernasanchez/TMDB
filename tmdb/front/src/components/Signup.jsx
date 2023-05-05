import React from 'react'

const Signup = () => {
  return (
    <form >
      <br></br>
      <label>
        Usuario:
        <input  type="text" name="usuario" />
      </label>
      <br></br>
      <br></br>
      <label>
        Password:
        <input  type="password" name="password" />
      </label>
      <br></br>
      <br></br>
      <label>
        Email:
        <input  type="email" name="email" />
      </label>
      <br></br>
      <br></br>
      <label>
        Nacionalidad:
        <input  type="text" name="nacionalidad" />
      </label>
      <br></br>
      <br></br>
      <label>
        Edad:
        <input type="number" name="edad" />
      </label>
      <br></br>
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Signup
