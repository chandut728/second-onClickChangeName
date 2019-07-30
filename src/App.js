import './App.css'

import React, {useState , useEffect} from 'react'

function App(){

  const [ name , setName ] = useState("Chandu")
  const [ city , setCity ] = useState("Malvan")

  const handleClick = ()=>{
    setName('Chandrakant')
    setCity('Pune')
  }

  const handleCick1 = () => {
    setName("Chandu")
    setCity("Malvan")
  }

  useEffect(() =>{
      console.log(useEffect)
      document.title = 'You clicked ${name} times.';
  });

  return(
    <div className="container">

      <h1 className="h1">
        Name : {name}
        <br />
        City : {city}
      </h1>

      <button className="b1" onClick = {handleClick}>
        CHANGE
      </button>
      &nbsp;
      &nbsp;
      &nbsp;

      <button className="b2" onClick = {handleCick1}>
        RESET
      </button>


    </div>
  )
}

export default App
