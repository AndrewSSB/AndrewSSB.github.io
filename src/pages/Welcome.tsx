import "../styles/Welcome.css";

import { Divider } from "antd";
import PrimaryButton from "../components/PrimaryButton";
import Recipes from "../components/Recipes";

import MainImage from "../assets/main-image.png";
import BreakFast from "../assets/breakfast.svg";
import Lunch from "../assets/lunch.svg";
import Dinner from "../assets/dinner.svg";
import Dessert from "../assets/dessert.svg";
import QuickBite from "../assets/quick-bite.svg";
import StarIcon from "../assets/star-icon.svg";
import { mockSubscriptions, recipesOfTheWeekMockData } from "../mock/mock-data";

const mockData = [
  {
    icon: BreakFast,
    title: "BREAKFAST",
  },
  {
    icon: Lunch,
    title: "LUNCH",
  },
  {
    icon: Dinner,
    title: "DINNER",
  },
  {
    icon: Dessert,
    title: "DESSERT",
  },
  {
    icon: QuickBite,
    title: "QUICK BITE!",
  },
];

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="image-wrapper">
        <img id="welcome-image" src={MainImage} alt="Main Image" />
        <div className="image-overlay" />
        <div className="text-overlay">
          <p className="text-headline">Join our community of aspiring chefs</p>
          <p className="text-paragraph">
            Connect with people around and share your recipes
          </p>
          <PrimaryButton
            text="FIND MORE"
            backgroundColor={"#F29C33"}
            textColor={"#262522"}
          />
        </div>
      </div>
      <div className="explore">
        <div className="left-content">
          <PrimaryButton
            text="EXPLORE"
            backgroundColor={"#EE6352"}
            width={"80px"}
          />
          <p className="text-headline-2">
            Explore our communitie’s recipies and add to it
          </p>
          <p className="text-paragraph-2">
            If you are a breakfast enthusiast, a connoisseur of savory delights,
            or on the lookout for irresistible desserts, our curated selection
            has something to satisfy every palate.
          </p>
          <PrimaryButton
            text="SEE MORE"
            backgroundColor={"rgba(0, 0, 0, 0.0)"}
            textColor={"#000"}
            border
            width={"115px"}
          />
        </div>
        <div className="right-content">
          {mockData.map((item, idx) => (
            <div key={idx} className="data-content">
              <div className="row-content">
                <img src={item.icon} alt={item.title} />
                <p className="p-text">{item.title}</p>
              </div>
              {idx !== mockData.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </div>
      <Recipes
        title={
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <p>RECIPES OF THE WEEK</p>
            <img src={StarIcon} alt="Star Icon" />
          </div>
        }
        sourceData={recipesOfTheWeekMockData}
        count={4}
        titleString="RECIPES OF THE WEEK"
      />
      <Recipes
        title={
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <p>LEVEL UP YOUR GAME!</p>
          </div>
        }
        description={
          <span
            style={{
              fontFamily: "Roboto",
              letterSpacing: "1px",
              lineHeight: "140%",
              fontSize: "13px",
            }}
          >
            Take your cooking to the next level with our professional team of
            professional chefs.{" "}
            <b style={{ cursor: "pointer" }}>Upgrade your account now! </b>
          </span>
        }
        sourceData={mockSubscriptions}
        count={2}
        footnoteActions={
          <PrimaryButton
            text="UPGRADE TO UNLOCK"
            backgroundColor={"rgba(0, 0, 0, 0.0)"}
            textColor={"#000"}
            border
            width={"202px"}
            height={"38px"}
          />
        }
        titleString="LEVEL UP YOUR GAME!"
      />

      <div className="join-section">
        <div className="circle" />
        <div className="reversed-circle" />
        <div className="text-overlay">
          <p className="text-headline">
            Join US <br /> SIGN UP!
          </p>
          <PrimaryButton
            text="SIGN UP"
            backgroundColor={"rgba(215, 0, 0, 1)"}
            textColor={"#fff"}
            width={"200px"}
            height={"60px"}
            border
          />
        </div>
      </div>
    </div>
  );
}
