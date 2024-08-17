import "./index.css"
import facebook from "../Assets/facebook.svg";
import instagram from "../Assets/instagram.svg";
import twitter from "../Assets/twitter.svg";


const Contacts = ()=>{

    return(

        <div className='contacts-details'>
        <div className='contacts-intro'> 
         <h1 className='h-intro' >Join Our Contacts List </h1>
         <p className='p-subscribe'>Stay updated on how a variety of things came to function</p>
         </div> 

         <div className='subscribe-side'>
            <input placeholder='Enter Your Email Address' type='text' className='input' required/>
            <a href='https://www.google.com/intl/en-US/gmail/about/' ><button className='subscribe-button'>Subscribe</button> </a>
         </div>

         <br></br>
         <br></br>
         <br></br>

         <hr/>

         <div className='social-handles'>
            <h2 className='follow-us'>Follow us:</h2>
            <div className='icons'>
            <a href="https://www.facebook.com/" > <img src={facebook}  className='icon'  alt=' Our facebook'/> </a> 
            <a href="https://www.instagram.com/" >  < img src={instagram} className='icon'  alt=' Our instagram'/></a> 
            <a href="https://x.com/home" >  <img src={twitter} className='icon'  alt=' Our twitter'/></a> 
            </div>
            <p className='p-copyright'>copyright&#xa9;dhaki2024.All right reserved</p>
            
         </div>      

        </div>

    )   
}

export default Contacts;