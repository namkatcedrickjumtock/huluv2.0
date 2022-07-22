import { useRouter } from "next/router";
import Endpoints from "../utils/request";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(Endpoints).map(([key, { title, url }]) => (
          <h2
            key={key}
            className="last:pr-20 cursor-pointer 
            transistion 
            duration-100 hover:scale-125
             hover:text-white
             active:text-red-500"
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title} 
          </h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
