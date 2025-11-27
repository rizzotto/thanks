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
import { useEffect, useState } from "react";

function App() {
  const [showInitialLoader, setShowInitialLoader] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    const timer = setTimeout(() => setShowInitialLoader(false), 400);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (key: string) => {
    setLoadedImages((prev: Record<string, boolean>) => {
      if (prev[key]) {
        return prev;
      }

      return { ...prev, [key]: true };
    });
  };

  const getImageMotionProps = (key: string) => ({
    onLoad: () => handleImageLoad(key),
    initial: { opacity: 0, scale: 0.95 },
    animate: loadedImages[key]
      ? { opacity: 1, scale: 1 }
      : { opacity: 0, scale: 0.95 },
    transition: { duration: 0.4 },
  });

  const draggableImageProps = (key: string) => {
    const base = getImageMotionProps(key);
    return {
      ...base,
      drag: true,
      whileHover: { scale: 1.02 },
    };
  };

  return (
    <div className="bg-neutral-100 h-screen flex flex-col items-center justify-center overflow-hidden relative">
      {showInitialLoader && (
        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
          <svg
            className="w-12 h-12 text-gray-300 animate-spin"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-gray-600"
            ></path>
          </svg>
        </div>
      )}
      <motion.img
        src={arrow1}
        className="w-24 md:w-auto absolute top-12 left-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          loadedImages.arrowTopLeft
            ? { opacity: 1, scale: [1, 1.2, 1] }
            : { opacity: 0, scale: 0.95 }
        }
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        onLoad={() => handleImageLoad("arrowTopLeft")}
      />
      <motion.img
        src={arrow2}
        className="w-24 md:w-auto absolute top-2 right-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          loadedImages.arrowTopRight
            ? { opacity: 1, scale: [1, 1.2, 1] }
            : { opacity: 0, scale: 0.95 }
        }
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        onLoad={() => handleImageLoad("arrowTopRight")}
      />
      <motion.img
        src={arrow1}
        className="w-24 md:w-auto absolute bottom-12 right-16 rotate-180"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          loadedImages.arrowBottomRight
            ? { opacity: 1, scale: [1, 1.2, 1] }
            : { opacity: 0, scale: 0.95 }
        }
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        onLoad={() => handleImageLoad("arrowBottomRight")}
      />
      <motion.img
        src={arrow2}
        className="w-24 md:w-auto absolute bottom-8 left-16 rotate-180"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          loadedImages.arrowBottomLeft
            ? { opacity: 1, scale: [1, 1.2, 1] }
            : { opacity: 0, scale: 0.95 }
        }
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        onLoad={() => handleImageLoad("arrowBottomLeft")}
      />
      <motion.img
        className="w-3xl rotate-5 bg-white p-2 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={veneerLogo}
        {...draggableImageProps("veneerLogo")}
      />
      <motion.img
        className="max-w-[300px] md:max-w-[900px] -rotate-2 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={lunch}
        {...draggableImageProps("lunch")}
      />
      <motion.img
        className="w-48 p-2 bg-white rotate-12 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={hp}
        {...draggableImageProps("hp")}
      />
      <motion.img
        className="p-2 bg-white -rotate-12 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={length}
        {...draggableImageProps("length")}
      />
      <motion.img
        className="max-h-[400px] md:max-h-[600px] -rotate-3 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={bg}
        {...draggableImageProps("bg")}
      />
      <motion.img
        className="max-w-[300px] md:max-w-[900px] rotate-6 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={website}
        {...draggableImageProps("website")}
      />
      <motion.img
        className="rotate-5 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={datepicker}
        {...draggableImageProps("datepicker")}
      />
      <motion.img
        className="max-w-[300px] md:max-w-[900px] rotate-6 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={us}
        {...draggableImageProps("us")}
      />
      <motion.img
        className="-rotate-5 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={gh}
        {...draggableImageProps("gh")}
      />
      <motion.img
        className="max-h-[400px] md:max-h-[600px] rotate-12 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={poa}
        {...draggableImageProps("poa")}
      />
      <motion.img
        className="-rotate-3 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={contribution}
        {...draggableImageProps("contribution")}
      />
      <motion.img
        className="max-h-[400px] md:max-h-[600px] -rotate-3 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={pizza}
        {...draggableImageProps("pizza")}
      />
      <motion.img
        className="max-w-[300px] md:max-w-[900px] rotate-4 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={first}
        {...draggableImageProps("first")}
      />
      <motion.img
        className="max-h-[300px] -rotate-12 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={pingId}
        {...draggableImageProps("pingId")}
      />
      <motion.img
        className="-rotate-6 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={table}
        {...draggableImageProps("table")}
      />
      <motion.img
        className="max-w-[300px] md:max-w-[900px] rotate-6 cursor-pointer rounded-xl border-neutral-400 border-2 absolute z-10"
        src={last}
        {...draggableImageProps("last")}
      />
      <motion.div
        className="flex flex-col items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
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
