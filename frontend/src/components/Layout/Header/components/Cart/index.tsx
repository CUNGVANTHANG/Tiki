import classNames from "classnames/bind";
import styles from "./Cart.module.scss";

const cx = classNames.bind(styles);

const Cart = () => {
  return (
    <div className={cx("header__cart")}>
      <a href="#">
        <div className={cx("cart-item")}>
          <div className={cx("cart-wrapper")}>
            <img
              className={cx("cart-icon")}
              src="../images/cart.png"
              alt="Cart"
            />
            <span className={cx("cart-number")}>0</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Cart;
