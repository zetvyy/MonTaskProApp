/* eslint-disable no-unused-vars */
import React from 'react';
import '../style/LandingPage.css';
import { useNavigate } from "react-router-dom";
import HeroGirl from '../asset/landingpage/hero.svg';
import IconService1 from '../asset/landingpage/planning-icon.svg';
import IconService2 from '../asset/landingpage/develope-icon.svg';
import IconService3 from '../asset/landingpage/decision-icon.svg';
import TestimoniGirl from '../asset/landingpage/testimoni-girl.svg';

const dataService = [
    {
        icon: IconService1,
        title: 'Planning',
        text: 'Planning helps you organize and prepare for your projects. The more you plan, the more you will accomplish, and the more you will enjoy the result.',
    },
    {
        icon: IconService2,
        title: 'Develope',
        text: 'Managing time can be stressful. Learn about the best tools for manageing your time, along with some stategies for making it work for you',
    },
    {
        icon: IconService3,
        title: 'Decision',
        text: 'Learn how to make the best decisions and use the right mindset for completing a task.',
    }
]

function ServiceItem({icon, title, text}){
    return(
        <div className='container-service__item'>
            <img src={icon} alt={title}/>
            <h3>{title}</h3>
            <p className='p-teks__poppins'>{text}</p>
        </div>
    )
}

function SubHeading({title}){
    return(
        <div className="container-subheading">
            <h2 className='container-subheading__title'>{title}</h2>
        </div>
    )
}

function Button({title, className, onClickBtn}){
    return(
        <button className={className} onClick={onClickBtn}>{title}</button>
    )
}

function Navbar({onClickBtn, signUpClick, loginClick}){

    return(
        <nav className='navbar'>
            <Button title='Login' className='btn login-button' onClickBtn={loginClick}/>
            <Button title='Sign Up' className='btn signup-button' onClickBtn={signUpClick}/>
        </nav>
    )
}

function Hero(){
    return(
        <section className='container-hero wrapper'>
            <div className='container-hero__article'>
                <h1>MonTaskPro App</h1>
                <p className='p-teks__poppins'>Task Management App - Create tasks, set due dates, and track progress from anywhere.</p>
                <Button title="Lets Start" className='btn signup-button'/>
            </div>
            <div className='container-hero__image'>
                <img src={HeroGirl} className="image" alt='hero-girl'/>
            </div>
        </section>
    )
}

function Service(){
    return(
        <section className='container-service wrapper'>
            <div className='container-service__title'>
                <SubHeading title='What we can do'/>
                <p className='p-teks__poppins'>Task Management App - Create tasks, set due dates, and track progress from anywhere.</p>
            </div>
            <div className='container-service__content'>
                {dataService.map((item, index) => (<ServiceItem {...item} key={index}/>))}
            </div>
        </section>
    )
}

function Testimoni(){
    return(
        <section className='container-testimoni wrapper'>
            <SubHeading title='Testimoni'/>
            <div className='container-testimoni__content'>
                <div className='container-testimoni__content__imageWrapper'>
                    <img src={TestimoniGirl} className='testimoni-girl image' alt='testimoni-girl'></img>
                </div>
                <div className='container-testimoni__content__textWrapper'>
                    <h1>Our Story</h1>
                    <p>
                    This application is very amazing, I can manage time effectively,
                    i am very easy to use this application, highly recommended for students
                    who have difficulty managing time.
                    </p>
                    <p><strong>Adiva Arini Putri</strong></p>
                    <Button title="Lets Start" className='btn signup-button'/>
                </div>
            </div>
        </section>
    )
}

function LandingPage(){
    const navigate = useNavigate();

    const onRegister = () => {
        navigate("/register")
    }
    const onLogin = () => {
        navigate("/login")
    }
    
    return(
        <React.Fragment>
            <Navbar signUpClick={onRegister} loginClick={onLogin}/>
            <Hero />
            <Service />
            <Testimoni />
        </React.Fragment>
    )
}

export default LandingPage;