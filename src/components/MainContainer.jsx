import React from "react";
import HomeContainer from "./HomeContainer";
import RowContainer from "./RowContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

const MainContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between ">
          <p className="text-2xl font-semibold capitalize text-textColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:bottom-0 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all duration-100 ease-in-out">
            
            Our Fresh & healthy fruits
          </p>

          <div className="hidden md:flex gap-3 items-center justify-between">
              <motion.div whileTap={{scale : 0.75}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all ease-in-out duration-100 hover:shadow-lg flex items-center justify-center">
                <MdChevronLeft className="text-lg text-white"/>
              </motion.div>
              <motion.div whileTap={{scale : 0.75}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all ease-in-out duration-100 hover:shadow-lg flex items-center justify-center">
                <MdChevronRight className="text-lg text-white"/>
              </motion.div>
          </div>
        </div>
        <RowContainer flag={true} />
      </section>
    </div>
  );
};

export default MainContainer;
