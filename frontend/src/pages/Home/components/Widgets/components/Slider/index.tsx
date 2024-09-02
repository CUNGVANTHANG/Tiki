import classNames from "classnames/bind";
import styles from "./Sliders.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

const Sliders = (props: any) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index) => index + 1);
  };

  const handlePrev = () => {
    setIndex((index) => index - 1);
  };

  return (
    <div className={cx("sliders")}>
      <span
        onClick={handlePrev}
        className={
          index > 0
            ? cx("icon", "icon-prev")
            : cx("icon", "icon-prev", "disabled")
        }
      >
        <img src="../svg/icon_prev.svg" alt="icon-prev" />
      </span>

      <div className={cx("container")}>
        {props.grid ? (
          props.children
        ) : (
          <span
            style={{
              gap: props.gap,
              transform: `translateX(calc(-1114px * ${index}))`,
            }}
            className={cx("slider")}
          >
            {props.children}
          </span>
        )}
      </div>

      <span
        onClick={handleNext}
        className={
          props.grid
            ? cx("icon", "icon-next", "disabled")
            : cx("icon", "icon-next")
        }
      >
        <img src="../svg/icon_next.svg" alt="icon-prev" />
      </span>
    </div>
  );
};

export default Sliders;
