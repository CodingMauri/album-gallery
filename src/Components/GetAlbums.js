import { useEffect } from "react";
import axios from "axios";
import "../CSS/gallery.css"

const GetAlbums = ({ search, setAlbum}) => {
  const searchOptions = {
    api_key: process.env.REACT_APP_MUSIC_KEY,
    limit: 10,
    url: "http://ws.audioscrobbler.com/2.0/",
  };

  //Creating my URL
  const URL = `${searchOptions.url}?method=album.search&album=${search}&api_key=cb9c97bbc3a636807e3309835d317bf1&limit=9&format=json`;

  //Going to start making my fetch call to retrieve my data


  const getApiAlbums = async() => {
    const response = await axios
    .get(URL)
    .then(res => setAlbum(res.data.results.albummatches.album))
    .catch((err) => console.log(err))
    
  }
  
  
  useEffect(() => {
    
    getApiAlbums() 
  }, [search]);

 
  // if(search === ""){
  //   return <div className ="welcome">Search some of your favorite artist albums</div>
  // }
 }

export default GetAlbums;
