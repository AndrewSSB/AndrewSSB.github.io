import { ReactNode } from "react";
import "../styles/InfoCard.css";

export type InfoCardProps = {
  title: ReactNode;
  titleDescription?: ReactNode;
  children: ReactNode;
};

export default function InfoCard(props: InfoCardProps) {
  return (
    <div className="info-card-container">
      {props.title}
      {props.titleDescription && props.titleDescription}
      {props.children}
    </div>
  );
}
