import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <Header title="My Watchlist" link="/" action="Search for movies" />
      <div className="mt-24 flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">
          Your watchlist is looking a little empty...
        </p>
        <Link href="/" className="flex gap-2">
          <i className="ri-add-circle-fill"></i>
          <p>Let’s add some movies!</p>
        </Link>
      </div>
    </>
  );
}

export default page;
