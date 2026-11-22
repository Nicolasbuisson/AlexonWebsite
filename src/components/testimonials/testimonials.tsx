import Image from "next/image";
import { CardBorderTracer } from "../cardBorderTracer/cardBorderTracer";
import "./testimonials.css";

const Testimonial = (props: TestimonialProps) => {
  const { quote, name, job, image } = props;

  return (
    <figure className="testimonial card-border-effect">
      <CardBorderTracer size="4px" />
      <figcaption className="testimonial-person">
        <Image
          className="testimonial-avatar"
          src={image}
          width={64}
          height={64}
          alt=""
          aria-hidden
        />
        <div className="testimonial-person-text">
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-job">{job}</p>
        </div>
      </figcaption>
      <blockquote className="testimonial-quote">“{quote}”</blockquote>
    </figure>
  );
};

export const Testimonials = (props: { testimonials: TestimonialProps[] }) => {
  const { testimonials } = props;

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-header">Hear from our clients</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => {
          return (
            <Testimonial
              key={"testimonial-" + testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              job={testimonial.job}
              image={testimonial.image}
            />
          );
        })}
      </div>
    </section>
  );
};
