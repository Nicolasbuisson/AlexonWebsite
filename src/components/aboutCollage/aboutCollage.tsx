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
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About1.webp`,
      alt: "Villa picture",
      height: 480,
      width: 640,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About3.webp`,
      alt: "Alexon at Atlantis picture",
      height: 1152,
      width: 768,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About2.webp`,
      alt: "girl in Ocean picture",
      height: 855,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About4Patisserie.webp`,
      alt: "Picture of a patisserie",
      height: 853,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About10Cave.webp`,
      alt: "Alexon in a cave",
      height: 853,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About12Trees.webp`,
      alt: "Drone shot of car going through forest",
      height: 959,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About6Party.webp`,
      alt: "Black and white picture of a party",
      height: 855,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About7Corona.webp`,
      alt: "Picture of Coronas",
      height: 1024,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About8PalmTrees.webp`,
      alt: "Picture of palm trees",
      height: 1024,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About9Cocktail.webp`,
      alt: "Picture of a cocktail",
      height: 853,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About11Shadow.webp`,
      alt: "Picture of a shadow on a yoga mat",
      height: 853,
      width: 1280,
    },
    {
      src: `https://d128kbp85lo7cj.cloudfront.net/images/About5Ocean.webp`,
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
