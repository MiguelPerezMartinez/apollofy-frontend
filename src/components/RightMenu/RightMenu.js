import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./styles.css";

import { logOut } from "../../services/firebase";

//Components
import { Row, Col } from "react-bootstrap";

//Icons
import { HomeOutlined, CloudUpload, SearchOutlined } from "@material-ui/icons";

import ProfileCircleIcon from "../ProfileCircleIcon";

export default function RightMenu({ handleOpenModal, handleCloseModal }) {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const { username, profileImg } = useSelector(
    (state) => state.userReducer.data,
  );

  return (
    <aside className="right-menu">
      <div>
        <Link to="/profile" className="right-menu-row">
          <ProfileCircleIcon profileImg={profileImg} />
          <div className="right-menu-row-title">Welcome {username}</div>
        </Link>
      </div>

      <div
        onClick={() => {
          isUploadModalOpen
            ? handleCloseModal() && setIsUploadModalOpen(false)
            : handleOpenModal() && setIsUploadModalOpen(true);
        }}
      >
        <div className="right-menu-row">
          <CloudUpload fontSize="large" />
          <div className="right-menu-row-title">Upload song</div>
        </div>
      </div>
      <div className="xl-separator" />
      <div>
        <div className="right-menu-row no-hover">
          <SearchOutlined fontSize="large" />
          <div className="right-menu-row-title">
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div>
        <Link to="/" className="right-menu-row">
          <HomeOutlined fontSize="large" />
          <div className="right-menu-row-title">Home</div>
        </Link>
      </div>
      <div onClick={logOut} className="right-menu-logout">
        <div className="right-menu-row">
          <img
            src="./assets/img/logout.svg"
            alt="logout"
            className="right-menu-icon"
          />
          <div className="right-menu-row-title">Logout</div>
        </div>
      </div>
    </aside>
  );
}
