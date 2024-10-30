import IranImg from "../../assets/images/flags/iran.png";
import UnitedKingdomImg from "../../assets/images/flags/united-kingdom.png";
import { useLng } from "../../zustand/stores/language/language";
import classes from "./language.module.css";

export const Language: React.FC = () => {
  // ---- hooks ----
  const { lng, setLng } = useLng();

  // ---- jsx return ----
  return (
    <div className={classes.language__wrapper}>
      <img
        src={lng === "fa" ? IranImg : UnitedKingdomImg}
        alt="flag image"
        className={classes.language__active_img}
      />
      <div className={classes.languages__list}>
        <div onClick={() => setLng("fa")}>
          <img src={IranImg} alt="flag image" />
          <p>FA</p>
        </div>
        <div onClick={() => setLng("en")}>
          <img src={UnitedKingdomImg} alt="flag image" />
          <p>EN</p>
        </div>
      </div>
    </div>
  );
};
