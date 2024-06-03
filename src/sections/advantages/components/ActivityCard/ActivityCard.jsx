import mobilePerson from "../.../../../../../assets/mobile-person.png";
import "./style.css";

const ActivityCard = () => {
  return (
    <div className="activity-card" data-aos="zoom-in">
      <img src={mobilePerson} alt="Person In Mobile" />
      <div className="details-box">
        <h3>$560.00</h3>
        <p>From Adam</p>
      </div>
      <div className="status">On Hold</div>
    </div>
  );
};

export default ActivityCard;
