import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

const Sidebar = (props: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cx("wrapper")}>
      {props.category.map((element: any, index: number) => {
        const handleOnClick = () => {
          setOpenIndex(openIndex === index ? null : index);
        };
        const { name, href } = element.item;
        const subItem = element?.subItem;

        return (
          <div key={index} className={cx("container")}>
            <div className={cx("item")}>
              <a href={href}>
                <div className={cx("name")}>{name}</div>
              </a>
              <div
                onClick={handleOnClick}
                style={
                  openIndex === index
                    ? { transform: "rotate(0deg)" }
                    : { transform: "rotate(180deg)" }
                }
                className={cx("icon")}
              >
                <picture>
                  <img
                    className={cx("image")}
                    width={20}
                    height={20}
                    src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
                    alt="icon"
                  />
                </picture>
              </div>
            </div>
            {openIndex === index && (
              <div className={cx("sub-item")}>
                {subItem != undefined &&
                  subItem.map((item: any, index: number) => (
                    <div key={index} className={cx("content")}>
                      <a href={item.href}>{item.name}</a>
                    </div>
                  ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
