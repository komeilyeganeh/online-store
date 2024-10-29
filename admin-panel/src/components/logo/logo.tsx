import { Button } from "@components";
import LogoImg from "../../assets/images/logo.webp";

export const Logo: React.FC = () => {
  // ---- jsx return ----
  return (
    <div>
      <Button as="link" href="/">
        <img src={LogoImg} alt="logo image" />
      </Button>
    </div>
  );
};
