import React, { useState } from "react";
import { useSelector } from "react-redux";

import RightMenu from "../components/RightMenu";
import BottomMenu from "../components/BottomMenu";
import ModalTrackUp from "../components/ModalTrackUp";
import DialogueBox from "../components/DialogueBox";

function BarsAndModal(WrappedComponent) {
  function WrapperComponent() {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);

    const dialogueHandler = useSelector((state) => state.dialogueHandler);

    return (
      <>
        <BottomMenu
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
        <RightMenu
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
        {dialogueHandler.active && <DialogueBox />}
        {showModal && <ModalTrackUp handleClose={handleCloseModal} />}
        <WrappedComponent />
      </>
    );
  }

  return WrapperComponent;
}

export default BarsAndModal;
