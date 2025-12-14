type SkeletonProps = {
  width?: string;
  height?: string;
  rounded?: "sm" | "md" | "lg" | "full";
  className?: string;
};

const roundedMap = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const Skeleton = ({
  width = "w-full",
  height = "h-4",
  rounded = "md",
  className = "",
}: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 ${width} ${height} ${roundedMap[rounded]} ${className}`}
    />
  );
};

export default Skeleton;