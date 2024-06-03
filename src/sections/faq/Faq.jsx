import SectionName from "../../utils/SectionName/SectionName";
import SectionHeading from "../../utils/SectionHeading/SectionHeading";
import FAQ from "../../utils/SectionSubHeadingBox/SectionSubHeadingBox";
import "./style.css";

const Faq = () => {
  const faq = {
    subHeading: "The Best Financial Accounting App Ever!",
    detail:
      "Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultricles. In Ultrices Malesuade Elit Mauris.",
  };
  const faqArray = new Array(6).fill(faq);

  return (
    <section className="faq">
      <SectionName name="FAQ" />
      <SectionHeading name="Frequently Asked Questions" />
      <div className="faq-box">
        {faqArray.map((faq, index) => {
          return (
            <FAQ key={index} subHeading={faq.subHeading} detail={faq.detail} />
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
