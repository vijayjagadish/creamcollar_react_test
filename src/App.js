import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mergedindex from './Website/Index/Mergedindex';
import About from './Website/About/About';
import Contact from './Website/Contact/Contact';
import Blogmerge from './Website/Blog/Blogmerge';
import ComponentB from './Website/Dummy/ComponentB';



function App()  {
  return (
<Router>

    <Routes>
      <Route  path='/' Component={Mergedindex}/>
      <Route  path='/about' Component={About}/>
      <Route  path='/contact' Component={Contact}/>
      <Route  path='/blog' Component={Blogmerge}/>
      <Route path='/dummy' Component={ComponentB}/>
    </Routes>

</Router>
      
   
  );
}

export default App;
