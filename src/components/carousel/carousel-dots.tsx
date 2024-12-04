interface CarouselDotsProps {
  current: number;
  count: number;
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({
  current,
  count,
}) => {
  return (
    <div className="flex justify-center space-x-2">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`size-2 rounded-full ${
            index === current - 1
              ? "bg-neutral-600 dark:bg-brand-white"
              : "bg-slate-300 dark:bg-neutral-600"
          } transition-colors`}
        ></div>
      ))}
    </div>
  );
};
