import ReactStars from "react-rating-stars-component";

export default function RatingCard(props) {
  const rating = {
    size: 20,
    value: props.rating,
    isHalf: true,
    edit: false,
  };

  return (
    <div>
      <ReactStars {...rating}></ReactStars>
    </div>
  );
}
