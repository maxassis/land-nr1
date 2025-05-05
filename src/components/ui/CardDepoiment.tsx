import { Star } from "lucide-react";

interface CardProps {
  text: string;
  stars: number;
}

interface StarIconProps {
  index: number;
}

function StarIcon({ index }: StarIconProps) {
  return (
    <div key={index} className="size-8 bg-primary grid place-items-center rounded-lg">
      <Star className="text-white size-5" />
    </div>
  );
}

export default function CardDepoiment({ text, stars }: CardProps) {
  return (
    <div className="flex flex-col p-10 rounded-xl max-w-[460px] h-full max-h-[400px] bg-white justify-between">
      <p className="text-black text-sm">{text}</p>

      <div className="flex gap-1 mt-8">
        {Array.from({ length: stars }).map((_, index) => (
          <StarIcon key={index} index={0} />
        ))}
      </div>
    </div>
  );
}
