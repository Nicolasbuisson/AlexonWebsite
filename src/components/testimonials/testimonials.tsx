import "./testimonials.css";

const Testimonial = (props: TestimonialProps) => {
  const { quote, name, job } = props;

  return (
    <figure className="testimonial">
      <figcaption className="testimonial-person">
        <div className="testimonial-avatar" aria-hidden="true"></div>
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
            />
          );
        })}
      </div>
    </section>
  );
};
