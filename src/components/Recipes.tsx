import { ReactNode, useRef, useState } from "react";
import "../styles/Recipes.css";
import RecipeCard from "./RecipeCard";
import { Recipe } from "../types/mock-types";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";

import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import LeftArrowFull from "../assets/left-arrow-full.svg";
import RightArrowFull from "../assets/right-arrow-full.svg";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router";

export type RecipesProps = {
  title: ReactNode;
  titleString: string;
  description?: ReactNode | null;
  sourceData: Recipe[];
  count?: number | null;
  footnoteActions?: ReactNode;
};

export default function Recipes(props: RecipesProps) {
  const carouselRef = useRef<CarouselRef>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { sourceData, count = 1 } = props;

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const groupedData: Recipe[][] = [];
  for (let i = 0; i < sourceData.length; i += count!) {
    groupedData.push(sourceData.slice(i, i + count!));
  }

  const navigate = useNavigate();

  return (
    <div className="recipes-container">
      <div className="recipes-space">
        <span className="recipes-title">{props.title}</span>
        <div className="carousel-buttons-container">
          {currentSlide < 1 ? (
            <img
              src={LeftArrow}
              alt="Left Arrow"
              onClick={handlePrev}
              className="carousel-button"
            />
          ) : (
            <img
              src={LeftArrowFull}
              alt="Left Arrow"
              onClick={handlePrev}
              className="carousel-button"
            />
          )}
          {currentSlide > groupedData.length - 2 ? (
            <img
              src={RightArrow}
              alt="Right Arrow"
              onClick={handleNext}
              className="carousel-button"
            />
          ) : (
            <img
              src={RightArrowFull}
              alt="Right Arrow"
              onClick={handleNext}
              className="carousel-button"
            />
          )}
        </div>
      </div>
      {props.description && (
        <div className="recipes-description">
          <p>{props.description}</p>
        </div>
      )}
      <Carousel
        ref={carouselRef}
        dots={false}
        infinite={false}
        beforeChange={(_, next) => setCurrentSlide(next)}
      >
        {groupedData.map((group, index) => (
          <div key={index}>
            <RecipeCard
              renderDefaultContent
              sourceData={group}
              footnoteActions={props.footnoteActions}
              navigate={(id) =>
                navigate(`/view-recipe?title=${props.titleString}&id=${id}`)
              }
            />
          </div>
        ))}
      </Carousel>
      <div className="view-all-section">
        <PrimaryButton
          text="VIEW ALL"
          backgroundColor={"rgba(0, 0, 0, 0.0)"}
          textColor={"#000"}
          border
          width={"202px"}
          height={"38px"}
          onClick={() => navigate(`/view-all?title=${props.titleString}`)}
        />
      </div>
    </div>
  );
}
