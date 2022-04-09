import React, { useState } from 'react';


export const Greeting = () => {

  const [username, setUserName] = useState('');
  const [userInput, setUserInput] = useState('');

  const handleUserInput = event => setUserInput(event.target.value);

  const handleFormSubmit = event => {
    event.preventDefault();
    setUserName(userInput);
    setUserInput('');
  };


  return(
    <>
      <h3 arial-label='greeting' id="greeting">
       Hi there,  {username? username + ' Welcome to juicy events' : 'friend'}!
      </h3>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Input your name!" value={userInput} onChange={handleUserInput}/>
        <input type="submit" value="Submit!"/>
      </form>
    </>
  )
}
