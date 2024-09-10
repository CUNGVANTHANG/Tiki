import CustomFooter from "~/components/Layout/Footer";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import BreadCrumb from "~/components/BreadCrumb";
import { useLocation } from "react-router-dom";
import Filter from "~/components/Filter";
import { ProductSearch } from "~/components/Product";
import { useEffect, useState } from "react";
import { getAllProductsByName } from "~/services/products";
import { AdsType_1, AdsType_2, AdsType_3 } from "~/components/Ads";

const cx = classNames.bind(styles);

const dataFake = [
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    textBadge: "9.9",
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: "",
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    deliveryInfo: "Giao chủ nhật, 08/09",
    promotion: "",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 18310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textPromotion: "Giảm 10K",
    promotion: [
      "https://salt.tikicdn.com/cache/128x128/ts/product/39/19/a7/160e21c7b8cffa5d042302b46f47facc.jpg",
      "	https://salt.tikicdn.com/cache/128x128/ts/product/e3/23/76/9fa5796a74db107d038928d44f342c23.jpg",
    ],
    deliveryInfo: "Giao chủ nhật, 08/09",
    carrier:
      "https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png",
  },
  {
    thumbnail:
      "https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg.webp",
    ads: true,
    frameBadge:
      "https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png",
    price: 28310000,
    discount: 18,
    provider: "SAMSUNG",
    name: "Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng",
    rating: 5,
    sold: 856,
    textBox: ["3 Màu", "1 Kích cỡ"],
    promotion: [
      "https://salt.tikicdn.com/cache/128x128/ts/product/39/19/a7/160e21c7b8cffa5d042302b46f47facc.jpg",
      "	https://salt.tikicdn.com/cache/128x128/ts/product/e3/23/76/9fa5796a74db107d038928d44f342c23.jpg",
    ],
    deliveryInfo: "Giao chủ nhật, 08/09",
  },
];

const Search = () => {
  const filter = [
    { name: "ROM", options: ["128GB", "256GB", "64GB", "32GB", "16GB"] },
    {
      name: "Thương hiệu",
      options: ["Samsung", "Xiaomi", "OPPO", "Vivo", "Nokia"],
    },
    {
      name: "Camera sau",
      options: [
        "Trên 16MP",
        "Từ 11MP đến 13MP",
        "Từ 14MP đến 16MP",
        "Dưới 8MP",
        "Từ 8MP đến 10MP",
      ],
    },
  ];
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("q") || "";
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getAllProductsByName(paramValue);
        setProducts(products);
        console.log("Fetched products:", products);
      } catch (error) {
        console.error("Error during form submission:", error);
      }
    };
    if (paramValue) {
      fetchData();
    }
  }, [paramValue]);

  return (
    <>
      <BreadCrumb route={`Kết quả tìm kiếm "${paramValue}"`} />
      <div className={cx("container")}>
        <div className={cx("main-container")}>
          <Filter filter={filter} />
          <div className={cx("products")}>
            <div className={cx("products-wrapper")}>
              {products.length > 0
                ? products.map((item: any, index: number) => {
                    if (index > 46) {
                      return;
                    }
                    console.log(item);

                    return (
                      <ProductSearch
                        key={index}
                        thumbnail={item.thumbnail}
                        ads={item.ads}
                        frameBadge={item.frameBadge}
                        textBadge={item.textBadge}
                        price={item.price}
                        discount={item.discount}
                        name={item.name}
                        provider={item.provider}
                        stars={item.rating}
                        sold={item.sold}
                        textBox={item.textBox}
                        promotion={item.promotion}
                        deliveryInfo={item.deliveryInfo}
                        carrier={item.carrier}
                        textPromotion={item.textPromotion}
                      />
                    );
                  })
                : dataFake.map((item, index) => {
                    if (index > 46) {
                      return;
                    }
                    return (
                      <ProductSearch
                        key={index}
                        thumbnail={item.thumbnail}
                        ads={item.ads}
                        frameBadge={item.frameBadge}
                        price={item.price}
                        discount={item.discount}
                        name={item.name}
                        textBadge={item.textBadge}
                        provider={item.provider}
                        stars={item.rating}
                        sold={item.sold}
                        textBox={item.textBox}
                        promotion={item.promotion}
                        deliveryInfo={item.deliveryInfo}
                        carrier={item.carrier}
                        textPromotion={item.textPromotion}
                      />
                    );
                  })}
            </div>
            <div className={cx("pagination-wrapper")}>
              <div className={cx("pagination-block")}>
                <div>
                  <a className={cx("arrow", "disabled")}>
                    <picture style={{ lineHeight: 0 }}>
                      <img
                        src="	https://salt.tikicdn.com/ts/upload/65/08/c2/b59e26d5d9421026628efbd19144159a.png"
                        alt="arrow-left"
                      />
                    </picture>
                  </a>
                </div>
                <ul>
                  <li>
                    <a className={cx("current")}>1</a>
                  </li>
                  <li>
                    <a>2</a>
                  </li>
                  <li>
                    <a>3</a>
                  </li>
                  <li>
                    <a>4</a>
                  </li>
                  <li>
                    <a>5</a>
                  </li>
                  <li>
                    <a className={cx("hidden-page")}>
                      <img
                        src="	https://salt.tikicdn.com/ts/brickv2og/c5/f9/d0/b4e49aa9576a35e347fbdeec0df9e350.png"
                        alt="hidden-page"
                      />
                    </a>
                  </li>
                  <li>
                    <a>50</a>
                  </li>
                </ul>
                <div>
                  <a className={cx("arrow")}>
                    <picture style={{ lineHeight: 0 }}>
                      <img
                        src="https://salt.tikicdn.com/ts/upload/5b/86/17/6c9551f367089bcd8a75640872fb3559.png"
                        alt="arrow-right"
                      />
                    </picture>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("right-container")}>
          <AdsType_1 image="https://salt.tikicdn.com/ts/tka/7f/a7/e7/68158a39a3cea74e0ea1408268fd85f4.png" />
          <AdsType_2
            name="Điện thoại Samsung Galaxy Z Fold6, 512GB, điện thoại AI, màn hình cực đại 7.6, mỏng nhẹ nhất - Hàng chính hãng - Xanh Navy"
            image="https://salt.tikicdn.com/cache/280x280/ts/product/56/70/a6/e08b592083a5642ffe5d1242734a2a31.png.webp"
            seller="Tiki Trading"
            price="41000000"
          />
          <AdsType_2
            name="Điện thoại Samsung Galaxy Z Fold6, 256GB, điện thoại AI, màn hình cực đại 7.6, mỏng nhẹ nhất - Hàng chính hãng - Hồng Đào"
            image="https://salt.tikicdn.com/cache/280x280/ts/product/49/62/1b/45cffd8517eec573775f07503102cf03.jpg.webp"
            seller="Tiki Trading"
            price="41000000"
            discount="8"
            numberRating="5"
            sold="856"
          />
        </div>
      </div>
      <div className={cx("listing-grid")}>
        <AdsType_3 image="https://salt.tikicdn.com/ts/tka/32/6f/30/8baedd6fb6046ffc0b0ad13587be9b9a.png" />
        <AdsType_3 image="https://salt.tikicdn.com/ts/tka/ee/c2/7f/3eee93e81abb380c7ff75a8fa3eaae79.jpg" />
      </div>
      <CustomFooter />
    </>
  );
};

export default Search;
