import cardLogo from "../../../../assets/card-logo.png";
import visa from "../../../../assets/visa.svg";
import "./style.css";

const DebitCard = () => {
  return (
    <div className="debit-card" data-aos="zoom-in">
      <div className="logo-box">
        <img src={cardLogo} alt="Card Logo" />
        <img src={visa} alt="VISA Logo" />
      </div>
      <div className="detail-box">
        <p>0000 8888 2222 3333</p>
        <p>VALID THRU 07/24</p>
      </div>
    </div>
  );
};

export default DebitCard;
