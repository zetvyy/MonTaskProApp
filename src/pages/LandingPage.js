import React from 'react';
import '../style/LandingPage.css';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import HeroGirl from '../asset/landingpage/hero.svg';
import IconService1 from '../asset/landingpage/planning-icon.svg';
import IconService2 from '../asset/landingpage/develope-icon.svg';
import IconService3 from '../asset/landingpage/decision-icon.svg';
import TestimoniGirl from '../asset/landingpage/testimoni-girl.svg';
import MontaskLogo from '../asset/landingpage/MonTaskPro__AppLogo.svg';
import MontaskFooterIcon from '../asset/landingpage/MonTaskPro__Footer-icon.svg';

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

const dataFaq = [
    {   
        question: 'What is MonTaskPro?',
        answer: 'MonTaskPro is a task management application that helps you organize and prepare for your projects. The more you plan, the more you will accomplish, and the more you will enjoy the result.',
    },
    {
        question: 'How to use MonTaskPro?',
        answer: 'You can use MonTaskPro by registering first, then you can create a task, set a due date, and track progress from anywhere.',
    },
    {
        question: 'What is the benefit of using MonTaskPro?',
        answer: 'MonTaskPro can help you manage your time effectively, you can create a task, set a due date, and track progress from anywhere.',
    },
    {
        question: 'How to contact MonTaskPro?',
        answer: 'You can contact MonTaskPro by sending an email to'
    },
    {
        question: 'How to get a premium account?',
        answer: 'You can get a premium account by paying a monthly subscription fee of Rp. 50.000,-'
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

function Navbar({signUpClick, loginClick}){

    return(
        <nav className='navbar-landingpage'>
            <div className='navbar-logo'>
                <img src={MontaskLogo} alt='logo'/>
            </div>
            <div className='navbar-btn'>
                <Button title='Login' className='btn login-button' onClickBtn={loginClick}/>
                <Button title='Sign Up' className='btn signup-button' onClickBtn={signUpClick}/>
            </div>
        </nav>
    )
}

function Hero({signUpClick}){
    return(
        <section className='container-hero wrapper'>
            <div className='container-hero__article'>
                <div>
                    <h1>MonTaskPro App</h1>
                    <p className='p-teks__poppins'>Task Management App - Create tasks, set due dates, and track progress from anywhere.</p>
                </div>
                <Button title="Lets Start" className='btn signup-button' onClickBtn={signUpClick}/>
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

function Testimoni({signUpClick}){
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
                    <Button title="Lets Start" className='btn signup-button' onClickBtn={signUpClick}/>
                </div>
            </div>
        </section>
    )
}

function FAQ(){
    const [show, setShow] = React.useState(false);
    const toggleShowAnswer = (index) => {
        if(show === index) {
            return show(false);
        } else {
            setShow(index);
        }
        
    }
    return(
        <section className='container-faq wrapper'>
            <SubHeading title='Frequently Asked Questions'/>
            <div className='container-faq__content'>
                {
                    dataFaq.map((item, index) => {
                        return(
                                <div className='container-faq__item' key={index}>
                                    <div className='title' onClick={()=> toggleShowAnswer(index)} >
                                        <h3>{item.question}</h3>
                                        <span>
                                            {
                                                show === index ? '-': '+'
                                            }
                                        </span>
                                    </div>
                                    <div className=
                                    {
                                        show === index ? 'content show' : 'content'
                                    }> 
                                        <p>
                                            {
                                                item.answer
                                            }
                                        </p>
                                    </div>           
                                </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

function Footer() {
    return(
        <footer>
            <div className='container-footer__link'>
                <div>
                    <img src={MontaskFooterIcon}/>
                </div>
                <ul>
                    <h2>Contact Us</h2>
                    <li>
                        <a href='https://www.linkedin.com/in/adiva-arini-puteri-91bbbb169/'>Adiva</a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/athallahmzaidan/'>Zaidan</a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/feizal-reza-87a920169'>Faizel</a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/orlando-riski-956549207/'>Orlando</a>
                    </li>                    
                </ul>
                <ul>
                    <h2>Our Adress</h2>
                        <p>
                            Jl. Raya Cibubur No. 1, Cibubur, Jakarta Timur, DKI Jakarta 13730
                        </p>
                </ul>
            </div>
            <div className='container-footer__copy'>
                <p>Copyright © 2022 MonTaskPro. All Rights Reserved.</p>
            </div>
        </footer>
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
            <Hero signUpClick={onRegister}/>
            <Service />
            <Testimoni signUpClick={onRegister}/>
            <FAQ />
            <Footer />
        </React.Fragment>
    )
}

LandingPage.propTypes = {
    signUpClick: PropTypes.func,
    loginClick: PropTypes.func
}

Testimoni.propTypes = {
    signUpClick: PropTypes.func
}

ServiceItem.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

SubHeading.propTypes = {
    title: PropTypes.string
}

Button.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    onClickBtn: PropTypes.func
}

Navbar.propTypes = {
    signUpClick: PropTypes.func,
    loginClick: PropTypes.func
}

Hero.propTypes = {
    signUpClick: PropTypes.func    
}

export default LandingPage;