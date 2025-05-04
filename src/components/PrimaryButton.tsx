import "../styles/PrimaryButton.css";

export type PrimaryButtonProps = {
  text: string;
  backgroundColor?: string | null;
  textColor?: string | null;
  width?: string | null;
  height?: string | null;
  border?: boolean | null;
  onClick?: () => void;
};

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <div
      className="primary-button-content"
      style={{
        backgroundColor: `${props.backgroundColor}`,
        height: `${props.height}`,
        width: `${props.width}`,
        border: props.border ? `1px solid ${props.textColor}` : "",
      }}
      onClick={props.onClick}
    >
      <p
        className="primary-button-text"
        style={{ color: `${props.textColor}` }}
      >
        {props.text}
      </p>
    </div>
  );
}
