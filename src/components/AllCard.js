import Card from "./Card";
import "../styles/allCards.css";
import calories from "../assets/calorie.png";
import protien from "../assets/proteine.png";
import apple from "../assets/apple.svg";
import lipide from "../assets/cheeseburger.svg";

const AllCards = ({ user }) => {
  const data = user.user.data != null ? user.user.data.keyData : null;

  return data != null ? (
    <div className="container-cards">
      <Card img={calories} indicator={data.calorieCount} category={"calories"} color={"#ff000020"} />
      <Card img={protien} indicator={data.proteinCount} category={"proteines"} color={"#4ab7ff20"} />
      <Card img={apple} indicator={data.carbohydrateCount} category={"glucides"} color={"#f9ce2320"} />
      <Card img={lipide} indicator={data.lipidCount} category={"lipides"} color={"#ff000020"} />
    </div>
  ) : null;
};

export default AllCards;
