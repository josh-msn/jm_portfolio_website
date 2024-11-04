import React, { useEffect, useContext, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { LightModeContext } from "../ModeContext";
import Ninja1 from "../assets/images/Ninja_1.webp";
import Ninja2 from "../assets/images/Ninja_2.webp";
import ninjaSoundFile from "../assets/NinjaSound.mp3";

const ninjaVariants = {
  hidden: { y: -50, x: 0, opacity: 0 },
  visible: { y: 17, x: 0, opacity: 1, transition: { duration: 0.7 } },
  exit: { y: -100, opacity: 0, transition: { duration: 0.7 } },
};

const NinjaAnimation = () => {
  const controls = useAnimation();
  const { lightMode, toggleLightMode } = useContext(LightModeContext);
  const [image, setImage] = useState(Ninja1);
  const audioRef = useRef(new Audio(ninjaSoundFile));

  const handleToggle = async () => {
    await controls.start("visible");

    // Warte bis der Ninja "unten" ist
    setTimeout(() => {
      // Wechsel zu Ninja_2 Bild und spiele Sound ab
      setImage(Ninja2);
      audioRef.current.play();

      setTimeout(() => {
        // Wechsle zurück zu Ninja_1, toggle Mode und beende Animation
        setImage(Ninja1);
        toggleLightMode(); // Korrigierte Zeile

        controls.start("exit");
      }, 500);
    }, 500);
  };

  useEffect(() => {
    const button = document.getElementById("lightswitch");
    if (button) {
      button.addEventListener("click", handleToggle);

      return () => {
        button.removeEventListener("click", handleToggle);
      };
    }
  }, [controls, lightMode]); // Abhängigkeiten aktualisiert

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 1.0;
    audio.muted = false;
  }, []);

  return (
    <motion.div
      className="ninja"
      variants={ninjaVariants}
      initial="hidden"
      animate={controls}
    >
      <img src={image} alt="Ninja" />
    </motion.div>
  );
};

export default NinjaAnimation;
