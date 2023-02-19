import React from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";

import { CgShoppingBag } from "react-icons/cg";
const header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" className={css.img} />
        <span className={css.text}>Ecom</span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        </div>
        <input type="text" className={css.search} placeholder="Search" />
        <span>
          <CgShoppingBag className={css.cart} />
        </span>
      </div>
    </div>
  );
};

export default header;
