type ResultsComponentProps = {
  rating: number;
};

export const ResultsComponent: React.FC<ResultsComponentProps> = ({
  rating,
}) => {
  return (
    <div className="card results-card">
      <div className="result-div">
        <img src="/illustration-thank-you.svg" alt="" />
      </div>
      <div className="result-div">
        <p>You selected {rating} out of 5</p>
      </div>
      <div className="result-div">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};
