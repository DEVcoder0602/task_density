"use client";
import Image from "next/image";
import logo from "../../../public/logo.gif";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className="flex justify-around m-7 items-center"
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
    >
      <div className="logo">
        <Image src={logo} width={100} height={100} alt="" />
      </div>
      <ul className="flex justify-between w-2/5 ">
        <Link href="/">
          <li className="flex text-slate-950 hover:font-bold">Emotions</li>
        </Link>
        <Link href="/">
          <li className="flex text-slate-950 hover:font-bold">Manifesto</li>
        </Link>
        <Link href="/">
          <li className="flex text-slate-950 hover:font-bold">
            Self-wareness test
          </li>
        </Link>
        <Link href="/">
          <li className="flex text-slate-950 hover:font-bold">Work With Us</li>
        </Link>
      </ul>
      <div className="button">
        <button
          type="button"
          className="bg-gray-950 hover:bg-slate-700 text-white cursor-pointer p-3 rounded-3xl"
        >
          Download App
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
