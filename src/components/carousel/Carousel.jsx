"use client";
import Image from "next/image";
import emoji_1 from "../../../public/iconbeforecarousel.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/components/carousel/carousel.css"

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="carousel m-7 p-7">
      <div className="carousel-heading flex m-5 p-5 items-center">
        <h2 className="text-4xl font-bold px-2">Does this sound familiar...</h2>
        <Image src={emoji_1} alt="" width={100} height={100} />
      </div>
      <div>
        <Slider {...settings}>
          <div class="max-w-sm rounded-2xl overflow-visible bg-sky-200 shadow-lg">
            <div className="emoji text-3xl p-7">🧐</div>
            <div class="px-6 pb-3">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded-2xl bg-indigo-200 overflow-visible shadow-lg">
            <div className="emoji text-3xl p-7">😠</div>
            <div class="px-6 pb-3">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded-2xl -rotate-6 bg-indigo-600 my-5 text-white  shadow-lg">
            <div className="emoji text-3xl p-7">😳</div>
            <div class="px-6 pb-3">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded-2xl bg-orange-300   overflow-visible shadow-lg">
            <div className="emoji text-3xl p-7">🤨</div>
            <div class="px-6 pb-3">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded-2xl bg-yellow-100 overflow-visible shadow-lg">
            <div className="emoji text-3xl p-7">😒</div>
            <div class="px-6 pb-3">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div class="max-w-sm rounded-2xl bg-emerald-100 overflow-visible shadow-lg">
            <div className="emoji text-3xl p-7">😬</div>
            <div class="px-6 pb-3">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
