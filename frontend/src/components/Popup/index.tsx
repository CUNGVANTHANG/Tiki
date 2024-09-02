import classNames from "classnames/bind";
import styles from "./Popup.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

const Popup = (props: any) => {
  const [isVisible, setIsVisible] = useState(props.isVisible);

  return (
    isVisible && (
      <div id={cx("wrapper")} className={cx("wrapper")}>
        <div className={cx("overlay")}></div>
        <div className={cx("content")}>
          <div className={cx("popup")}>
            <picture onMouseDown={() => setIsVisible(false)}>
              <img
                height={32}
                width={32}
                className={cx("close-icon")}
                src="https://salt.tikicdn.com/ts/upload/25/7d/61/cd84451cd9df4a2dac1ece8b291b675f.png"
                alt="close-icon"
              />
            </picture>
            <picture>
              <img
                width={382}
                className={cx("popup-image")}
                src="https://salt.tikicdn.com/ts/tikimsp/b3/fe/27/1f2d71bc6eac5b5651b67b005d6f8118.png"
                alt="popup"
              />
            </picture>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
