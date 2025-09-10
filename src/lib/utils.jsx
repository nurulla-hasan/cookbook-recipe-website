import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { Star } from "lucide-react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const StarRating = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          size={16}
          key={index}
          className={`${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-primary'}`}
        />
      ))}
    </div>
  );
};