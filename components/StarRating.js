import React, { useState } from "react";

const setRating = () => {
    console.log("set");
}


const StarRating = (props) => {  
  return(
    <div className="star-rating">
    {[...Array(5)].map((star, idx) => {
        idx += 1;
        return(
            <button key={idx}
            className={idx <= props.rating ? "on" : "off"}
            onClick={() => props.send(idx)}
            >
            <span key={idx} className="star">&#9733;</span>
            </button>
        )
    })}
    </div>

  )
};

export default StarRating;