type RatingComponentProps = {
  ratingSelected: (num: number) => void;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RatingComponent: React.FC<RatingComponentProps> = ({
  ratingSelected,
  setSubmitted,
}) => {
  return (
    <div className="card">
      <div className="star-icon">
        <img src="/icon-star.svg" alt="" />
      </div>
      <div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="numBtnDiv">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            className="numBtn"
            key={num}
            onClick={() => ratingSelected(num)}
          >
            {num}
          </button>
        ))}
      </div>
      <button className="submitBtn" onClick={() => setSubmitted(true)}>
        Submit
      </button>
    </div>
  );
};
