import React from "react";

import { Container, Form, } from "react-bootstrap";
import "../CSS/index.css";
import "../CSS/gallery.css";
import Gallery from "./Gallery";


export default function SearchAlbums({
  handleChange,
  album,
  search,
  handleSubmit,
}) {
  return (
    <Container>
      <h1> Album Gallery</h1>
      <Form.Control
        type="text"
        placeholder="search"
        value={search}
        onChange={handleChange}
        onSubmit={handleSubmit}
        style={{ margin: "0px 0px 30px 0px" }}
      />
      <div className = 'albm-container'>
        
        {album.map((values) => 
          // Values from user search call is named track
          <Gallery key ={values.url} track = {values} />
          
          )}
          </div>
        </Container>
  )}