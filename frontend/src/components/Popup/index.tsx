import classNames from "classnames/bind";
import styles from "./Popup.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "~/redux/store";

const cx = classNames.bind(styles);

const AdsPopup = (props: any) => {
  const [isVisible, setIsVisible] = useState(props.isVisible);
  const banners = useSelector((state: RootState) => state.banners.items);
  const popup = banners.filter((item) => item.type === "popup");

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
                src={
                  popup[0]?.thumbnail ||
                  "https://salt.tikicdn.com/ts/tikimsp/b3/fe/27/1f2d71bc6eac5b5651b67b005d6f8118.png"
                }
                alt="popup"
              />
            </picture>
          </div>
        </div>
      </div>
    )
  );
};

// const ViewMorePopup = (props: any) => {
//   const [isVisible, setIsVisible] = useState(props.isVisible);

//   return (
//     isVisible && (
//       <div id={"popup-root"}>
//         <div className={cx("popup-content")}>
//           <div className={cx("data-list")}>
//             {props.data.map((item: any, index: number) => {
//               item.options.map((option: string, index: number) => (
//                 <button>
//                   <div>{option}</div>
//                 </button>
//               ));
//             })}
//           </div>
//           <div className={cx("bottom-bar")}></div>
//         </div>
//       </div>
//     )
//   );
// };

export { AdsPopup };
