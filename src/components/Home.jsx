import React from 'react';
import Projects from './Projects';

export default function Home() {

  return (
    <div className="home-container">
      <div className="home-text">
        <h1>{"Ing. arch. MAROŠ ORAVKIN"}</h1>
        &nbsp;
        <h3>{"[ JUNIOR ARCHITECT ]"}</h3>
      </div>
      &nbsp;
      <h3>PROJECTS</h3>
      <Projects />
    </div>
  );
}
