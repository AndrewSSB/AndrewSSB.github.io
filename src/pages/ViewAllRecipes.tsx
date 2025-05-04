import { useNavigate, useSearchParams } from "react-router";
import PrimaryButton from "../components/PrimaryButton";
import RecipeCard from "../components/RecipeCard";
import { recipesOfTheWeekMockData } from "../mock/mock-data";

import "../styles/ViewAllRecipes.css";
import { Recipe } from "../types/mock-types";
import { useState } from "react";

export default function ViewAllRecipes() {
  const [titleParam, _] = useSearchParams();

  const navigate = useNavigate();

  const count = 2;
  const groupedData: Recipe[][] = [];

  for (let i = 0; i < recipesOfTheWeekMockData.length; i += count!) {
    groupedData.push(recipesOfTheWeekMockData.slice(i, i + count!));
  }

  const [visibleGroups, setVisibleGroups] = useState(2);

  const handleLoadMore = () => {
    if (visibleGroups < groupedData.length) {
      setVisibleGroups((prev) => prev + 1);
    }
  };

  return (
    <div className="view-all-container">
      <div className="view-all-recipes-title">
        <span className="recipes-title">{titleParam.get("title")}</span>
      </div>
      {groupedData.slice(0, visibleGroups).map((group, index) => (
        <div key={index}>
          <RecipeCard
            renderDefaultContent
            sourceData={group}
            navigate={(id) =>
              navigate(
                `/view-recipe?title=${encodeURIComponent(
                  titleParam.get("title") ?? ""
                )}&id=${id}`
              )
            }
          />
        </div>
      ))}
      <div className="view-all-recipes-button">
        {visibleGroups < groupedData.length ? (
          <PrimaryButton
            text="LOAD MORE"
            backgroundColor={"rgba(0, 0, 0, 0.0)"}
            textColor={"#000"}
            border
            width={"202px"}
            height={"38px"}
            onClick={handleLoadMore}
          />
        ) : (
          <p className="all-recipes-loaded">All recipes loaded.</p>
        )}
      </div>
    </div>
  );
}
