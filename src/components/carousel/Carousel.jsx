"use client";
import Image from "next/image";
import emoji_1 from "../../../public/iconbeforecarousel.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/components/carousel/carousel.css";
import { motion } from "framer-motion";


// console.log(width);

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel m-7 p-7">
      <div className="carousel-heading flex m-5 p-5 items-center">
        <motion.h2
          className="text-4xl font-bold px-2 mx-12"
          // initial={{ x: -100, scale: 0 }}
          animate={{ x: [-400, 0], scale: [0, 1.25] }}
          transition={{ delay: 0.8, duration: 2 }}
        >
          Does this sound familiar...
        </motion.h2>
        <motion.div
          initial={{ x: globalThis.window?.innerWidth + 100, y: 0 }}
          animate={{
            x: [null, 400, 0],
            y: [null, 50, 0],
          }}
          transition={{
            duration: 2,
            delay: 2,
            // ease: "easeInOut",
          }}
        >
          <Image src={emoji_1} alt="" width={100} height={100} />
        </motion.div>
      </div>
      <div>
        <Slider {...settings}>
          <div className="max-w-sm rounded-2xl overflow-visible bg-sky-200 shadow-lg">
            <div className="emoji text-3xl p-7">🧐</div>
            <div className="px-6 pb-3">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-2xl bg-indigo-200 overflow-visible shadow-lg">
            <div className="emoji text-3xl p-7">😠</div>
            <div className="px-6 pb-3">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-2xl -rotate-6 bg-indigo-600 my-5 text-white  shadow-lg">
            <div className="emoji text-3xl p-7">😳</div>
            <div className="px-6 pb-3">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-2xl bg-orange-300   overflow-visible shadow-lg">
            <div className="emoji text-3xl p-7">🤨</div>
            <div className="px-6 pb-3">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-2xl bg-yellow-100 overflow-visible shadow-lg">
            <div className="emoji text-3xl p-7">😒</div>
            <div className="px-6 pb-3">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-2xl bg-emerald-100 overflow-visible shadow-lg">
            <div className="emoji text-3xl p-7">😬</div>
            <div className="px-6 pb-3">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
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
