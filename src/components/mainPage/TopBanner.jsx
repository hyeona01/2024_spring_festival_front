import React, { useState } from "react";
import * as S from "./style/topBannerStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { img: "/image/mainpage/main_bg_0.png" },
    { img: "/image/mainpage/main_bg.png" },
    { img: "/image/mainpage/main_bg.png" },
    { img: "/image/mainpage/main_bg.png" },
    { img: "/image/mainpage/main_bg.png" },
    { img: "/image/mainpage/main_bg.png" },
    { img: "/image/mainpage/main_bg.png" },
  ];

  const settings = {
    focusOnSelect: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 391,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (_, newIndex) => {
      setCurrentIndex(newIndex);
    },
  };

  return (
    <>
      <S.BannerWrapper>
        <S.BannerContainer>
          <S.BigBannerImg src={`/image/mainpage/main_bg_${currentIndex}.png`} />
          <S.MiniBannerContainer>
            <Slider {...settings}>
              {images.map((d, index) => (
                <S.MiniBannerItem
                  key={index}
                  src={d.img}
                  className={currentIndex === index ? "active" : ""}
                />
              ))}
            </Slider>
          </S.MiniBannerContainer>
        </S.BannerContainer>
      </S.BannerWrapper>
    </>
  );
}

export default TopBanner;
