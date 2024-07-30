interface CardProps {
  name: string;
}

function Card({ name }: CardProps) {
  return <div className="">Card {name}</div>;
}

export default Card;
