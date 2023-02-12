import React from "react";
import "./styles.css";
import { Title } from "./components/Title";
import { SeachButton } from "./components/SeachButton";
import { useForm } from "react-hook-form";

export const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <Title />
      <form onSubmit={handleSubmit(onSubmit)}>
        <select id="area" name="area" {...register("to", { required: true })}>
          <option value="" hidden>
            選択してください
          </option>
          <option value="011000">宗谷地方</option>
          <option value="012000">上川・留萌地方</option>
          <option value="016000">石狩・空知・後志地方</option>
          <option value="013000">網走・北見・紋別地方</option>
          <option value="014100">釧路・根室地方</option>
          <option value="015000">胆振・日高地方</option>
          <option value="017000">渡島・檜山地方</option>
          <option value="020000">青森県</option>
          <option value="050000">秋田県</option>
          <option value="030000">岩手県</option>
          <option value="040000">宮城県</option>
          <option value="060000">山形県</option>
          <option value="070000">福島県</option>
          <option value="080000">茨城県</option>
          <option value="090000">栃木県</option>
          <option value="100000">群馬県</option>
          <option value="110000">埼玉県</option>
          <option value="130000">東京都</option>
          <option value="120000">千葉県</option>
          <option value="140000">神奈川県</option>
          <option value="200000">長野県</option>
          <option value="190000">山梨県</option>
          <option value="220000">静岡県</option>
          <option value="230000">愛知県</option>
          <option value="210000">岐阜県</option>
          <option value="240000">三重県</option>
          <option value="150000">新潟県</option>
          <option value="160000">富山県</option>
          <option value="170000">石川県</option>
          <option value="180000">福井県</option>
          <option value="250000">滋賀県</option>
          <option value="260000">京都府</option>
          <option value="270000">大阪府</option>
          <option value="280000">兵庫県</option>
          <option value="290000">奈良県</option>
          <option value="300000">和歌山県</option>
          <option value="330000">岡山県</option>
          <option value="340000">広島県</option>
          <option value="320000">島根県</option>
          <option value="310000">鳥取県</option>
          <option value="360000">徳島県</option>
          <option value="370000">香川県</option>
          <option value="380000">愛媛県</option>
          <option value="390000">高知県</option>
          <option value="350000">山口県</option>
          <option value="400000">福岡県</option>
          <option value="440000">大分県</option>
          <option value="420000">長崎県</option>
          <option value="410000">佐賀県</option>
          <option value="430000">熊本県</option>
          <option value="450000">宮崎県</option>
          <option value="460100">鹿児島県</option>
          <option value="471000">沖縄本島地方</option>
          <option value="472000">大東島地方</option>
          <option value="473000">宮古島地方</option>
          <option value="474000">八重山地方</option>
        </select>
        <SeachButton />
        {errors.to && <p>エリアを指定してください</p>}
      </form>{" "}
      <div class="titleBlock">今日の天気</div>
      <div id="kyo" class="weatherBlock"></div>
      <div class="titleBlock">明日の天気</div>
      <div id="asu" class="weatherBlock"></div>
      <div class="titleBlock">明後日の天気</div>
      <div id="asatte" class="weatherBlock"></div>
    </>
  );
};
