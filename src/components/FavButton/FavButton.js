import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function FavButton() {
  const [iconState, setIconState] = useState(false);
  function handleFav() {
    if (iconState === false) {
      setIconState(true);
    } else {
      setIconState(false);
    }
  }
  return (
    <div>
      {iconState ? (
        <FontAwesomeIcon icon={faHeart} className="icon" onClick={handleFav} />
      ) : (
        <FontAwesomeIcon icon={faHeart} onClick={handleFav} />
      )}
    </div>
  );
}

export default FavButton;
