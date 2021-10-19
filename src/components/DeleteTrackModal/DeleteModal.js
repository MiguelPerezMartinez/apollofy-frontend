import "./style.css";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteTrack } from "../../services/api";
import { reloadFetchAction } from "../../redux/trackData/actions";
import { setDeleteTrackModal } from "../../redux/modalsHandler/actions";

function DeleteModal() {
  const trackDataDialog = useSelector((state) => state.modalsHandler.data);
  const dispatch = useDispatch();
  function deleteTrackSure() {
    deleteTrack(trackDataDialog._id);

    dispatch(reloadFetchAction(true));
    dispatch(setDeleteTrackModal(false));
  }
  return (
    <>
      <div
        onClick={() => {
          dispatch(setDeleteTrackModal(false));
        }}
        className="back-context"
      ></div>
      <div className="deleteModal">
        <h2 className="delteTitle">Are you sure to delete?</h2>
        <Button title={"delete"} handleEdit={deleteTrackSure} />
      </div>
    </>
  );
}
export default DeleteModal;
