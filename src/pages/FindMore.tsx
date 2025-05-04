import Recipes from "../components/Recipes";
import { recipesOfTheWeekMockData } from "../mock/mock-data";
import "../styles/FindMore.css";

export default function FindMore() {
  return (
    <div className="findmore-container">
      <Recipes
        title={
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <p>BREAKFAST</p>
          </div>
        }
        titleString="BREAKFAST"
        sourceData={recipesOfTheWeekMockData}
        count={2}
      />
      <Recipes
        title={
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <p>LUNCH</p>
          </div>
        }
        titleString="LUNCH"
        sourceData={recipesOfTheWeekMockData}
        count={2}
      />
      <Recipes
        title={
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <p>DINNER</p>
          </div>
        }
        titleString="DINNER"
        sourceData={recipesOfTheWeekMockData}
        count={2}
      />
      <Recipes
        title={
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <p>DESSERT</p>
          </div>
        }
        titleString="DESSERT"
        sourceData={recipesOfTheWeekMockData}
        count={2}
      />
      <Recipes
        title={
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <p>QUICK BITE</p>
          </div>
        }
        titleString="QUICK BITE"
        sourceData={recipesOfTheWeekMockData}
        count={2}
      />
      <Recipes
        title={
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <p>PROFFESIONAL</p>
          </div>
        }
        titleString="PROFFESIONAL"
        sourceData={recipesOfTheWeekMockData}
        count={2}
      />
    </div>
  );
}
