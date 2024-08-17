import './index.css';
import logos from '../Assets/logo.png';
import rect from '../Assets/rect.png';
import caseStudy from '../Assets/caseStudy.png';
import trevorNoah from '../Assets/trevorNoah.jpg';
import React, { useState } from 'react';
import { FaBars,FaTimes} from 'react-icons/fa';
const Blogs=()=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu=() =>{
      setIsOpen(!isOpen);
    };
    return(
        <div className='Body'  isOpen = {isOpen}>
            <div className='navbar'>
                <img src={logos} alt='logo' id='logo'></img>
                <button className='hamburger-button' onClick={toggleMenu}>
            {isOpen ? <FaTimes/> : <FaBars />}
          </button>
                <div className={`items ${isOpen ? 'close'  : 'open'}`}>
                    <a href='Home'>Home</a>
                    <a href='Videos'>Videos</a>
                    <a href='Podcasts'> Podcasts</a>
                    <a href='Blogs' id='bl'>Blogs</a>
                    <a href='Portfolios'>Portfolis</a>
                    <a href='Contacts'>Contacts</a>
            </div>
            </div>
            <div className='BlogsBody'>
                <div className='text'>
                <h2>Discover Transformative Insights in our Blog Library</h2>
                </div>
                <div className='Details'>
                    <div className='BornACrime'>
                        <img src={rect} alt='Body' id='Topics'/>
                        <div className='content'>
                            <img src={trevorNoah} alt='Born A Crime' id='studies'/>
                            <p>Be inspired by the <br/>
                            extraordinary life journey <br/>
                            chronicled in Born a Crime <br/>
                            </p>
                            <a href='https://docs.google.com/document/d/1_pjeMJedYZE3YQqhfeRZYXALRshZkM0Q9ZnyLF5bVIE/edit?usp=sharing'><button className='button'>Read</button></a>
                        </div>
                    </div>
                    <div className='BornACrime'>
                        <img src={rect} alt='Body' id='Topics'/>
                        <div className='content'>
                            <img src={caseStudy} alt='Casestudy' id='studies'/>
                            <p>Discover the strategies <br/>
                               powering Rwanda's Dairy <br/>
                                transformation in this <br/>
                                comprehensive case study.<br/>
                                </p>
                            <button className='button'>Read</button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Blogs;