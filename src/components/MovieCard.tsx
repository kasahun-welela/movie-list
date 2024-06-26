import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        const response = await axios.get(`https://www.omdbapi.com/?t=${props.movieName}&apikey=e4b23aff`);
        console.log(response)
        setMovieData([response.data]); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.movieName]); 

  return (
    <>
      {movieData.map(movie => (
        <Card key={movie.imdbID} className="w-[90%] md:w-[50%] mx-auto flex flex-col md:flex-row my-3">
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
                  <i className="ri-star-fill text-yellow-400"></i> {movie.imdbRating}
                </p>
              </div>
              <CardDescription className="flex max-w-sm gap-3">
                <p>{movie.Runtime}</p> <p>{movie.Genre}</p> <p>Watchlist</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify ">
                {movie.Plot}
              </p>
            </CardContent>
          </div>
        </Card>
      ))}
    </>
  );
}

export default MovieCard;
