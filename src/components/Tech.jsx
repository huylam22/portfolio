import React, { useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { data, technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies and Tech Stack
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-6`}>
          Web Stack - I've worked with.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <h2 className={`${styles.sectionHeadText} text-center mb-6 mt-4`}>
        Data Stack - I've worked with.
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {data.map((data, idx) => (
          <div className="w-28 h-28" key={idx}>
            <BallCanvas icon={data.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
