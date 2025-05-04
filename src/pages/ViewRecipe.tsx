import { useNavigate, useSearchParams } from "react-router";
import "../styles/ViewRecipe.css";
import { recipesOfTheWeekMockData } from "../mock/mock-data";
import PrimaryButton from "../components/PrimaryButton";

import UserIcon from "../assets/user-icon.svg";

import TimerIcon from "../assets/timer-icon.svg";
import WeightIcon from "../assets/weight-icon.svg";
import RingIcon from "../assets/ring-icon.svg";
import RecipeDescriptionMock from "../components/RecipeDescriptionMock";
import { Divider } from "antd";
import InfoCard from "../components/InfoCard";
import Recipes from "../components/Recipes";
import Comments from "../components/Comments";

const icons = [TimerIcon, WeightIcon, RingIcon];

export default function ViewRecipe() {
  const [idParam, _] = useSearchParams();

  const selectedRecipeId = Number(idParam.get("id") ?? 0);

  const selectedRecipe = recipesOfTheWeekMockData.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  const navigate = useNavigate();

  return (
    <>
      <div className="view-recipe-container">
        <PrimaryButton
          text="RECIPE"
          backgroundColor={"#EE6352"}
          width={"80px"}
        />
        <p className="text-headline-2">{selectedRecipe?.recipeTitle}</p>
        <div className="recipe-card-title">
          <img src={UserIcon} alt="sal" />
          <div className="chef-info">
            <p className="header">{selectedRecipe?.chefName}</p>
            <p className="normal">{selectedRecipe?.chefTitle}</p>
          </div>
        </div>
        <div className="view-recipe-note">
          {selectedRecipe?.footNoteInfo.split("-").map((item, idx) => (
            <div key={idx} className="view-recipe-icon">
              <img src={icons[idx]} alt={`Icon-${idx}`} />
              <p className="footnote-p">{item}</p>
              {idx !== 2 && <div>●</div>}
            </div>
          ))}
        </div>
        <img id="recipe-image" src={selectedRecipe?.image} alt="Recipe Image" />
        <div className="recipe-description">
          <div className="recipe-description-left">
            <RecipeDescriptionMock />
            <Divider />
            <div className="recipe-card-title">
              <img src={UserIcon} alt="sal" />
              <div className="chef-info">
                <p className="header">{selectedRecipe?.chefName}</p>
                <p className="normal">{selectedRecipe?.chefTitle}</p>
              </div>
            </div>
            {selectedRecipe?.postDescription && (
              <p id="recipe-instructions-normal">
                {selectedRecipe.postDescription}
              </p>
            )}
            <PrimaryButton
              text="GO TO PROFILE"
              backgroundColor={"rgba(0, 0, 0, 0.0)"}
              textColor={"#000"}
              border
              width={"115px"}
              height={"38px"}
              onClick={() =>
                navigate(
                  `/view-profile?chefName=${selectedRecipe?.chefName}&chefTitle=${selectedRecipe?.chefTitle}`
                )
              }
            />
          </div>
          <div className="recipe-description-right">
            <InfoCard title={<p id="recipe-instructions-title">Ingredients</p>}>
              <p id="recipe-instructions-header">
                1 whole chicken (about 3-4 pounds)
              </p>
              <p id="recipe-instructions-header">
                2 lemons, sliced 6 cloves garlic, minced
              </p>
              <p id="recipe-instructions-header">2 tablespoons olive oil</p>
              <p id="recipe-instructions-header">1 teaspoon dried thyme</p>
              <p id="recipe-instructions-header">1 teaspoon dried rosemary</p>
              <p id="recipe-instructions-header">
                Salt and black pepper to taste
              </p>
            </InfoCard>

            <InfoCard
              title={
                <p id="recipe-instructions-title">
                  Equipment Needed for Preparation
                </p>
              }
            >
              <p id="recipe-instructions-header">Roasting pan</p>
              <p id="recipe-instructions-header">Meat thermometer</p>
              <p id="recipe-instructions-header">Cutting board</p>
              <p id="recipe-instructions-header">Kitchen twine </p>
            </InfoCard>

            <InfoCard
              title={<p id="recipe-instructions-title">Nutritional Value</p>}
            >
              <p id="recipe-instructions-header">Calories: ~250</p>
              <p id="recipe-instructions-header">Protein: ~30g</p>
              <p id="recipe-instructions-header">Total Fat: ~13g</p>
              <p id="recipe-instructions-header">Carbohydrates: ~5g</p>
            </InfoCard>
            <p className="recipe-description-normal-text">
              Note: Nutritional values are approximate and may vary based on
              specific ingredients and portion sizes.
            </p>
          </div>
        </div>
      </div>
      <Comments />
      <Recipes
        title={
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <p>SIMILAR RECIPES</p>
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
    </>
  );
}
