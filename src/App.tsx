import { useState } from "react";
import "./App.css";
import { RatingComponent } from "./components/RatingComponent/RatingComponent";
import { ResultsComponent } from "./components/ResultsComponent/ResultsComponent";

function App() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const ratingSelected = (num: number) => {
    setRating(num);
  };

  return (
    <>
      {submitted ? (
        <ResultsComponent rating={rating} />
      ) : (
        <RatingComponent
          ratingSelected={ratingSelected}
          setSubmitted={setSubmitted}
        />
      )}
    </>
  );
}

export default App;
