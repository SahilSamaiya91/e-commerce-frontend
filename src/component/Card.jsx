import React from "react";
import { useNavigate , useLocation} from "react-router-dom";
const Card = ({ title, price, imgUrl, brands }) => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const handleClick = () => {
    if(brands?.toLowerCase() === "tomec" || location.pathname.startsWith('/b')) {
      navigate(`/p/${title}`)
    }else{
      navigate(`/b/${brands}`)
    }
  }
  return (
    <div
      className="relative w-full h-[60vh] border-[0.5px] bg-cover bg-center"
      style={{ backgroundImage: `url(${imgUrl})` }}
      onClick={handleClick}
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
