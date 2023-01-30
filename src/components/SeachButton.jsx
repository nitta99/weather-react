import React from "react";
import { GetWeather } from "./GetWeather";

export const SeachButton = () => {
  return (
    <>
      <input type="button" value="検索" onClick={GetWeather} />
    </>
  );
};
