import classNames from "classnames/bind";
import styles from "./Brand.module.scss";
import Brands from "./components/Brands";
import Sliders from "../Slider";

const cx = classNames.bind(styles);

const dataFake = (
  <>
    <Brands
      brandImage="https://salt.tikicdn.com/ts/tikimsp/4d/4e/3a/ee64e61b43eb373305dc86aa0d19567f.png"
      altBrandImage="brand1"
    />
    <Brands
      brandImage="https://salt.tikicdn.com/ts/tikimsp/4d/4e/3a/ee64e61b43eb373305dc86aa0d19567f.png"
      altBrandImage="brand1"
    />
    <Brands
      brandImage="https://salt.tikicdn.com/ts/tikimsp/4d/4e/3a/ee64e61b43eb373305dc86aa0d19567f.png"
      altBrandImage="brand1"
    />
    <Brands
      brandImage="https://salt.tikicdn.com/ts/tikimsp/4d/4e/3a/ee64e61b43eb373305dc86aa0d19567f.png"
      altBrandImage="brand1"
    />
    <Brands
      brandImage="https://salt.tikicdn.com/ts/tikimsp/4d/4e/3a/ee64e61b43eb373305dc86aa0d19567f.png"
      altBrandImage="brand1"
    />
    <Brands
      brandImage="https://salt.tikicdn.com/ts/tikimsp/4d/4e/3a/ee64e61b43eb373305dc86aa0d19567f.png"
      altBrandImage="brand1"
    />
  </>
);

interface BrandProps {
  brands: any[];
}

const Brand = ({ brands }: BrandProps) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>Thương hiệu chính hãng</div>
      <Sliders gap="16px">
        {brands.length > 0
          ? brands.map((brand) => (
              <Brands key={brand.id} brandImage={brand.thumbnail} />
            ))
          : dataFake}
      </Sliders>
    </div>
  );
};

export default Brand;
