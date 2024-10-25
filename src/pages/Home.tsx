import Nav from "@/component/Nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

interface Movie {
  _id: string;
  title: string;
  genre: string;
  director: string;
  stars: string[];
  language: string;
  releasedDate: string;
  pageViews: number;
  totalVoted: number;
  poster: string;
  trailer: string;
}

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://greektestbackend.onrender.com/api/movieList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting",
          }),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Movies:", data);
        setMovies(data.result);
      } catch (error) {
        setError("Failed to fetch movies");
        console.error("Error fetching movie data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <>
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Movie List</h1>
        <div className="space-y-6">
          {movies.map((movie) => (
            <Card key={movie._id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex">
                  <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
                    <Button variant="ghost" className="p-0">
                      <ChevronUp className="h-6 w-6" />
                    </Button>
                    <span className="text-xl font-bold my-2">
                      {movie.totalVoted}
                    </span>
                    <Button variant="ghost" className="p-0">
                      <ChevronDown className="h-6 w-6" />
                    </Button>
                    <span className="text-sm mt-2">Votes</span>
                  </div>
                  <div className="flex-shrink-0 w-32 h-48 relative">
                    <img
                      src={movie.poster || "/placeholder.svg"}
                      alt={`${movie.title} poster`}
                      // layout="fill"
                      // objectFit="cover"
                      className=" "
                    />
                  </div>
                  <div className="flex flex-col items-start p-4">
                    <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                    <p>
                      <strong>Genre:</strong> {movie.genre}
                    </p>
                    <p>
                      <strong>Director:</strong> {movie.director}
                    </p>
                    <p className="truncate ">
                      <strong>Stars:</strong> {movie.stars.join(", ")}
                    </p>

                    <div className="flex gap-3">
                      <p>Mins</p> | <p>{movie.language}</p> |{" "}
                      <p>{movie.releasedDate}</p>
                    </div>
                    <div className="flex gap-3 text-sky-400">
                      <p>{movie.pageViews} views</p> |{" "}
                      <p>Voted by {movie.totalVoted} People</p>
                    </div>
                  </div>
                </div>
                <Button
                  className="w-full bg-sky-500 hover:bg-sky-600 mt-2"
                  onClick={() => window.open(movie.trailer, "_blank")}
                >
                  Watch Trailer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
