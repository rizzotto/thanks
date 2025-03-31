import { motion } from "motion/react";
import arrow1 from "/arrow_1.svg";
import arrow2 from "/arrow_2.svg";
import bg from "/bg.jpg";
import contribution from "/contribution.png";
import datepicker from "/datepicker.png";
import first from "/first.png";
import gh from "/gh.png";
import hp from "/hp.svg";
import last from "/last.jpg";
import length from "/length.png";
import lunch from "/lunch.jpg";
import pingId from "/ping_id.png";
import pizza from "/pizza.jpg";
import poa from "/poa.jpg";
import table from "/table.png";
import us from "/us.png";
import veneerLogo from "/veneer_logo.svg";
import veneerLogoColor from "/logo_color.svg";
import website from "/website.png";

import Socials from "./components/socials";

function App() {
  return (
    <div className="bg-neutral-100 h-screen flex flex-col items-center justify-center overflow-hidden relative">
      <motion.img
        src={arrow1}
        className="w-24 md:w-auto absolute top-12 left-12"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={arrow2}
        className="w-24 md:w-auto absolute top-2 right-12"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={arrow1}
        className="w-24 md:w-auto absolute bottom-12 right-16 rotate-180"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={arrow2}
        className="w-24 md:w-auto absolute bottom-8 left-16 rotate-180"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />
      <motion.img
        className="w-3xl rotate-5 bg-white p-2 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={veneerLogo}
      />
      <motion.img
        className="max-w-[300px] md:max-w-[900px] -rotate-2 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={lunch}
      />
      <motion.img
        className="w-48 p-2 bg-white rotate-12 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={hp}
      />
      <motion.img
        className="p-2 bg-white -rotate-12 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={length}
      />
      <motion.img
        className="max-h-[400px] md:max-h-[600px] -rotate-3 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={bg}
      />
      <motion.img
        className="max-w-[300px] md:max-w-[900px] rotate-6 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={website}
      />
      <motion.img
        className="rotate-5 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={datepicker}
      />
      <motion.img
        className="max-w-[300px] md:max-w-[900px] rotate-6 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={us}
      />
      <motion.img
        className="-rotate-5 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={gh}
      />
      <motion.img
        className="max-h-[400px] md:max-h-[600px] rotate-12 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={poa}
      />
      <motion.img
        className="-rotate-3 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={contribution}
      />
      <motion.img
        className="max-h-[400px] md:max-h-[600px] -rotate-3 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={pizza}
      />
      <motion.img
        className="max-w-[300px] md:max-w-[900px] rotate-4 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={first}
      />
      <motion.img
        className="max-h-[300px] -rotate-12 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={pingId}
      />
      <motion.img
        className="-rotate-6 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={table}
      />
      <motion.img
        className="max-w-[300px] md:max-w-[900px] rotate-6 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        drag
        whileHover={{ scale: 1.02 }}
        src={last}
      />
      <motion.div
        className="flex flex-col items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="text-xl md:text-5xl text-center font-bold text-neutral-800">
            #9999 [FINAL] Thank You All
          </div>
          <motion.img className="w-12" src={veneerLogoColor} />
        </div>
        <Socials />
      </motion.div>
    </div>
  );
}

export default App;
