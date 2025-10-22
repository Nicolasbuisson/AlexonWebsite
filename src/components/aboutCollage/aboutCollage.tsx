"use client";
import "./aboutCollage.css";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutCollageImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
}

export const AboutCollage = () => {
  const IMAGES: AboutCollageImageProps[] = [
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About1.jpg`,
      alt: "Villa picture",
      height: 480,
      width: 640,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About3.jpeg`,
      alt: "Alexon at Atlantis picture",
      height: 1152,
      width: 768,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About2.jpeg`,
      alt: "girl in Ocean picture",
      height: 855,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About4Patisserie.jpeg`,
      alt: "Picture of a patisserie",
      height: 853,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About10Cave.jpeg`,
      alt: "Alexon in a cave",
      height: 853,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About12Trees.jpeg`,
      alt: "Drone shot of car going through forest",
      height: 959,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About6Party.jpeg`,
      alt: "Black and white picture of a party",
      height: 855,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About7Corona.jpeg`,
      alt: "Picture of Coronas",
      height: 1024,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About8PalmTrees.jpeg`,
      alt: "Picture of palm trees",
      height: 1024,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About9Cocktail.jpeg`,
      alt: "Picture of a cocktail",
      height: 853,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About11Shadow.jpeg`,
      alt: "Picture of a shadow on a yoga mat",
      height: 853,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About5Ocean.jpeg`,
      alt: "Ocean drone shot",
      height: 720,
      width: 1280,
    },
  ];

  // Define the animation for the parent container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger children animations by 0.2 seconds
      },
    },
  };

  // Define the animation for each child item
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="home-about-collage"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {IMAGES.map((img, i) => {
        return (
          <motion.div
            key={"home-about-collage-image-" + i}
            variants={itemVariants}
            className="home-about-collage-image-wrapper"
          >
            <Image
              src={img.src}
              alt={img.alt}
              height={img.height}
              width={img.width}
              className="home-about-collage-image"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};
