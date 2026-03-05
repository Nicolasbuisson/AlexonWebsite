import './homeHero.css';
import { ButtonBackgroundHoverEffect } from "../buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";

export const HomeHero = () => {
    return (
        <section className="home-hero-section">
            <div className="home-hero-bg">
                <video
                    src={
                        "https://d128kbp85lo7cj.cloudfront.net/videos/VisualizerAlexonMedia-v1.mp4"
                    }
                    muted
                    autoPlay
                    loop
                    playsInline
                ></video>
            </div>
            <div className="home-hero-text">
                <h3 className="home-pitch">
                    Where cinematic excellence meets strategic performance
                </h3>
                <ButtonBackgroundHoverEffect
                    text="Let's Work Together"
                    link="/contact"
                    accent
                ></ButtonBackgroundHoverEffect>
            </div>
        </section>
    )
}