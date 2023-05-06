import React from 'react';
import Home from "./pages/Home"
import SearchAppBar from "./component/AppBar";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Tour from "./pages/Tour"


function App() {
 
  return (
    <div>
       <SearchAppBar/>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id"
       element={<Tour />} />
      </Routes>

    </BrowserRouter>
 
    
    </div>
  )
   

    
}

export default App;
