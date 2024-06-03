import SectionName from "../../utils/SectionName/SectionName";
import SectionHeading from "../../utils/SectionHeading/SectionHeading";
import SectionSubHeading from "../../utils/SectionSubHeading/SectionSubHeading";
import Testimonial from "../../utils/SectionSubHeadingBox/SectionSubHeadingBox";
import BackgroundTwo from "../../assets/bg-two.png";
import BlackCircleLayer from "../../assets/black-circle-layer.svg";
import DoubleQuotes from "../../assets/quotes.png";
import TestimonialPerson from "../../assets/testimonial-person.jpeg";
import Person1 from "../../assets/people1.png";
import Person2 from "../../assets/people2.png";
import Person3 from "../../assets/people3.png";
import Person4 from "../../assets/people4.png";
import "./style.css";

const Testimonials = () => {
  const testimonial = {
    subHeading: "The Best Financial Accounting App Ever!",
    detail:
      '"Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultricles. In Ultrices Malesuade Elit Mauris Etiam Odio. Duis Taristique Lacus, Et Blandit Viverra Nisl Velit, Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Du. Lectus Eget Eget Ac Dolor Naque Lorem Saplen, Suspendisse Aliquam."',
  };

  return (
    <section className="testimonial-section">
      <SectionName name="Testimonial" />
      <SectionHeading name="What Our Users Say About Us?" />
      <div className="testimonial">
        <div className="image-box">
          <img
            className="circle-layer"
            src={BlackCircleLayer}
            alt="Black Circle Layer"
            data-aos="flip-right"
            data-aos-delay="300"
          />
          <img
            className="testimonial-person"
            src={TestimonialPerson}
            alt="Testimonial Person Image"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          />
          <img
            className="quotes"
            src={DoubleQuotes}
            alt="Double Quotes"
            data-aos="zoom-in-down"
            data-aos-delay="300"
          />
          <img
            className="person person1"
            src={Person1}
            alt="Person One"
            data-aos="zoom-in-left"
            data-aos-delay="300"
          />
          <img
            className="person person2"
            src={Person2}
            alt="Person Two"
            data-aos="zoom-in-left"
            data-aos-delay="300"
          />
          <img
            className="person person3"
            src={Person3}
            alt="Person Three"
            data-aos="zoom-in-right"
            data-aos-delay="300"
          />
          <img
            className="person person4"
            src={Person4}
            alt="Person Four"
            data-aos="zoom-in-right"
            data-aos-delay="300"
          />
          <img
            src={BackgroundTwo}
            alt="Background Image"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
        </div>
        <div className="content">
          <Testimonial
            subHeading={testimonial.subHeading}
            detail={testimonial.detail}
          />
          <div
            className="testimonial-box"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="person"></div>
            <div className="person"></div>
            <div className="person"></div>
            <div className="person"></div>
            <div className="person"></div>
          </div>
          <SectionSubHeading name="Niok Jones" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
