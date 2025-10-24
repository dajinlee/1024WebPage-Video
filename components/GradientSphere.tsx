import React from "react";

interface GradientSphereProps {
  size: string;
  position: string;
  colors: string;
  animationDelay?: string;
}

const GradientSphere: React.FC<GradientSphereProps> = ({
  size,
  position,
  colors,
  animationDelay = "0s",
}) => {
  const style = {
    animationDelay,
    animationDuration: `${25 + Math.random() * 12.5}s`, // 0.8배 slower: 25-37.5 seconds
  };

  return (
    <div
      className={`absolute ${size} ${position} rounded-full bg-gradient-radial ${colors} opacity-40 filter blur-xl animate-float -z-[100]`}
      style={style}
    ></div>
  );
};

export default GradientSphere;
