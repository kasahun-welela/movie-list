import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { toast } from "react-toastify";

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  imdbRating: string;
  Runtime: string;
  Genre: string;
  Plot: string;
}

function MovieCard(props: { movieName: string }) {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?t=${props.movieName}&apikey=e4b23aff`
        );
        console.log(response);
        setMovieData([response.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.movieName]);

  const addMovie = (
    imdbID: string,
    Poster: string,
    Title: string,
    imdbRating: string,
    Runtime: string,
    Genre: string,
    Plot: string
  ) => {
    const movie = {
      imdbID: imdbID,
      Poster: Poster,
      Title: Title,
      imdbRating: imdbRating,
      Runtime: Runtime,
      Genre: Genre,
      Plot: Plot,
    };
    console.log("film");

    const existingMovies = JSON.parse(localStorage.getItem("movies") || "[]");
    const isDuplicate = existingMovies.some(
      (movie: any) => movie.imdbID === imdbID
    );

    if (!isDuplicate) {
      existingMovies.push(movie);
      localStorage.setItem("movies", JSON.stringify(existingMovies));
      console.log("Movie added to watchlist:", movie);
      toast.success("Movie added to watchlist");
    } else {
      console.log("Movie already exists in watchlist:", movie);
      toast.error("Movie already exists in watchlist");
    }
  };

  return (
    <>
      {movieData.map((movie) => (
        <Card
          key={movie.imdbID}
          className="w-[90%] md:w-[50%] mx-auto flex flex-col md:flex-row my-3"
        >
          <img
            src={movie.Poster}
            className="md:h-48 h-[200px] rounded-t-md md:rounded-r-none md:rounded-l-md w-full md:w-fit"
            alt={movie.Title}
          />
          <div>
            <CardHeader>
              <div className="flex gap-4">
                <CardTitle>{movie.Title}</CardTitle>{" "}
                <p>
                  <i className="ri-star-fill text-yellow-400"></i>{" "}
                  {movie.imdbRating}
                </p>
              </div>
              <CardDescription className="flex max-w-sm gap-3">
                <p>{movie.Runtime}</p> <p>{movie.Genre}</p>{" "}
                <p
                  onClick={() =>
                    addMovie(
                      movie.imdbID,
                      movie.Poster,
                      movie.Title,
                      movie.imdbRating,
                      movie.Runtime,
                      movie.Genre,
                      movie.Plot
                    )
                  }
                >
                  <i className="ri-add-circle-fill"></i>
                  Watchlist
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify ">{movie.Plot}</p>
            </CardContent>
          </div>
        </Card>
      ))}
    </>
  );
}

export default MovieCard;
