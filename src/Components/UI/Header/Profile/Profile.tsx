import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userAvatar } from "../../../../Redux/profile-reducer";
import { AppStateType } from "../../../../Redux/store";
import { ButtonSquare } from "../../../Elements/Button/ButtonSquare";
import style from "./Profile.module.scss";
import avatar from "../../../../img/ProfileImg/1icon.jpg";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { useNavigate } from "react-router";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { FC } from "react";
import { logout } from "../../../../Redux/auth-reducer";
import { getBase64 } from "../../UploadFilms/UploadFile/UploadFile";
import Loader from "../../../Elements/Loader/Loader";


const Profile: FC = () => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const { admin, userName } = useSelector( (state: AppStateType) => state.auth.user);
  const profile = useTypedSelector(state=>state.profile)
  const { errorRegistration } = useTypedSelector((state) => state.auth);

  const fileUploadHandler = async (event: any) => {
    const file: any = await getBase64(event.target.files[0]);
    dispatch(userAvatar(event.target.files[0]))
  };


  return (
    <div className={style.profile}>
      {admin && (
        <AddToPhotosIcon
          onClick={() => router("/Changes-Films")}
          style={{ marginRight: "20px", cursor: "pointer" }}
        />
      )}
      <div className={style.profile__userName}>{userName}</div>
      <div className={style.profile__avatar}>
        <div className={style.avatar}>
          <input
            accept="image/*"
            onChange={(e) => {
              fileUploadHandler(e);
            }}
            className={style.download}
            type="file"
          />
{  errorRegistration?<Loader/>: <img
            src={profile.userAvatar ? profile.userAvatar : avatar}
            alt="avatar"
          />}
        </div>
      </div>
      <div
        onClick={() => {
          dispatch(logout());
        }}
      >
        <ButtonSquare text="logout" />
      </div>
    </div>
  );
};

export default Profile;
