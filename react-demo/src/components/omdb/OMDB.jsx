import { useState, useEffect } from "react";
import axios from "axios";
import { Input, Button, Table } from "reactstrap";
const OMDB = () => {
  const [movieTitle, setMovieTitle] = useState("hobbit");
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

  //   Only needed if you want to display a movie before user input
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, []);

  const printData = () => {
    const { Year, Genre, Rated, Director, Plot, Ratings } = movieData;

    return (
      <>
        <tr>
          <td>Year</td>
          <td>{Year}</td>
        </tr>
        <tr>
          <td>Genre</td>
          <td>{Genre}</td>
        </tr>
        <tr>
          <td>Rated</td>
          <td>{Rated}</td>
        </tr>
        <tr>
          <td>Director</td>
          <td>{Director}</td>
        </tr>
        <tr>
          <td>Plot</td>
          <td>{Plot}</td>
        </tr>
        <tr>
          <td>Ratings (WIP)</td>
          <td></td>
        </tr>
      </>
    );
  };

  return (
    <>
      <h1>{movieData.Title}</h1>
      <img src={movieData.Poster} alt={movieData.Title} width="25%"></img>
      <Table dark style={{ width: "25%" }}>
        <thead>
          <th></th>
          <th></th>
        </thead>
        <tbody>{printData()}</tbody>
      </Table>
      <Input
        type="text"
        onChange={(e) => setMovieTitle(e.target.value)}
        style={{ width: "25%" }}
      />
      <Button color="success" onClick={getData} style={{ width: "25%" }}>
        GO
      </Button>
    </>
  );
};

export default OMDB;
