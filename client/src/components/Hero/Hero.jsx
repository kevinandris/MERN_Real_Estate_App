import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className=" paddings  innerWidth flexBetween hero-container">
        {/* // ! LEFT SIDE */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Explore <br />
              Most Beautiful <br />
              Estate Around <br />
              The World
            </motion.h1>

            <div className="flexColStart hero-des">
              <span className="secondaryText">
                Find a variety of properties that suit you very easily
              </span>
              <span className="secondaryText">
                Forget all difficulties in finding a residence for you
              </span>
            </div>

            <SearchBar />

            <div className="flexBetween stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={2800} end={3000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Premium Products</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={950} end={1000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp end={14} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Award Winning</span>
              </div>
            </div>
          </div>
        </div>

        {/* // ! RIGHT SIDE */}
        <div className="flexCenter hero-right">
          <motion.div
            className="image-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
