import classNames from "classnames/bind";
import styles from "./Suggest.module.scss";
import Advertisement from "./components/Advertisement";
import { ProductOther } from "~/components/Product";
import React, { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

interface SuggestProps {
  products: any[];
}

const dataFake = (
  <>
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      width="100%"
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      adsbadge="true"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
  </>
);

const Suggest = ({ products }: SuggestProps) => {
  const [currentView, setCurrentView] = useState(35);
  const [isNearTop, setIsNearTop] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const slicedProducts = products.slice(0, currentView);
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLAnchorElement>(null);

  const handleViewMore = () => {
    setCurrentView((currentView) => currentView + 36);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerTop = headerRef.current?.getBoundingClientRect().top;

        if (headerTop <= 0) {
          setIsNearTop(true);
        } else {
          setIsNearTop(false);
        }
      }

      if (footerRef.current) {
        const footerTop = footerRef.current?.getBoundingClientRect().top;

        if (footerTop <= 150) {
          setOpacity(0);
        } else {
          setOpacity(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={headerRef} className={cx("wrapper")}>
      <div
        style={
          isNearTop
            ? { position: "fixed", paddingTop: "16px", opacity: `${opacity}` }
            : { position: "initial" }
        }
        className={cx("header")}
      >
        <h2 className={cx("title")}>Gợi ý hôm nay</h2>
        <div className={cx("tabs")}>
          <div className={cx("tab", "active")}>
            <picture>
              <img
                className={cx("tab-image")}
                src="https://salt.tikicdn.com/cache/w100/ts/ta/70/b9/49/43f25c0f4ee6b7a0d918f047e37e8c87.png.webp"
                alt="Dành cho bạn"
              />
            </picture>
            <div className={cx("tab-text")}>Dành cho bạn</div>
          </div>
          <div className={cx("tab", "false")}>
            <picture>
              <img
                className={cx("tab-image")}
                src="https://salt.tikicdn.com/cache/w100/ts/ta/12/59/f8/ef3c42e93fac779a393a5cd98a394ea6.png.webp"
                alt="Top Deal"
              />
            </picture>
            <div className={cx("tab-text")}>Top Deal</div>
          </div>
          <div className={cx("tab", "false")}>
            <picture>
              <img
                className={cx("tab-image")}
                src="https://salt.tikicdn.com/cache/w100/ts/ta/6f/41/70/90eb485e1368d259c8e94336c374ff93.png.webp"
                alt="Bánh trung thu -20%"
              />
            </picture>
            <div className={cx("tab-text")}>Bánh trung thu -20%</div>
          </div>
          <div className={cx("tab", "false")}>
            <picture>
              <img
                className={cx("tab-image")}
                src="	https://salt.tikicdn.com/cache/w100/ts/ta/37/58/02/85786ae9e80eea21104c096b6593b37d.jpg.webp"
                alt="Bánh trung thu -20%"
              />
            </picture>
            <div className={cx("tab-text")}>Sách Xả Kho - 60%</div>
          </div>
          <div className={cx("tab", "false")}>
            <picture>
              <img
                className={cx("tab-image")}
                src="	https://salt.tikicdn.com/cache/w100/ts/ta/f0/db/cd/dc286242f00373007d79073074384f45.png.webp"
                alt="Bánh trung thu -20%"
              />
            </picture>
            <div className={cx("tab-text")}>Thể thao - 50%</div>
          </div>
          <div className={cx("tab", "false")}>
            <picture>
              <img
                className={cx("tab-image")}
                src="https://salt.tikicdn.com/cache/w100/ts/ta/a3/2e/66/05032c91d5d30f4171b2642b635c1ef6.png.webp"
                alt="Bánh trung thu -20%"
              />
            </picture>
            <div className={cx("tab-text")}>Gia Dụng -50%</div>
          </div>
        </div>
      </div>
      <div className={cx("products")}>
        <div className={cx("content")}>
          <Advertisement brand="https://salt.tikicdn.com/cache/w750/ts/tka/65/63/74/5ee40d5fcce2b8c83592ec45a4f3a01d.jpg.webp" />

          {products.length > 0
            ? slicedProducts.map((product, index) => {
                return (
                  <React.Fragment key={index}>
                    {index !== 19 ? (
                      <ProductOther
                        width="100%"
                        key={product.id}
                        thumbnail={product.thumbnail}
                        altThumbnail={product.name}
                        textbadge={product.textBadge}
                        framebadge={product.frameBadge}
                        name={product.name}
                        stars={product.rating}
                        price={product.price}
                        discount={product.discount}
                        delivery={product.deliveryInfo}
                        carrier={product.carrier}
                        location={product.origin}
                        adsbadge={product.ads}
                      />
                    ) : (
                      <Advertisement brand="https://salt.tikicdn.com/cache/w750/ts/tka/06/1b/a2/5d56fcc47446b7c45b6786274c941700.jpg.webp" />
                    )}
                  </React.Fragment>
                );
              })
            : dataFake}
        </div>
        <a ref={footerRef} onClick={handleViewMore} className={cx("view-more")}>
          Xem Thêm
        </a>
      </div>
    </div>
  );
};

export default Suggest;
