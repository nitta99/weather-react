import React from "react";
import { GetWeather } from "./GetWeather";
import { Button as MUIButton } from "@mui/material";

export const SeachButton = () => {
  return (
    <MUIButton
      variant="contained"
      size="small"
      sx={{ marginLeft: 1 }}
      onClick={GetWeather}
      type="submit"
    >
      検索
    </MUIButton>
  );
};
