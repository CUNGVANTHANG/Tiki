import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

const category = [
  {
    title: "Nhà Sách Tiki",
    href: "/nha-sach-tiki",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png.webp",
  },
  {
    title: "Nhà Cửa - Đời Sống",
    href: "/nha-cua-doi-song",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png.webp",
  },
  {
    title: "Điện Thoại - Máy Tính Bảng",
    href: "/dien-thoai-may-tinh-bang",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp",
  },
  {
    title: "Đồ Chơi - Mẹ & Bé",
    href: "/do-choi-me-be",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp",
  },
  {
    title: "Thiết Bị Số - Phụ Kiện Số",
    href: "/thiet-bi-so-phu-kien-so",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/75/34/29/78e428fdd90408587181005f5cc3de32.png.webp",
  },
  {
    title: "Điện Gia Dụng",
    href: "/dien-gia-dung",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png.webp",
  },
  {
    title: "Làm Đẹp - Sức Khỏe",
    href: "/lam-dep-suc-khoe",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/bf5095601d17f9971d7a08a1ffe98a42.png.webp",
  },
  {
    title: "Ô Tô - Xe Máy - Xe Đạp",
    href: "/o-to-xe-may-xe-dap",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/69/f5/36/c6cd9e2849854630ed74ff1678db8f19.png.webp",
  },
  {
    title: "Thời trang nữ",
    href: "/thoi-trang-nu",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp",
  },
  {
    title: "Bách Hóa Online",
    href: "/bach-hoa-online",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp",
  },
  {
    title: "Thể Thao - Dã Ngoại",
    href: "/the-thao-da-ngoai",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/0b/5e/3d/00941c9eb338ea62a47d5b1e042843d8.png.webp",
  },
  {
    title: "Thời trang nam",
    href: "/thoi-trang-nam",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png.webp",
  },
  {
    title: "Cross Border - Hàng Quốc Tế",
    href: "/cross-border-hang-quoc-te",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/3c/e4/99/eeee1801c838468d94af9997ec2bbe42.png.webp",
  },
  {
    title: "Laptop - Máy Vi Tính - Linh kiện",
    href: "/laptop-may-vi-tinh-linh-kien",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png.webp",
  },
  {
    title: "Giày - Dép nam",
    href: "/giay-dep-nam",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png.webp",
  },
  {
    title: "Điện Tử - Điện Lạnh",
    href: "/dien-tu-dien-lanh",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png.webp",
  },
  {
    title: "Giày - Dép nữ",
    href: "/giay-dep-nu",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/5a6b58f21fbcad0d201480c987f8defe.png.webp",
  },
  {
    title: "Máy Ảnh - Máy Quay Phim",
    href: ".may-anh-may-quay-phim",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/2d/7c/45/e4976f3fa4061ab310c11d2a1b759e5b.png.webp",
  },
  {
    title: "Phụ kiện thời trang",
    href: "/phu-kien-thoi-trang",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png.webp",
  },
  {
    title: "NGON",
    href: "/ngon",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png.webp",
  },
  {
    title: "Đồng hồ và Trang sức",
    href: "/dong-ho-va-trang-suc",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png.webp",
  },
  {
    title: "Balo và Vali",
    href: "/balo-va-vali",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png.webp",
  },
  {
    title: "Voucher - Dịch vụ",
    href: "/voucher-dich-vu",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/0a/c9/7b/8e466bdf6d4a5f5e14665ce56e58631d.png.webp",
  },
  {
    title: "Túi thời trang nữ",
    href: "/tui-thoi-trang-nu",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png.webp",
  },
  {
    title: "Túi thời trang nam",
    href: "/tui-thoi-trang-nam",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png.webp",
  },
  {
    title: "Chăm sóc nhà cửa",
    href: "/cham-soc-nha-cua",
    image: "https://salt.tikicdn.com/assets/img/image.svg",
  },
];

const utilities = [
  {
    title: "Ưu đãi thẻ, ví",
    href: "/",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png.webp",
  },
  {
    title: "Đóng tiền, nạp thẻ",
    href: "/",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/upload/4d/a3/cb/c86b6e4f17138195c026437458029d67.png.webp",
  },
  {
    title: "Mua trước trả sau",
    href: "/",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png.webp",
  },
];

const Sidebar = () => {
  return (
    <div className={cx("sidebar")}>
      <div className={cx("sidebar__listItem")}>
        <div className={cx("title")}>Danh mục</div>

        {category.map((item, index) => (
          <div key={index}>
            <div className={cx("items")}>
              <a title={item.title} href={item.href}>
                <div className={cx("item-icon")}>
                  <picture>
                    <img
                      className={cx("item-icon-element")}
                      src={item.image}
                      alt={item.title}
                    />
                  </picture>
                </div>
                <div className={cx("item-content")}>{item.title}</div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className={cx("sidebar__listItem")}>
        <div className={cx("title")}>Tiện ích</div>

        {utilities.map((item, index) => (
          <div key={index}>
            <div className={cx("items")}>
              <a title={item.title} href={item.href}>
                <div className={cx("item-icon")}>
                  <picture>
                    <img
                      className={cx("item-icon-element")}
                      src={item.image}
                      alt={item.title}
                    />
                  </picture>
                </div>
                <div className={cx("item-content")}>{item.title}</div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className={cx("sidebar__sellerTiki")}>
        <div className={cx("items")}>
          <a title="Bán hàng cùng Tiki" href="/">
            <div className={cx("item-icon")}>
              <picture>
                <img
                  className={cx("item-icon-element")}
                  src="https://salt.tikicdn.com/cache/100x100/ts/upload/08/2f/14/fd9d34a8f9c4a76902649d04ccd9bbc5.png.webp"
                  alt="Bán hàng cùng Tiki"
                />
              </picture>
            </div>
            <div className={cx("item-content")}>Bán hàng cùng Tiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
