"use client";
import Header from "@/components/Header";
import Link from "next/link";
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

function page() {
  const movieData: Movie[] = JSON.parse(localStorage.getItem("movies") || "[]");

  return (
    <>
      <Header title="My Watchlist" link="/" action="Search for movies" />
      {movieData.length > 0 ? (
        movieData.map((movie: any) => (
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
                  <p>
                    <i className="ri-delete-bin-6-line"></i>
                    Watchlist
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-justify ">{movie.Plot}</p>
              </CardContent>
            </div>
          </Card>
        ))
      ) : (
        <div className="mt-24 flex flex-col items-center justify-center gap-4">
          <p className="text-muted-foreground">
            Your watchlist is looking a little empty...
          </p>
          <Link href="/" className="flex gap-2">
            <i className="ri-add-circle-fill"></i>
            <p>Let’s add some movies!</p>
          </Link>
        </div>
      )}
    </>
  );
}

export default page;
