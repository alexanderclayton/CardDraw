import { Detail, Habitat, Large, Medium, Small } from "../assets";


interface CardProps {
  type: string;
}

export const Card = ({ type }: CardProps) => {
  let imageSrc;

  switch (type) {
    case "small":
      imageSrc = Small;
      break;
    case "medium":
      imageSrc = Medium;
      break;
    case "large":
      imageSrc = Large;
      break;
    case "habitat":
      imageSrc = Habitat;
      break;
    case "detail":
      imageSrc = Detail;
      break;
  }

  return (
    <img
      src={imageSrc}
      alt="card back"
      className="w-48 h-72 object-cover rounded-xl m-4 border-black border"
    />
  );
};
