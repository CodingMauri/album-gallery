import React, { useEffect, useState } from "react";
import GetAlbums from "../Components/GetAlbums";
import SearchAlbums from "../Components/SearchAlbums";
import "bootstrap/dist/css/bootstrap.min.css";
import AlbumPage from "./AlbumPage";


export default function Home() {
  const [search, setSearch] = useState("");

  const [album, setAlbum] = useState([]);
  

  
  

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    if(search.trim().length === 0){
       return 
    }
  };
  



  return (
    <div>
      <GetAlbums search={search} setAlbum={setAlbum} />
      <SearchAlbums
        album={album}
        handleChange={handleChange}
      
      />



    </div>
  );
}
