import { CSSProperties } from "react";
import "./cardBorderTracer.css";

// Dots chained one behind the other to read as a single segment travelling the
// border. Opacity peaks in the middle of the chain and fades towards both ends
// so the segment tapers off instead of ending abruptly.
const TRACER_COUNT = 50;
const TRACER_MIN_OPACITY = 0.2;

const tracers = Array.from({ length: TRACER_COUNT }, (_, index) => {
  const middle = (TRACER_COUNT - 1) / 2;
  const distanceFromMiddle = Math.abs(index - middle) / middle;
  return {
    index,
    opacity: 1 - distanceFromMiddle * (1 - TRACER_MIN_OPACITY),
  };
});

interface ICardBorderTracer {
  // thickness of the segment as a CSS length, e.g. "4px". Defaults to 0.5rem
  size?: string;
}

// Render inside a card that has the `card-border-effect` class and sets
// --card-border-size and --card-border-radius to match its own border.
export const CardBorderTracer = (props: ICardBorderTracer) => {
  const { size } = props;

  return (
    <span
      className="card-border-track"
      aria-hidden="true"
      style={size ? ({ "--tracer-size": size } as CSSProperties) : undefined}
    >
      {tracers.map((tracer) => (
        <span
          key={tracer.index}
          className="card-border-tracer"
          style={
            {
              "--i": tracer.index,
              "--tracer-opacity": tracer.opacity,
            } as CSSProperties
          }
        />
      ))}
    </span>
  );
};
