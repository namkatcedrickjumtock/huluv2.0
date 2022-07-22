import Thumbnails from "./thumbnails";

import  FlipMove  from "react-flip-move";

export default function Results({ results }) {
  return (
    <FlipMove className="last:mr-2 px-2 my-10 sm:grid md:grid-cols-2 lg:grid-cols-4">
      {results.map(result => 
        <Thumbnails key={result.id} result={result} />
      )}
    </FlipMove>
  );
}
