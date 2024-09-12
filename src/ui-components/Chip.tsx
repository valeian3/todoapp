import { FC } from "react";

type ChipColor =
  | "default"
  | "dark"
  | "red"
  | "green"
  | "yellow"
  | "indigo"
  | "purple"
  | "pink";

const colorClasses: Record<ChipColor, string> = {
  default: "text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300",
  dark: "text-gray-200 bg-gray-800 dark:bg-gray-900 dark:text-gray-200",
  red: "text-red-800 bg-red-100 dark:bg-red-700 dark:text-red-300",
  green: "text-green-800 bg-green-100 dark:bg-green-700 dark:text-green-300",
  yellow:
    "text-yellow-800 bg-yellow-100 dark:bg-yellow-700 dark:text-yellow-300",
  indigo:
    "text-indigo-800 bg-indigo-100 dark:bg-indigo-700 dark:text-indigo-300",
  purple:
    "text-purple-800 bg-purple-100 dark:bg-purple-700 dark:text-purple-300",
  pink: "text-pink-800 bg-pink-100 dark:bg-pink-700 dark:text-pink-300",
};

type ChipProps = {
  label: string;
  color?: ChipColor;
  onClick?: () => void;
};

const Chip: FC<ChipProps> = ({
  label = "Default",
  color = "default",
  onClick = () => {},
}) => {
  const colorClass = colorClasses[color] || colorClasses.default;

  return (
    <span
      id={color}
      onClick={onClick}
      className={`cursor-pointer inline-flex items-center px-4 py-2 me-4 text-sm font-medium rounded ${colorClass}`}
    >
      {label}
    </span>
  );
};

export default Chip;
