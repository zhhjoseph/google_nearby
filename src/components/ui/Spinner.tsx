import MoonLoader from "react-spinners/MoonLoader";

interface SpinnerProps {
  color: string;
  size?: number;
}
const Spinner = ({ color, size = 60 }: SpinnerProps) => {
  return <MoonLoader color={color} size={size} />;
};

export { Spinner };
