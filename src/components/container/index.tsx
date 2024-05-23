"use client";
import React, { useEffect, useState } from "react";

function Container({
  children,
  isRight,
  className,
}: Readonly<{
  children: React.ReactNode;
  isRight?: boolean;
  className?: string;
}>) {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${className}  ${
        screenWidth < 1440
          ? !isRight
            ? " w-full md:w-[90%] max-w-[1230px] mx-auto"
            : " w-full md:w-[95%] ml-auto "
          : " w-full md:w-[90%] max-w-[1230px] mx-auto"
      }    `}
    >
      {children}
    </div>
  );
}

export default Container;
