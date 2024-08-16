import React from 'react';
import Navbar from '../Navbar';
import './index.css';
import Media from '../Assets/multi-removebg-preview.png';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className='outer-container'> 
    <Navbar/> 
    <div className='container'>
   
      <div className='landing-page-text'>
        <h3>Unlock a world of creativity, knowledge, and inspiration on Dhakii  </h3>
        <p>Welcome to Dhakii, where creativity, knowledge, and inspiration converge.
          Here, you'll find a captivating blend of multimedia content that caters to a wide range of interests and passions.</p>
        <br/>
        <div className='get-started'>
        <Link to="/Portfolio" className='text-link' activeClassName="active-link">
        <button className='btnLearnMore'>Learn More</button> 
      </Link>
        </div>
      </div>
      <div className='landing-page-image'>
        <img src={Media} alt='Multimedia' className='image-students'/>
      </div>
    </div>
    </div>
  );
}
export default LandingPage;