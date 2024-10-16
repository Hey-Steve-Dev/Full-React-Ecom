import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const Rating = ({ item }) => {
  // Destructure the rating object from item
  const { rating } = item;

  let starString = [];

  const setStarRating = () => {
    console.log(rating.rate);
    switch (true) {
      case rating.rate < 1:
        starString = [<FaStarHalf />];
        break;
      case rating.rate === 1:
        starString = [<FaStar />];
        break;
      case rating.rate < 2:
        starString = [<FaStar />, <FaStarHalf />];
        break;
      case rating.rate === 2:
        starString = [<FaStar />, <FaStar />];
        break;
      case rating.rate < 3:
        starString = [<FaStar />, <FaStar />, <FaStarHalf />];
        break;
      case rating.rate === 3:
        starString = [<FaStar />, <FaStar />, <FaStar />];
        break;
      case rating.rate < 4:
        starString = [<FaStar />, <FaStar />, <FaStar />, <FaStarHalf />];
        break;
      case rating.rate === 4:
        starString = [<FaStar />, <FaStar />, <FaStar />, <FaStar />];
        break;
      case rating.rate < 5:
        starString = [
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStarHalf />,
        ];
        break;
      case (rating.rate = 5):
        starString = [
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
          <FaStar />,
        ];
        break;
      default:
    }
  };

  setStarRating();

  return (
    <div className="reviewBlock">
      {starString}

      <div className="ratingText">Rating {rating.rate}</div>
      <br />
      <div className="reviewText">Reviews {rating.count}</div>
    </div>
  );
};

export default Rating;
