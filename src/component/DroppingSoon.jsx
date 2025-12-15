import { useState, useEffect } from "react";

const DroppingSoon = () => {
  const [current, setCurrent] = useState(0);

  const images = [
    "/designoftheweek.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <img
        src={images[current]}
        alt="Dropping Soon Shoes"
        className="
          w-full
          h-[35vh]
          sm:h-[45vh]
          md:h-[55vh]
          lg:h-[60vh]
        "
      />
    </div>
  );
};

export default DroppingSoon;