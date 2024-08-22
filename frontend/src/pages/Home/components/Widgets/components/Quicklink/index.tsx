import classNames from "classnames/bind";
import styles from "./Quicklink.module.scss";
import React from "react";

const cx = classNames.bind(styles);

const quicklinks = [
  {
    title: "TOP DEAL",
    href: "/",
    image:
      "https://salt.tikicdn.com/ts/upload/2f/52/8e/00ab5fbea9d35fcc3cadbc28d7c6b14e.png",
  },
  {
    title: "Tiki Trading",
    href: "/",
    image:
      "https://salt.tikicdn.com/ts/upload/72/8d/23/a810d76829d245ddd87459150cb6bc77.png",
  },
  {
    title: "Coupon siêu hot",
    href: "/",
    image:
      "https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png",
  },
  {
    title: "Xả kho giảm nửa giá",
    href: "/",
    image:
      "https://salt.tikicdn.com/ts/upload/a5/d8/06/cb6ff520f12973013c81a8b14ad5e5b3.png",
  },
  {
    title: "Hàng ngoại giá hot",
    href: "/",
    image:
      "https://salt.tikicdn.com/ts/upload/cf/46/d1/e474a9eb803909a59927600ee64ddd4f.png",
  },
  {
    title: "Cùng mẹ chăm bé",
    href: "/",
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/upload/d7/b9/cf/185c3ea4d118574d7927f3d191575445.jpg.webp",
  },
  {
    title: "Mọt sách Tiki",
    href: "/",
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/upload/28/52/b2/e77e55676a38e02c5ac7242cc43f46dc.jpg.webp",
  },
  {
    title: "Thế giới công nghệ",
    href: "/",
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/upload/25/a7/1f/5538b19e95600da86e1241082fb631bf.jpg.webp",
  },
  {
    title: "Yêu bếp nghiệp nhà",
    href: "/",
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/upload/03/f9/44/343e3b73c1e600e3c16b97843dc04bb1.jpg.webp",
  },
  {
    title: "Khỏe đẹp toàn diện",
    href: "/",
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/upload/ea/d3/81/a4ed0166b6abb19c3cfa3a48fadafd02.jpg.webp",
  },
];

const Quicklink = () => {
  return (
    <div className={cx("quicklinks")}>
      <div className={cx("wrapper")}>
        {quicklinks.map((quicklink, index) => (
          <React.Fragment key={index}>
            <div className={cx("quicklink")}>
              <a href={quicklink.href}>
                <div className={cx("quicklink__icon")}>
                  <picture>
                    <img
                      className={cx("icon")}
                      src={quicklink.image}
                      alt={quicklink.title}
                    />
                  </picture>
                </div>
                <div
                  style={index === 0 ? { color: "rgb(217, 56, 67)" } : {}}
                  className={cx("title")}
                >
                  {quicklink.title}
                </div>
              </a>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Quicklink;
