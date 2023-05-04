import { useState, useEffect } from "react";
import axios from "axios";
const OMDB = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieData, setMovieData] = useState([]);

  const getData = () => {
    const url = "http://www.omdbapi.com/?apikey=";
    const APIkey = "8f9fda4e&";
    axios
      .get(url + APIkey + "t=" + movieTitle)
      .then((data) => {
        setMovieData(data.data);
        console.log("DATA FROM API:");
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  // Not needed unless you want to display a movie before user input
  //   useEffect(() => {
  //     setTimeout(() => {
  //       getData();
  //     }, 1000);
  //   }, []);

  return (
    <>
      <h1>{movieData.Title}</h1>
      <img src={movieData.Poster} alt={movieData.Title}></img>
      <input type="text" onChange={(e) => setMovieTitle(e.target.value)} />
      <button onClick={getData}>GO</button>
    </>
  );
};

export default OMDB;
