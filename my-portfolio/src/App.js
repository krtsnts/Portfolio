import './App.css';
import ProfilePic from './ProfilePic.jpg';
import { useState } from 'react';
function App() {

  return (
    <div className="App">
      <header className="appHeader">
        <h3 className='headerTitle'> Kurt </h3>
        <nav className="navBar">
          <a className='navOption' href="#education">Education</a>
          <a className='navOption' href="#projects">Projects</a>
          <a className='navOption' href="#skills">Skills</a>
        </nav>
      </header>
      <div className='divider'></div>

      <main className="mainContent">
        <div className="Introduction">
          <img src={ProfilePic} alt="Profile Picture" className="profilePicture" /> 
          <div className="namecrs">
          <h1> Kurt Vincent Sintos</h1>
          <h2> BS-Information Technology Student </h2>
          </div>
          <div className="contactInfo"> 
            <p className="details">Email: kurtsintos30@gmail.com</p>
            <p className="details">Phone: 0992-2304-019</p>
            <p className="details">Address: Panacan Relocation, Davao City</p>
            <p className="details">Facebook: <a href='https://www.facebook.com/KurtSintos30/'>Kurt Sintos</a></p>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
