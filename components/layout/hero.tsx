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
    sm: "py-16 sm:py-20",
    md: "py-24 sm:py-32",
    lg: "py-32 sm:py-40 lg:py-48",
  };

  return (
    <section className={cn("relative overflow-hidden", sizeClasses[size], className)}>
      {/* Background Video */}
      {backgroundVideo && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
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

      {/* Overlay */}
      {overlay && (backgroundImage || backgroundVideo) && (
        <div className="absolute inset-0 z-10 bg-black/50" />
      )}

      {/* Content */}
      <Container className="relative z-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className={cn(
              "font-bold tracking-tight",
              backgroundImage || backgroundVideo ? "text-white" : "text-foreground",
              size === "lg" && "text-4xl sm:text-5xl lg:text-6xl",
              size === "md" && "text-3xl sm:text-4xl lg:text-5xl",
              size === "sm" && "text-2xl sm:text-3xl lg:text-4xl"
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "mt-6 text-lg leading-8 sm:text-xl",
                backgroundImage || backgroundVideo
                  ? "text-gray-200"
                  : "text-muted-foreground"
              )}
            >
              {description}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
