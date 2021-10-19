import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoreVert, Favorite } from "@material-ui/icons";
import "./styles.css";

import TrackImg from "../TrackImg";

import { useDispatch, useSelector } from "react-redux";
import {
  reloadFetchAction,
  trackObjectAction,
} from "../../redux/trackData/actions";

import {
  isPlayBarDisplayedAction,
  setPositionInHistory,
} from "../../redux/trackData/actions";

import { resetPositionInHistory } from "../../services/localStorage";
//import dialogueHandlerReducer
import { showDialogue } from "../../redux/dialogueHandler/actions";

import { likeHandlerRequest } from "../../services/api/apiTrack";

import { Container, Row, Col } from "react-bootstrap";

function BlockTrack({ dataTrack, size = "small" }) {
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
      <Container
        className={"blockTrack-background blockTrack-Container-" + size}
      >
        <Row className="blockTrack-img-container" onClick={setReduxTrackData}>
          <TrackImg urlCover={dataTrack.urlCover} />
        </Row>
        <Row className="name-TrackBlock">
          <Col xs={8}>
            <p className="blockTrack-title">
              <Link to={`/track-view/${dataTrack._id}`}>
                {" "}
                {dataTrack.title}{" "}
              </Link>
            </p>
            <p className="blockTrack-author">{dataTrack.author}</p>
          </Col>
          <Col xs={3}>
            {isLiked.loaded ? (
              <Favorite
                className={isLiked.state ? "liked" : ""}
                onClick={handlerLike}
              />
            ) : (
              <Favorite className="like-disabled" />
            )}
            <MoreVert onClick={openDialogue} />
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <>
        <Container
          className={"blockTrack-Container-" + size + " is-loading-component"}
        />
      </>
    );
  }

  // return (
  //   <Container className={"blockTrack-background blockTrack-Container-" + size}>
  //     <Row className="blockTrack-img-container" onClick={setReduxTrackData}>
  //       <TrackImg urlCover={dataTrack.urlCover} />
  //     </Row>
  //     <Row className="name-TrackBlock">
  //       <Col xs={8}>
  //         <p className="blockTrack-title">{dataTrack.title}</p>
  //         <p className="blockTrack-author">{dataTrack.author}</p>
  //       </Col>
  //       <Col xs={3}>
  //         <FavButton />
  //       </Col>
  //     </Row>
  //   </Container>
  // );
}

export default BlockTrack;
