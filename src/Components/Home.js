import React, {useState } from "react";
import GetAlbums from "../Components/GetAlbums";
import SearchAlbums from "../Components/SearchAlbums";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

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
    <motion.div initial = {{x: "-100vw"}} animate = {{x:0}} transition = {{type:"spring", stiffness:50}}> 
      <GetAlbums search={search} setAlbum={setAlbum} />
      <SearchAlbums
        album={album}
        handleChange={handleChange}
      
      />



    </motion.div>
  );
}
