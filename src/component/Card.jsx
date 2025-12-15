import React from "react";

const Card = ({ title, price, imgUrl, brands }) => {
  return (
    <div
      className="relative w-full h-[60vh] border-[0.5px] bg-cover bg-center"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      {/* Bottom gradient for readability */}
      <div className="absolute bottom-2 left-0 w-full p-4 flex justify-between items-center">
        {brands !== 'tomec' ? (
          <span className="text-black text-center mx-auto font-bold">{brands}</span>
        ) : (
          <>
            <span className="text-black">{title}</span>
            <span className="text-black">₹{price}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
