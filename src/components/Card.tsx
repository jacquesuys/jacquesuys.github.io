import { CardType } from "../types";

function Card({ children, className }: CardType) {
  return (
    <div className={`${className} card w-full bg-base-100 shadow-xl`}>
      {children}
    </div>
  );
}

function Body({ children, className }: CardType) {
  return <div className={`${className} card-body`}>{children}</div>;
}

function Title({ children, className }: CardType) {
  return <h2 className={`${className} card-title`}>{children}</h2>;
}

function SubTitle({ children, className }: CardType) {
  return (
    <p className={`${className} text-xs text-gray-400 mb-2`}>{children}</p>
  );
}

Card.Body = Body;
Card.Title = Title;
Card.SubTitle = SubTitle;

export default Card;
