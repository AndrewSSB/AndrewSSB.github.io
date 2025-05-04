import "../styles/RecipeDescriptionMock.css";

import RecipeInfoDescription1 from "../assets/recipe-info-description-1.png";
import RecipeInfoDescription2 from "../assets/recipe-info-description-2.png";
import RecipeInfoDescription3 from "../assets/recipe-info-description-3.png";
import RecipeMockButton from "../assets/recipe-info-description-mock-button.png";

export default function RecipeDescriptionMock() {
  return (
    <div className="recipe-description-container">
      <p className="recipe-description-normal-text">
        Picture succulent chicken infused with the bright notes of lemon and the
        aromatic richness of garlic. It's a symphony of flavors that will have
        your taste buds dancing. Join us as we delve into the art of roasting
        and uncover the secrets behind creating a masterpiece that's not just a
        meal but a celebration of culinary craftsmanship. <br /> <br />
        As you preheat your oven, envision the kitchen filling with the
        tantalizing aroma of herbs and citrus, setting the stage for a
        delightful meal that transcends the ordinary. The anticipation builds as
        the chicken roasts to golden perfection, promising a dining experience
        that marries simplicity with sophistication. Whether you're a seasoned
        chef or a kitchen novice, this recipe invites you to become a culinary
        artist, creating a masterpiece that will leave a lasting impression on
        your guests and loved ones.
      </p>
      <div>
        <p className="recipe-description-title-2">
          Let’s go over the basics– the do’s, and the don’ts– for How to Cook a
          chicken
        </p>
        <div>
          <p id="recipe-instructions-title">DO'S:</p>
          <p id="recipe-instructions-header">
            Thoroughly Clean Hands and Surfaces:
          </p>
          <p id="recipe-instructions-normal">
            Before and after handling raw chicken, ensure your hands, utensils,
            and surfaces are clean to prevent cross-contamination.
          </p>
          <p id="recipe-instructions-header">Use Separate Cutting Boards:</p>
          <p id="recipe-instructions-normal">
            Dedicate specific cutting boards for raw chicken to avoid the spread
            of bacteria to other foods.
          </p>
          <p id="recipe-instructions-header">
            Thoroughly Clean Hands and Surfaces:
          </p>
          <p id="recipe-instructions-normal">
            Invest in a reliable meat thermometer to ensure the chicken reaches
            the safe internal temperature of 165°F (74°C).
          </p>
        </div>
        <div>
          <p id="recipe-instructions-title">DON'TS:</p>
          <p id="recipe-instructions-header">
            Thaw Chicken at Room Temperature:
          </p>
          <p id="recipe-instructions-normal">
            Avoid thawing chicken on the counter. Instead, thaw it in the
            refrigerator to prevent bacterial growth.
          </p>
          <p id="recipe-instructions-header">Overcrowd the Pan:</p>
          <p id="recipe-instructions-normal">
            When roasting, ensure the chicken pieces have space between them for
            even cooking. Overcrowding can lead to unevenly cooked chicken.
          </p>
        </div>
      </div>
      <div>
        <p className="recipes-title">Instructions</p>
        <p className="recipe-description-normal-text">
          This recipe goes beyond the basics, inviting you to savor the richness
          of a creamy tomato basil sauce that clings to each strand of perfectly
          cooked pasta. It's a celebration of simplicity, where every ingredient
          plays a crucial role in creating a dish that is as comforting as it is
          delightful. <br /> <br />
          Allow the chicken to rest for 10 minutes before carving. This brief
          resting period is essential; it allows the juices to redistribute,
          ensuring each slice is succulent and bursting with flavor. As you
          carve into the golden exterior, be prepared for the enticing aroma
          that fills the air, signaling that your Citrus Infusion Delight is
          ready to be savored.
        </p>
        <p id="recipe-instructions-title">Preheat and Prepare</p>
        <div>
          <p id="recipe-instructions-normal">
            ● Preheat your oven to 375°F (190°C)
          </p>
          <p id="recipe-instructions-normal">
            ● Rinse the chicken inside and out, then pat it dry with paper
            towels.
          </p>
        </div>
        <p id="recipe-instructions-title">Citrus Infusion</p>
        <div>
          <p id="recipe-instructions-normal">
            ● Carefully lift the skin of the chicken and rub minced garlic
            directly onto the meat.
          </p>
          <p id="recipe-instructions-normal">
            ● Place lemon slices under the skin, ensuring they cover as much
            surface as possible.
          </p>
          <img
            src={RecipeInfoDescription1}
            alt="Info 1"
            className="recipe-image-width"
          />
        </div>
        <p id="recipe-instructions-title">Herb Blend</p>
        <div>
          <p id="recipe-instructions-normal">
            ● In a small bowl, mix olive oil, dried thyme, dried rosemary, salt,
            and black pepper to create a herb-infused mixture.
          </p>
          <p id="recipe-instructions-normal">
            ● Brush the entire chicken with the herb-infused mixture, making
            sure it's evenly coated.
          </p>
          <p id="recipe-instructions-normal">
            ● Season the exterior with additional salt and black pepper to
            taste.
          </p>
          <img
            src={RecipeInfoDescription2}
            alt="Info 1"
            className="recipe-image-width"
          />
        </div>
        <p id="recipe-instructions-title">Roast to Perfection</p>
        <div>
          <p id="recipe-instructions-normal">
            ● Place the chicken in a roasting pan, breast side up.
          </p>
          <p id="recipe-instructions-normal">
            ● Roast in the preheated oven for approximately 1 hour or until the
            internal temperature reaches 165°F (74°C).
          </p>
          <p id="recipe-instructions-normal">
            ● Allow the chicken to rest for 10 minutes before carving.
          </p>
          <p id="recipe-instructions-normal">
            ● Serve with the pan juices and roasted lemon slices for an extra
            burst of flavor.
          </p>
          <img
            src={RecipeInfoDescription3}
            alt="Info 1"
            className="recipe-image-width"
          />
        </div>
        <p id="recipe-instructions-title">Pairing Suggestions</p>
        <div>
          <p id="recipe-instructions-normal">
            1. Side Dish: Serve alongside roasted vegetables or a simple green
            salad.
          </p>
          <p id="recipe-instructions-normal">
            2. Wine: Pair with a crisp white wine or a light rosé for a
            well-balanced meal.
          </p>
        </div>
        <p id="recipe-instructions-normal">
          <span style={{ color: "#EE6352" }}>Roasted Vegetables: </span> The
          vibrant flavors of the roasted chicken complement beautifully with
          seasonal vegetables.
        </p>
        <p id="recipe-instructions-normal">
          <span style={{ color: "#EE6352" }}>Herb-infused Quinoa: </span> Create
          a wholesome meal by serving it alongside a bed of herb-infused quinoa.
        </p>
        <p className="recipe-description-normal-text">
          The combination of fresh lemon and aromatic garlic creates a
          citrus-infused masterpiece that takes the classic roast chicken to a
          whole new level. The acidity of the lemons not only adds brightness
          but also helps to tenderize the meat, resulting in a juicy and
          flavorful dish. <br />
          Whether you're hosting a family dinner or looking for a show-stopping
          centerpiece for a special celebration, this Lemon Garlic Roasted
          Chicken is the answer. The simplicity of the ingredients allows the
          natural flavors to shine, making it a versatile and impressive dish.
        </p>
        <img src={RecipeMockButton} alt="Share" style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}
