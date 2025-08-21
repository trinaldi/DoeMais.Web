import logoImg from "@/assets/logo.png";
import { Typography } from "@mui/material";

interface LogoProps {
  width?: number | string;
  height?: number | string;
  text?: boolean;
}

export default function Logo({
  width = 92,
  height = 70,
  text = false,
}: LogoProps) {
  return (
    <>
      <img
        src={logoImg}
        alt="DoeMais Logo"
        style={{ width, height, objectFit: "contain" }}
      />
      {text && <Typography variant="caption">DoeMais</Typography>}
    </>
  );
}
