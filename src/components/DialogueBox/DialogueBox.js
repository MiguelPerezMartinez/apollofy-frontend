import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

//import dialogueHandlerReducer
import { hideDialogue } from "../../redux/dialogueHandler/actions";

function DialogueBox() {
  const dispatch = useDispatch();
  const dialogueHandler = useSelector((state) => state.dialogueHandler);
  const userData = useSelector((state) => state.userReducer.data);
  const dialogueBox = useRef();

  const [isOwner, setIsOwner] = useState(false);

  // Set the method to close the dialog when scrolling
  useEffect(() => {
    window.onscroll = () => {
      closeDialogue();
    };
  }, []);

  // Set owner option handler
  useEffect(() => {
    if (userData.userId === dialogueHandler.trackData.owner) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, []);

  // Set the dialogue box position
  useEffect(() => {
    dialogueBox.current.style.display = "block";

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const dialogueBoxHeight = dialogueBox.current.offsetHeight + 20;
    const dialogueBoxWidth = dialogueBox.current.offsetWidth + 20;
    const clickedPosX = dialogueHandler.position.x;
    const clickedPosY = dialogueHandler.position.y;

    if (windowWidth - clickedPosX < dialogueBoxWidth) {
      dialogueBox.current.style.left = windowWidth - dialogueBoxWidth + "px";
    } else {
      dialogueBox.current.style.left = clickedPosX + "px";
    }

    if (windowHeight - clickedPosY < dialogueBoxHeight) {
      dialogueBox.current.style.top = windowHeight - dialogueBoxHeight + "px";
    } else {
      dialogueBox.current.style.top = clickedPosY + "px";
    }
  }, []);

  function closeDialogue() {
    window.onscroll = () => {};
    dispatch(hideDialogue());
  }

  function handlerAddToQueue() {
    //Code to add the track to queue
  }

  function handlerEdit() {
    //Code to edit the track
  }

  function handlerDelete() {
    //Code to delete the track
  }

  function handlerShare() {
    //Code to share the track
  }

  return (
    <>
      <div onMouseDown={closeDialogue} className="back-context"></div>
      <div ref={dialogueBox} className="dialogue-box">
        <ul className="dialogue-list">
          <li className="dialogue-item" onClick={handlerAddToQueue}>
            Add to queue
          </li>
          <li className="dialogue-item" onClick={handlerShare}>
            Share
          </li>
          {isOwner ? (
            <>
              <li className="dialogue-item" onClick={handlerEdit}>
                Edit
              </li>
              <li className="dialogue-item" onClick={handlerDelete}>
                Delete
              </li>
            </>
          ) : (
            <>
              <li className="dialogue-item-disabled">Edit</li>
              <li className="dialogue-item-disabled">Delete</li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default DialogueBox;
