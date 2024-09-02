import classNames from "classnames/bind";
import styles from "./GridBanner.module.scss";
import Sliders from "../Slider";

const cx = classNames.bind(styles);

const dataFake = [
  {
    image:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/9f/6a/ca/99261b67ab3929f47a3d057b5614d6eb.jpg.webp",
    alt: "datafake",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/9b/91/b3/c08929ca2a2e7939284d690333fc63dd.jpg.webp",
    alt: "datafake",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/2e/61/05/898865329c843c168fa05bcd13042a04.jpg.webp",
    alt: "datafake",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/10/a4/4f/936a5dd3b98b9d19430e397eaeaf9177.png.webp",
    alt: "datafake",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/e6/be/5a/6cc4ed0287f69c6a9286f12247073463.jpg.webp",
    alt: "datafake",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/2e/13/d7/fb389532d5fd41dbfe124d928992ca24.jpg.webp",
    alt: "datafake",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/11/14/b8/96964ac6e9d70b9f57702507a0936fd2.jpg.webp",
    alt: "datafake",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/97/b8/b2/6834df96c7f9e00194d57cc80a2596e9.jpg.webp",
    alt: "datafake",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/c7/f9/07/ea00916d7910703e6236f603374b08df.jpg.webp",
    alt: "datafake",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/8c/08/c7/694236b009494d3621e6a0582a88f23a.jpg.webp",
    alt: "datafake",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/8a/92/9b/d6c6831dc56e61571257f7560a30e123.jpg.webp",
    alt: "datafake",
  },
  {
    image:
      "https://salt.tikicdn.com/cache/w280/ts/tikimsp/7f/0b/3e/e68df3759aa2b34dd5b49cea4593d5ad.jpg.webp",
    alt: "datafake",
  },
];

const GridBanner = () => {
  return (
    <div className={cx("wrapper")}>
      <Sliders grid="true">
        <div className={cx("grid")}>
          {dataFake.map((item, index) => (
            <div>
              <a className={cx("item")} href="/">
                <picture>
                  <img
                    className={cx("item-image")}
                    src={item.image}
                    alt={item.alt}
                  />
                </picture>
              </a>
            </div>
          ))}
        </div>
      </Sliders>
    </div>
  );
};

export default GridBanner;
