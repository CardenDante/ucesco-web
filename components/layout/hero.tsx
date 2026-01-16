import { cn } from "@/lib/utils";
import { Container } from "./container";

interface HeroProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Hero({
  title,
  description,
  children,
  backgroundImage,
  backgroundVideo,
  overlay = true,
  className,
  size = "lg",
}: HeroProps) {
  const sizeClasses = {
    sm: "min-h-[30vh]",
    md: "min-h-[45vh]",
    lg: "min-h-[60vh]",
  };

  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden pt-28 pb-20",
        sizeClasses[size],
        className
      )}
    >
      {/* Background Video */}
      {backgroundVideo && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Background Image */}
      {backgroundImage && !backgroundVideo && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Overlay for better text visibility */}
      {overlay && (backgroundImage || backgroundVideo) && (
        <>
          <div className="absolute inset-0 z-10 bg-black/30" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
        </>
      )}

      {/* Content */}
      <Container className="relative z-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className={cn(
              "font-display font-bold tracking-tight leading-[1.1]",
              backgroundImage || backgroundVideo
                ? "text-white drop-shadow-lg"
                : "text-foreground",
              size === "lg" && "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
              size === "md" && "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
              size === "sm" && "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto",
                backgroundImage || backgroundVideo
                  ? "text-white/90 drop-shadow-md"
                  : "text-muted-foreground"
              )}
            >
              {description}
            </p>
          )}
          {children && <div className="mt-6 sm:mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
