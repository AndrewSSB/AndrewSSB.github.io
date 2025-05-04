import logo from "../assets/reci-book-logo.svg";
import "../styles/IconButton.css";

export type IconButtonProps = {
  text: string;
  src?: string | null;
  textColor?: string | null;
};

export default function IconButton(props: IconButtonProps) {
  return (
    <div className="icon-container">
      <img className="icon-button" src={props.src ?? logo} alt="Logo" />
      <p className="icon-text" style={{ color: `${props.textColor}` }}>
        {props.text}
      </p>
    </div>
  );
}
