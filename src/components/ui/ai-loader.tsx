import * as React from "react";

interface LoaderProps {
  size?: number; 
  text?: string;
  fullScreen?: boolean;
}

export const Component: React.FC<LoaderProps> = ({ size = 180, text = "Generating", fullScreen = true }) => {
  const letters = text.split("");

  const content = (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: size, height: size }}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block text-purple-600 dark:text-gray-800 opacity-40"
          style={{ 
            animation: 'loaderLetter 3s infinite',
            animationDelay: `${index * 0.1}s` 
          }}
        >
          {letter}
        </span>
      ))}

      <div
        className="absolute inset-0 rounded-full"
        style={{ 
          animation: 'loaderCircle 5s linear infinite'
        }}
      ></div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#1a3379] via-[#0f172a] to-black dark:from-gray-100 dark:via-gray-200 dark:to-gray-300">
        {content}
      </div>
    );
  }

  return content;
};
