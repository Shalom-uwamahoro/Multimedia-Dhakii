import LandingPage from "./LandingPage";
import Podcast from "./Podcast";
import Blogs from "./Blogs";
import Videos from "./Videos"
import Contacts from "./Contacts";
import Portfolios from "./Portfolios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App =()=>{
  return(
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={
          <>
           <LandingPage/>
          </>
        } />
        <Route path="/Videos" element={<Videos/>}/>
        <Route path="/Podcast" element={<Podcast/>}/>
        <Route path="/Blogs" element={<Blogs/>}/>
        <Route path="/Portfolio" element={<Portfolios/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
      
        </Routes>
      </Router>    
    </div>
  )
}
export default App;