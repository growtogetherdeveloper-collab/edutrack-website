import { cn } from "./utils";

interface CallToActionProps {
  badge?: {
    images: string[];
    text: string;
  };
  heading: string;
  buttonText: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  className?: string;
}

export default function CallToAction({
  badge,
  heading,
  buttonText,
  buttonLink,
  onButtonClick,
  className,
}: CallToActionProps) {
  return (
    <div className={cn("max-w-5xl py-16 md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#155dfc] to-[#0d3d9f] rounded-2xl p-10 text-white", className)}>
      {badge && (
        <div className="flex flex-wrap items-center justify-center p-1 rounded-full bg-blue-600/10 backdrop-blur border border-blue-500/40 text-sm">
          <div className="flex items-center">
            {badge.images.map((image, index) => (
              <img
                key={index}
                className={cn(
                  "size-6 md:size-7 rounded-full border-3 border-white",
                  index > 0 && "-translate-x-2"
                )}
                style={index > 0 ? { marginLeft: `-${index * 8}px` } : {}}
                src={image}
                alt={`User ${index + 1}`}
              />
            ))}
          </div>
          <p className="-translate-x-2 font-medium">{badge.text}</p>
        </div>
      )}
      
      <h1 className="text-4xl md:text-5xl md:leading-[60px] font-semibold max-w-xl mt-5 bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text">
        {heading}
      </h1>
      
      <button
        onClick={onButtonClick}
        className="px-8 py-3 text-white bg-white/20 hover:bg-white/30 transition-all rounded-full uppercase text-sm mt-8 backdrop-blur border border-white/40"
      >
        {buttonText}
      </button>
    </div>
  );
}
