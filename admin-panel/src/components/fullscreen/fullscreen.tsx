import { useState } from "react";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import classes from "./fullscreen.module.css";

export const FullScreen: React.FC = () => {
  // ---- hooks ----
  const [isFullscreen, setIsFullscreen] = useState(false);
  // ---- jsx return ----
  return isFullscreen ? (
    <MdFullscreenExit
      size={30}
      onClick={() => setIsFullscreen(false)}
      className={classes.fullscreen__icon}
    />
  ) : (
    <MdFullscreen
      size={30}
      onClick={() => setIsFullscreen(true)}
      className={classes.fullscreen__icon}
    />
  );
};
