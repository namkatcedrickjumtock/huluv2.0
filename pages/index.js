import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import Endpoints from "../utils/request";
import { useSession} from "next-auth/react";
import Login from "./Login";
import { authOptions } from './api/auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"

export default function Home({ results }) {
  const { data: session } = useSession();
  // const [router] = useRouter()
  if (!session) {
    return <Login />;
  }
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Hulu clone for viewing trailers" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

// runs before rednering data to the client
export async function getServerSideProps(context) {

  // getting user session
  const session = await unstable_getServerSession(context.req, context.res, authOptions)
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
      session
    },
  };
}
