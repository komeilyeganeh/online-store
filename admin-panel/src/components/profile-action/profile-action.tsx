import { Link } from "react-router-dom";
import AvatarImg from "../../assets/images/avatar.png";
import classes from "./profile-action.module.css";
import { FaUser } from "react-icons/fa";
import { IoMdSettings, IoMdLogOut } from "react-icons/io";
import { useTranslation } from "react-i18next";

export const ProfileAction: React.FC = () => {
  // ---- hooks ----
  const { t } = useTranslation();
  // ---- jsx return ----
  return (
    <div className={classes.profile__action_wrapper}>
      <div className={classes.profile__action_img}>
        <img src={AvatarImg} alt="profile image" />
      </div>
      <div className={classes.profile__action_links}>
        <ul>
          <li>
            <Link to="/"><FaUser size={17}/>{t("profile.profile")}</Link>
          </li>
          <li>
            <Link to="/"><IoMdSettings size={20}/>{t("profile.settings")}</Link>
          </li>
          <li>
            <Link to="/"><IoMdLogOut size={22}/>{t("profile.logout")}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
