"use client";
import { useState } from "react";
import Header from "@/components/Header";
import MovieCard from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "remixicon/fonts/remixicon.css";
import Message from "@/components/Message";

export default function Home() {
  const [movieName, setMovieName] = useState("");

  return (
    <>
      <Header />
      <div className="relative w-[90%] md:w-[50%] mx-auto -mt-6">
        <i className="ri-search-2-line text-primary font-bold absolute top-1/2 left-2 transform -translate-y-1/2"></i>
        <Input
          placeholder="Search for movie"
          type="text"
          className="pl-10  py-2 border rounded-lg w-full"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
      </div>

      {movieName ? <MovieCard movieName={movieName} /> : <Message />}
    </>
  );
}
