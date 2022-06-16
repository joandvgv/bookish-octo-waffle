import clsx from "clsx";

const WIDTH_BASE = 12;

type Props = {
  color: string;
  progress: number;
};

export default function ProgressBar(props: Props) {
  return (
    <div className={clsx(props.color, "w-full", "bg-opacity-30", "h-1.5")}>
      <div
        className={clsx(
          props.color,
          "h-1.5",
          `w-${props.progress}/${WIDTH_BASE}`
        )}
      ></div>
    </div>
  );
}
