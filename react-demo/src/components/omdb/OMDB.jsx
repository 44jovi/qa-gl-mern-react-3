import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, Button, Table, Spinner } from "reactstrap";

const OMDB = () => {
  const [movieTitle, setMovieTitle] = useState("hobbit");
  const [movieData, setMovieData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getData = (e) => {
    if (e) {
      e.preventDefault();
    }

    const url = "http://www.omdbapi.com/?apikey=";
    const APIkey = "8f9fda4e&";
    axios
      .get(url + APIkey + "t=" + movieTitle)
      .then((data) => {
        setMovieData(data.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Only needed if you want to display a movie before user input
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, []);

  const printData = () => {
    if (isLoaded) {
      const { Title, Year, Genre, Rated, Director, Actors, Plot, Ratings } =
        movieData;
      return (
        <>
          <tr>
            <td>Title</td>
            <td>{Title}</td>
          </tr>
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
            <td>Actors</td>
            <td>{Actors}</td>
          </tr>
          <tr>
            <td>Plot</td>
            <td>{Plot}</td>
          </tr>
          <tr>
            <td>Ratings</td>
            <td>
              {Ratings.map((r) => {
                return <p>{r.Source + ": " + r.Value}</p>;
              })}
            </td>
          </tr>
        </>
      );
    } else {
      return (
        <>
          <h1>LOADING...</h1>
          <Spinner
            color="primary"
            style={{
              height: "10rem",
              width: "10rem",
            }}
            type="grow"
          />
        </>
      );
    }
  };

  return (
    <>
      <h1>{movieData.Title}</h1>
      <img src={movieData.Poster} alt={movieData.Title}></img>

      <Table dark>
        <thead>
          <th></th>
          <th></th>
        </thead>
        <tbody>{printData()}</tbody>
      </Table>

      <Form onSubmit={getData}>
        <Input type="text" onChange={(e) => setMovieTitle(e.target.value)} />
        <Button color="success" type="submit" style={{ width: "100%" }}>
          GO
        </Button>
      </Form>
    </>
  );
};

export default OMDB;
