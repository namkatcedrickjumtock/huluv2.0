import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import Endpoints from "../utils/request";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Hulu clone for viewing trailers" />
        <link rel="icon" href="https://links.papareact.com/ua6" />  
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

// runs before rednering data to the client
export async function getServerSideProps(context) {

  // catch query param
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      Endpoints[genre]?.url || Endpoints.fetchedTrending.url
    }`
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      results: request.results,
    },
  };
}
