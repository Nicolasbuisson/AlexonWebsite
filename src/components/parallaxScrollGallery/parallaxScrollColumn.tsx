import "./parallaxScrollColumn.css";
import { motion, MotionValue } from "framer-motion";

interface IProps {
  videos: string[];
  parallaxCoefficient?: MotionValue<number>;
}

export const ParallaxScrollColumn = (props: IProps) => {
  const { videos, parallaxCoefficient = 0 } = props;

  return (
    <motion.div
      className="parallax-scroll-column"
      style={{ y: parallaxCoefficient }}
    >
      {videos.map((vid, i) => {
        return vid ? (
          <video
            key={`parallax-scroll-video-${i}-${vid}`}
            src={vid}
            autoPlay
            muted
            loop
          ></video>
        ) : (
          <></>
        );
      })}
    </motion.div>
  );
};
