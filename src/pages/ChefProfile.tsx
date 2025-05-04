import { useSearchParams } from "react-router";
import "../styles/ChefProfile.css";
import PrimaryButton from "../components/PrimaryButton";
import Recipes from "../components/Recipes";
import { recipesOfTheWeekMockData } from "../mock/mock-data";
import { Col, Row } from "antd";

import UserIcon from "../assets/user-icon.svg";
import AuthorPhoto from "../assets/author-image.png";

import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import YoutubeIcon from "../assets/youtube.svg";

import Galery1 from "../assets/galery-1.png";
import Galery2 from "../assets/galery-2.png";
import Galery3 from "../assets/galery-3.png";
import Galery4 from "../assets/galery-4.png";
import Galery5 from "../assets/galery-5.png";
import Galery6 from "../assets/galery-6.png";
import Galery7 from "../assets/galery-7.png";
import Galery8 from "../assets/galery-8.png";

const imageUrls = [
  Galery1,
  Galery2,
  Galery3,
  Galery4,
  Galery5,
  Galery6,
  Galery7,
  Galery8,
];

export default function ChefProfile() {
  const [searchParams, _] = useSearchParams();

  const chefTitle = searchParams.get("chefTitle");
  const chefName = searchParams.get("chefName");

  return (
    <div>
      <div className="chef-profile-info">
        <div className="recipe-card-title">
          <img src={UserIcon} alt="sal" />
          <div className="chef-info">
            <p className="header">{chefName}</p>
            <p className="normal">{chefTitle}</p>
          </div>
        </div>
        <div>
          <p className="recipe-description-normal-text">
            Hello Guys I am mister fluffy part time cook
          </p>
          <PrimaryButton
            text="EXPLORE RECIPES"
            backgroundColor={"#F29C33"}
            textColor={"#262522"}
            width={"166px"}
            onClick={() => window.location.reload()}
          />
        </div>
      </div>
      <div className="chef-profile-container">
        <div className="chef-profile-description">
          <div>
            <img id="author-photo" src={AuthorPhoto} alt="Author" />
            <div className="follow-button">
              <p className="recipe-description-normal-text">FOLLOW ME</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  style={{ filter: "invert(1)", cursor: "pointer" }}
                />
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  style={{ filter: "invert(1)", cursor: "pointer" }}
                />
                <img
                  src={YoutubeIcon}
                  alt="Youtube"
                  style={{ filter: "invert(1)", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <div>
            <p className="recipe-description-title-2">MY LOVE FOR COOKING</p>
            <p className="recipe-instructions-normal">
              I am so happy to be part of this community
            </p>
            <p className="recipe-instructions-normal">
              It gave me tha chance to create recipes and see other recipes
            </p>
            <p className="recipe-instructions-normal">
              Hope you guys like what you find here
            </p>
            <p className="recipe-instructions-normal">Warmest regards,</p>
            <p className="signature">{chefName}</p>
          </div>
        </div>
        <div>
          <Row gutter={[16, 16]}>
            {imageUrls.map((url, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <img className="profile-galery" src={url} alt={`id-${index}`} />
              </Col>
            ))}
          </Row>
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
            <p>MY RECIPES</p>
          </div>
        }
        titleString="SIMILAR RECIPES"
        sourceData={recipesOfTheWeekMockData}
        count={2}
      />
      <div className="join-section" style={{ margin: "20px 0 20px 0" }}>
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
