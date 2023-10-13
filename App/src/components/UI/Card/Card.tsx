import { ReactNode } from "react";
import "./Card.scss";
const Card: React.FC<{ children?: ReactNode | ReactNode[] }> = (props) => {
  return <div className="card">{props.children}</div>;
};

export default Card;
