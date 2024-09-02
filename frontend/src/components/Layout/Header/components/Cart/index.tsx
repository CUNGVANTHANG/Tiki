import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { showModal } from "~/redux/features/modal.slice";
import { RootState } from "~/redux/store/";
import { useDispatch, useSelector } from "react-redux";

const cx = classNames.bind(styles);

const Cart = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleShowModal = () => {
    if (isLoggedIn) {
      return;
    }
    dispatch(showModal());
  };

  return (
    <div onClick={handleShowModal} className={cx("header__cart")}>
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
