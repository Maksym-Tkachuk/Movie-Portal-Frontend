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
import Loader from "../../../Elements/Loader/Loader";
import ProfileMenu from "./ProfileMenu";

const Profile: FC = () => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const { admin, userName } = useSelector(
    (state: AppStateType) => state.auth.user
  );
  const profile = useTypedSelector((state) => state.profile);
  const { loading } = useTypedSelector((state) => state.profile);

  const fileUploadHandler = async (event: any) => {
    dispatch(userAvatar(event.target.files[0]));
  };

  return (
    <div className={style.profile}>
      {admin && (
        <div className="AddToPhotosIcon">
          <AddToPhotosIcon
            className={style.iconUpdate}
            onClick={() => router("/Changes-Films")}
            style={{ marginRight: "20px", cursor: "pointer" }}
          />
        </div>
      )}
      <div className={style.profile__userName}>{userName}</div>
      <div className={style.profile__avatar}>
        <div className={style.avatar}>
          <input accept="image/*" onChange={(e) => {fileUploadHandler(e);}} className={style.download} type="file"
          />
          {loading ? (
            <Loader />
          ) : (
            <img src={profile.userAvatar ? profile.userAvatar : avatar}  alt="avatar" />
          )}
          <ProfileMenu />
        </div>
      </div>
      <div onClick={() => dispatch(logout())} className={style.buttonProfile}>
        <ButtonSquare text="logout" />
      </div>
    </div>
  );
};

export default Profile;
