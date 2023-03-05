import React from "react";
import css from "./Virtual.module.css";
import Shade from "../../assets/shade.png";
import after from "../../assets/after.png";
import before from "../../assets/before.png";

import ReactCompareImage from "react-compare-image";
const Virtual = () => {
  return (
    <div className={css.v_container}>
      <div className={css.left}>
        <span>VIRTUAL TRY-ON</span>

        <span>
          Seedily say has subtitle disposal and boy. Exercise joy man chill
        </span>
        <span>Try Now!</span>
        <img src={Shade} alt="" />
      </div>
      <div className={css.right}>
        <ReactCompareImage leftImage={before} rightImage={after} />
      </div>
    </div>
  );
};

export default Virtual;
