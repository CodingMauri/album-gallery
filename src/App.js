
import React, {useState} from 'react'
import GetAlbums from './Components/GetAlbums';
import SearchAlbums from './Components/SearchAlbums';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'



function App() {
  const [search,setSearch] = useState("")
  
  const [album, setAlbum] = useState([])
  console.log(album)

  
  const handleChange = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }
  const handleSubmit = (e)=> {
    e.preventDefault();
  }
  return (
   <div className='App'>
   
    <GetAlbums search = {search} setAlbum = {setAlbum}/>

    <SearchAlbums album = {album} handleChange = {handleChange} handleSubmit ={handleSubmit} />
   </div>
  );
}

export default App;
