import { motion } from "framer-motion";

const Hero = () => {
  // Common transition settings for the animations
  const transition = { duration: 0.5, ease: "easeOut" };

  return (
    <section className="background_image text-white py-7 lg:py-0 lg:h-[68vh] rounded-2xl flex flex-col justify-center pl-5 lg:pl-20 overflow-hidden">
      <motion.h1
        initial={{ x: "-1000px" }}
        animate={{ x: 0 }}
        transition={transition}
        className="text-[35px] lg:text-[65px] font-semibold leading-[1.3em] mb-5"
      >
        Order your <br /> favorite food here
      </motion.h1>
      <motion.p
        initial={{ x: "-1000px" }}
        animate={{ x: 0 }}
        transition={{ ...transition, delay: 0.3 }}
        className="hidden md:block max-w-[400px] lg:max-w-[640px] mb-5 text-[14px] md:text-[16px] text-white"
      >
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </motion.p>
      <motion.div
        initial={{ x: "-1000px" }}
        animate={{ x: 0 }}
        transition={{ ...transition, delay: 0.6 }}
      >
        <div
          className="text-[14px] md:text-[16px] py-4 px-7 font-semibold inline-block rounded-[30px] text-[#49557E] bg-white hover:bg-[tomato] hover:text-white"
          aria-label="View Menu"
        >
          View Menu
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
