import BlackStar from "../../../assets/black-star.svg";

const Ribbon = () => {
  return (
    <div className="ribbon-container">
      <div className="black-ribbon" data-aos="fade-up">
        <div>
          <h3>Achievements</h3>
          <p>Best Finance App on PlayStore</p>
        </div>
        /
        <div>
          <h3>Finance</h3>
          <p>Most Popular Accounting App</p>
        </div>
      </div>
      <div className="rounded-red-ribbon" data-aos="fade-down">
        Make The Best Financial Decisions
      </div>
      <div className="red-ribbon" data-aos="fade-right">
        <img src={BlackStar} alt="Black Star" />
        <div>
          <h4>Uifry Premium</h4>
          <h5>Free Trial</h5>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
