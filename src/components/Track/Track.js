import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { MoreHoriz, Favorite } from "@material-ui/icons";

import "./styles.css";

//import TrackReducer
import {
  isPlayBarDisplayedAction,
  trackObjectAction,
  setPositionInHistory,
  reloadFetchAction,
} from "../../redux/trackData/actions";

//import dialogueHandlerReducer
import { showDialogue } from "../../redux/dialogueHandler/actions";

//Components
import TrackImg from "../../components/TrackImg";
import { resetPositionInHistory } from "../../services/localStorage";

import { likeHandlerRequest } from "../../services/api/apiTrack";

// import DialogueBox from "../DialogueBox";

function Track({ dataTrack }) {
  const userData = useSelector((state) => state.userReducer.data);
  const dispatch = useDispatch();

  const [isLiked, setIsLiked] = useState({
    state: false,
    loaded: false,
  });

  useEffect(() => {
    if (dataTrack !== undefined) {
      const userIndex = dataTrack.totalLikes.indexOf(userData.userId);
      if (userIndex >= 0) setIsLiked({ state: true, loaded: true });
      else setIsLiked({ state: false, loaded: true });
    }
    // eslint-disable-next-line
  }, []);

  function handlerLike() {
    setIsLiked({ ...isLiked, loaded: false });
    likeHandlerRequest(userData.userId, dataTrack._id)
      .then(() => {
        setIsLiked({ state: !isLiked.state, loaded: true });
        dispatch(reloadFetchAction(true));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function setReduxTrackData() {
    dispatch(trackObjectAction(dataTrack));
    dispatch(isPlayBarDisplayedAction(true));

    const resetedHistoryPosition = resetPositionInHistory();
    dispatch(setPositionInHistory(resetedHistoryPosition));
  }

  function openDialogue(e) {
    dispatch(showDialogue(dataTrack, { x: e.clientX, y: e.clientY }));
  }

  if (dataTrack !== undefined) {
    return (
      <Row key={dataTrack._id} id={dataTrack._id} className="track-row">
        <Col xs={12}>
          <Row>
            <Col xs={2} md={2} lg={2} onClick={setReduxTrackData}>
              <div className="track-row-img-container">
                <TrackImg urlCover={dataTrack.urlCover} />
              </div>
            </Col>
            <Col xs={5} md={5} lg={5}>
              <p className="track-title">
                <Link to={`/track-view/${dataTrack._id}`}>
                  {" "}
                  {dataTrack.title}
                </Link>
              </p>
              <p className="track-author">{dataTrack.author}</p>
            </Col>
            <Col
              md={2}
              lg={2}
              className="d-none d-md-block d-lg-block track-field-centered track-album"
            >
              <p>{dataTrack.album ? dataTrack.album : dataTrack.title}</p>
            </Col>
            <Col xs={4} md={3} lg={3} className=" track-field-centered">
              <Row>
                <Col xs={4} md={4} lg={4}>
                  <p>{dataTrack.duration}</p>
                </Col>
                <Col xs={4} md={4} lg={4}>
                  {isLiked.loaded ? (
                    <Favorite
                      className={isLiked.state ? "liked" : ""}
                      onClick={handlerLike}
                    />
                  ) : (
                    <Favorite className="like-disabled" />
                  )}
                </Col>
                <Col xs={4} md={4} lg={4}>
                  <MoreHoriz onClick={openDialogue} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  } else {
    return (
      <>
        <Row className="track-row is-loading-component" />
      </>
    );
  }
}

export default Track;
