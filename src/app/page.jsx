"use client"
import Image from "next/image";
import headerimg from "../../public/header.jpg";
import Carousel from "@/components/carousel/Carousel";
import AppInfo from "@/components/appinfo/AppInfo";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container">
      <motion.div
        className="header m-4 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Image src={headerimg} alt="" className="w-full rounded-3xl" />
      </motion.div>
      <div className="info m-7 p-5 flex">
        <h2 className="text-3xl text-center font-semibold flex-1">
          EQ beats IQ
        </h2>
        <p className="flex-1 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod
          mollitia ipsum molestiae quos rerum delectus nemo consequatur
          voluptatem repellat ad labore, reiciendis vero fuga aspernatur eum
          quaerat vel ipsa.
        </p>
        <p className="flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod
          mollitia ipsum molestiae quos rerum delectus nemo consequatur
          voluptatem repellat ad labore, reiciendis vero fuga aspernatur eum
          quaerat vel ipsa.
        </p>
      </div>
      <Carousel />
      <AppInfo />
    </div>
  );
}
