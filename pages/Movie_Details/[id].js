import Head from "next/head";
import { useRouter } from "next/router";

const Movies_details = ({ movie }) => {
  console.log(movie.results);
  return (
    <div>
      <div>
        <div>
            {/* {movie?.map((movie) => (
              <p className="text-white">movie.name</p>
            ))} */}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Movies_details;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const movieDetails = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}&language=en-US`
  )
    .then((res) => res.json())
    .catch((err) => console.log(`response error ${err}`));
  return {
    props: {
      movie: movieDetails,
    }, // will be passed to the page component as props
  };
}
