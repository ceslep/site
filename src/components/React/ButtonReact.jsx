// src/components/SimpleButton.jsx
import React, { useState } from "react";


const ButtonReact = () => {

 const [isToggled,setIstoggled]=useState(false);

  const handleClick = () => {
   setIstoggled(!isToggled);
  };

  return (
    <button
      onClick={handleClick}
      className="p-5 m-5"
      style={{
        padding: "15px 20px",
        fontSize: "16px",
        backgroundColor: isToggled?"#007BFF":"#11B402FF",
        color: isToggled?"#fff":"#eee",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {isToggled ? "Activado" : "Desactivado"}
    </button>
  );
};

export default ButtonReact;
