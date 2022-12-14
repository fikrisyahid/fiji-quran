import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

interface MainCardProps {
  children: ReactNode;
  center?: boolean;
  bg?: string;
  sx?: SxProps<Theme> | undefined;
  padding?: number;
  gap?: number;
  wrap?: boolean;
  direction?: "row" | "column";
  transparent?: boolean;
}

export default function MainCard({
  children,
  center,
  bg,
  sx,
  padding,
  gap,
  wrap,
  direction,
  transparent,
}: MainCardProps) {
  return (
    <Box
      display="flex"
      flexDirection={direction || "column"}
      alignItems={center && direction !== "row" ? "center" : "normal"}
      justifyContent={center && direction === "row" ? "center" : "normal"}
      flexWrap={wrap ? "wrap" : "nowrap"}
      gap={gap || 0}
      sx={{
        padding: padding || 2,
        backgroundColor: transparent ? "transparent" : "white",
        backgroundImage: bg ? `url(${bg})` : null,
        backgroundSize: bg ? "cover" : "",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
