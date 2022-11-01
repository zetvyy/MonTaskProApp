import React from 'react';
import '../style/LandingPage.css';
import HeroGirl from '../asset/landingpage/hero.svg';

function Button({title, className}){
    return(
        <button className={className}>{title}</button>
    )
}

function Navbar(){
    return(
        <nav className='navbar'>
            <Button title='Login' className='btn login-button'/>
            <Button title='Sign Up' className='btn signup-button'/>
        </nav>
    )
}

function Hero(){
    return(
        <section className='container-hero'>
            <div className='container-hero__article'>
                <h1>MonTaskPro App</h1>
                <p>Task Management App - Create tasks, set due dates, and track progress from anywhere.</p>
                <Button title="Lets Start" className='btn signup-button'/>
            </div>
            <div className='container-hero__image'>
                <img src={HeroGirl} className="hero-girl-image" alt='hero-girl'/>
            </div>
        </section>
    )
}

function LandingPage(){
    return(
        <React.Fragment>
            <Navbar />
            <Hero />
        </React.Fragment>
    )
}

export default LandingPage;