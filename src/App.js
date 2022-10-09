
import React from 'react'

import AlbumPage from './Components/AlbumPage';
import { Route,Routes } from 'react-router';
import Home from './Components/Home';





function App() {
 

  return (
    {/* Creating Routes for the specific album page */},
    <div className = "App">

    <Routes>
      <Route path ="/" element = {<Home />} />
      <Route path ="/album/:albumName/:artistName" element = {<AlbumPage />} />
    </Routes>

   </div>
  )
}

export default App;
