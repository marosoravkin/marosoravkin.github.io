import React from 'react';
import Projects from './Projects';

export default function Home() {

  return (
    <div className="home-container">
      <div className="home-text">
        <h1>{"[ MAROS ORAVKIN ]"}</h1>
        &nbsp;
        <h3>Welcome to my portfolio website! On this page you can find my projects. See more about me and the contact information on the respective tabs.</h3>
      </div>
      <Projects />
    </div>
  );
}
