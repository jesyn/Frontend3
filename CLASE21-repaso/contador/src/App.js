import { useEffect, useState } from "react";
import "./styles.css";
import useFetch from "./hooks/useFetch";


const TOTAL_CHARACTERS = 5;


const API_URL = `https://thesimpsonsquoteapi.glitch.me/quotes?count=${TOTAL_CHARACTERS}`;

const Card = ({ url, name }) => (
  <div className="image-card">
    <div className="card-img-title">
      <h5>{name}</h5>
    </div>
    <img src={url} className="card-img" alt={name} />
  </div>
);


const ImageGallery = () => {
  
  const { isLoading, apiData: characters, errorMessage } = useFetch(`${API_URL}`);
  console.log(characters)

  const renderCharacters = (characters) =>
    characters.map(({ character, image }, index) => (
      <Card url={image} name={character} key={`${character}-${index}`} />
    ));

  return (
    <div className="gallery-container">
      {characters.length ? (
        renderCharacters(characters)
      ) : (
        <p className="loading-text">Cargando Galería...</p>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg" alt="imagen simpsons" className="title-image"/>
      <ImageGallery />
    </div>
  );
}
