// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // const [error, setError] = React.useState(null)
  const [name, setName] = React.useState('')
  //const inputValue = React.useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    // with input id to get current value
    // onSubmitUsername(event.target.elements.name.value)

    // with useRef hook
    // onSubmitUsername(inputValue.current.value)

    onSubmitUsername(name)
  }

  function handleChange(event) {
    const {value} = event.target
    //with useState hook - will allow all inputs to be converted to lowerCase
    setName(value.toLowerCase())

    //with setError state
    // const isValid = value === value.toLowerCase()
    // setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Username:</label>
        {/* <input id="name" type="text" ref={inputValue} /> */}
        <input id="name" type="text" onChange={handleChange} value={name} />
        {/* <div style={{color: 'red'}}>{error}</div> */}
      </div>
      <button type="submit">
        {/* <button type="submit" disabled={Boolean(error)}> */}
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
