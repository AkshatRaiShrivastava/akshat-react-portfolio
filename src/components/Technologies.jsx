import { RiReactjsLine } from "react-icons/ri";
import { RiFlutterFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { TbBrandKotlin } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { RiFirebaseFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400 " />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiFlutterFill className="text-7xl text-blue-500 " />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-600 " />
        </motion.div>
        <motion.div
          variants={iconVariants(3.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-7xl text-red-400 " />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoAndroid className="text-7xl text-green-400 " />
        </motion.div>
        <motion.div
          variants={iconVariants(3.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandKotlin className="text-7xl text-purple-600 " />
        </motion.div>
        <motion.div
          variants={iconVariants(5.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptFill className="text-7xl text-yellow-400 " />
        </motion.div>
        <motion.div
          variants={iconVariants(1.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiFirebaseFill className="text-7xl text-orange-600 " />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
