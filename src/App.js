import React from "react";
import "./styles.css";
import { Title } from "./components/Title";
import { SeachButton } from "./components/SeachButton";
import { DropDown } from "./components/DropDown";

export const App = () => {
  return (
    <>
      <Title />
      <DropDown />
      <SeachButton />
      <div class="titleBlock">今日の天気</div>
      <div id="kyo" class="weatherBlock"></div>
      <div class="titleBlock">明日の天気</div>
      <div id="asu" class="weatherBlock"></div>
      <div class="titleBlock">明後日の天気</div>
      <div id="asatte" class="weatherBlock"></div>
    </>
  );
};
