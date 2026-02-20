import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

Card.Image = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <img src={src} alt={alt} className={`w-full h-48 object-cover ${className}`} />
);

Card.Content = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

Card.Title = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-xl font-bold mb-2 ${className}`}>{children}</h2>
);

Card.Description = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-gray-700 ${className}`}>{children}</p>
);

export default Card;