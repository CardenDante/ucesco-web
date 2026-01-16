import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
  className?: string;
}

export function RatingStars({
  rating,
  maxRating = 5,
  size = "md",
  showNumber = false,
  className,
}: RatingStarsProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {Array.from({ length: maxRating }).map((_, index) => (
          <Star
            key={index}
            className={cn(
              sizeClasses[size],
              index < Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : index < rating
                ? "fill-yellow-200 text-yellow-400"
                : "text-gray-300"
            )}
          />
        ))}
      </div>
      {showNumber && (
        <span className="ml-1 text-sm font-medium">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
