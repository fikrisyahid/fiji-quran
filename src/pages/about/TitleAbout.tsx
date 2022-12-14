import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

interface TitleAboutProps {
  title: string;
};

const TitleAbout = ({ title }: TitleAboutProps) => {
  return (
    <>
      <Typography
        sx={{ marginTop: "50px", color: "#68B984", fontWeight: "bold" }}
        align="center"
        variant="h4"
      >
        {title}
      </Typography>
      <Divider variant="middle" />
    </>
  );
};

export default TitleAbout;
