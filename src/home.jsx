import React from 'react';
import './styles/home.css'

function Home() {
  return (
    <section className='home-container'>
      <div className="home-container__background"></div>
      <div className="home-container__content">
        <h1><span>Hi!</span> I'm<br />Amappola</h1>
        <h2>Frontend Developer</h2>
      </div>
      <div className="home-container__disclaimer">
        <p>This site is under construction. <span>Thanks for being here ✨</span></p>
      </div>
    </section>
  )
}

export { Home };