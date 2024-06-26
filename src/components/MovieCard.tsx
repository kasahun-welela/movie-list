import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function MovieCard() {
  return (
    <Card className="w-[90%] md:w-[50%] mx-auto flex flex-col md:flex-row my-3">
      <img
        src="https://m.media-amazon.com/images/M/MV5BMWQ2MjQ0OTctMWE1OC00NjZjLTk3ZDAtNTk3NTZiYWMxYTlmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        className="md:h-48 h-[200px] rounded-t-md md:rounded-r-none md:rounded-l-md w-full md:w-fit "
        alt="fff"
      />
      <div>
        <CardHeader>
          <div className="flex gap-4">
            <CardTitle>Blade Runner</CardTitle> <p><i className="ri-star-fill text-yellow-400"></i> {" "}8.1</p>
          </div>
          <CardDescription className="flex max-w-sm gap-3">
            <p>117min</p> <p>Action, drama, Sci-fi</p> <p>Watchlist</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-justify ">
            Card Content A half-vampire, half-mortal man becomes a protector of
            the mortal race, while slaying evil vampires.
          </p>
        </CardContent>
      </div>
    </Card>
  );
}

export default MovieCard;
