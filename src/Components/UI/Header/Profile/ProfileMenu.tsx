import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router";
import { logout } from "../../../../Redux/auth-reducer";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import avatar from "../../../../img/ProfileImg/1icon.jpg";
import { FC, useState } from "react";
import style from "./Profile.module.scss";
import { userAvatar } from "../../../../Redux/profile-reducer";
import "./Profile.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ProfileMenu:FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useNavigate();
  const dispatch = useDispatch();
  const profile = useTypedSelector((state) => state.profile);
  const { user } = useTypedSelector((state) => state.auth);
  const fileUploadHandler = (event: any) => {
    dispatch(userAvatar(event.target.files[0]));
  };

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={style.profileMenu}>
      <IconButton onClick={handleClick}>
        <Avatar sx={{ width: 32, height: 32 }}>
          <img
            src={profile.userAvatar ? profile.userAvatar : avatar}
            alt="avatar"
          />
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
      >
        {user.admin && (
          <MenuItem onClick={() => router("/Changes-Films")}>
            <ListItemIcon>
              <AddToPhotosIcon
                style={{ marginRight: "20px", cursor: "pointer" }}
              />
            </ListItemIcon>
            Добавить фильм
          </MenuItem>
        )}
        <MenuItem onClick={() => dispatch(logout())}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        <MenuItem onClick={(e) => e.stopPropagation()}>
          <ListItemIcon>
            <AddCircleIcon fontSize="small" />
          </ListItemIcon>
          <input
            accept="image/*"
            onChange={(e) => {
              fileUploadHandler(e);
            }}
            className={style.download + " " + style.downloadWindow}
            type="file"
          />
          Сменить аватарку
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
