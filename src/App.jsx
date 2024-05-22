import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import {Route,Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import { useState } from 'react';
import Video from './Pages/Video/Video';
const App=()=>{
const[sidebars,setSidebar]=useState(true);
    return (
        <div>
        <Navbar setSidebar={setSidebar}>    </Navbar>
        <Routes>
            <Route path='/' element={<Home sidebar={sidebars}/>}/>
            <Route path='/video/:categoryId/:videoId' element={<Video/>}/>


        </Routes>
     
        </div>
    )
}
export default App;

