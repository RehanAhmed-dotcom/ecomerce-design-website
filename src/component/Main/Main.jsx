import React from "react";
import css from "./Main.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
const Main = () => {
  return (
    <div className={css.container}>
      <div className={css.first_last}>
        <span className={css.text1}>Skin Protection cream</span>
        <div className={css.top}>
          <span>Trendy Collection</span>
          <span>
            Seedily say has subtitle disposal and boy. Exercise joy man chill
          </span>
        </div>
      </div>
      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
        <img src={HeroImg} alt="" width={600} />
        <div className={css.cart2}>
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className={css.first_last}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Trafic</span>
        </div>
        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
