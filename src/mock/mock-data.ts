import FirstRecipe from "../assets/first-recipe.png";
import SecondRecipe from "../assets/second-recipe.png";
import ThirdRecipe from "../assets/third-recipe.png";
import ForthRecipe from "../assets/forth-recipe.png";
import VeganTag from "../assets/vegan-tag.svg";
import { Recipe } from "../types/mock-types";

export const recipesOfTheWeekMockData: Recipe[] = [
  {
    id: 1,
    chefName: "Mist fluffy",
    chefTitle: "Master-Chef",
    postDescription:
      "I know this one from my grandma and I changed it up a bit for you guys enjoy",
    image: FirstRecipe,
    recipeTitle: "Savory Herb-Infused Chicken",
    recipeDescription:
      "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
    footNoteInfo: "40 Min - easy prep - 3 serves",
  },
  {
    id: 2,
    chefName: "Sir fluff",
    chefTitle: "Aspiring-cook",
    postDescription: "Made this one for all sweet tooth out there :D",
    image: SecondRecipe,
    recipeTitle: "Decadent Chocolate Mousse",
    recipeDescription:
      "Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!",
    footNoteInfo: "30 Min - medium prep- 4 serves",
    veganTag: VeganTag,
  },
  {
    id: 3,
    chefName: "Miss Lady",
    chefTitle: "Avid-cook",
    postDescription:
      "I loved British pancakes when I was little so here a new and improved version for you guys :)",
    image: ThirdRecipe,
    recipeTitle: "Glorious British Pancakes",
    recipeDescription:
      "This simple recipe refined to perfection will leave you wanting for more, here is how took a simple pancake and took it to the next level",
    footNoteInfo: "20 Min - easy prep - 1 Serving",
  },
  {
    id: 4,
    chefName: "Mister Sandwich Guy",
    chefTitle: "Hero-cook",
    postDescription: "Sometimes we all just need a sandwich ",
    image: ForthRecipe,
    recipeTitle: "The turkeynator",
    recipeDescription:
      "A simple sandwich recipe with a twist, find out how you can make the best turkey sandwich",
    footNoteInfo: "15 Min - EASY prep- 2 serves",
  },

  {
    id: 5,
    chefName: "Miss Lady",
    chefTitle: "Avid-cook",
    postDescription:
      "I loved British pancakes when I was little so here a new and improved version for you guys :)",
    image: ThirdRecipe,
    recipeTitle: "Glorious British Pancakes",
    recipeDescription:
      "This simple recipe refined to perfection will leave you wanting for more, here is how took a simple pancake and took it to the next level",
    footNoteInfo: "20 Min - easy prep - 1 Serving",
  },
  {
    id: 6,
    chefName: "Mister Sandwich Guy",
    chefTitle: "Hero-cook",
    postDescription: "Sometimes we all just need a sandwich ",
    image: ForthRecipe,
    recipeTitle: "The turkeynator",
    recipeDescription:
      "A simple sandwich recipe with a twist, find out how you can make the best turkey sandwich",
    footNoteInfo: "15 Min - EASY prep- 2 serves",
  },
  {
    id: 7,
    chefName: "Mist fluffy",
    chefTitle: "Master-Chef",
    postDescription:
      "I know this one from my grandma and I changed it up a bit for you guys enjoy",
    image: FirstRecipe,
    recipeTitle: "Savory Herb-Infused Chicken",
    recipeDescription:
      "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
    footNoteInfo: "40 Min - easy prep - 3 serves",
  },
  {
    id: 8,
    chefName: "Sir fluff",
    chefTitle: "Aspiring-cook",
    postDescription: "Made this one for all sweet tooth out there :D",
    image: SecondRecipe,
    recipeTitle: "Decadent Chocolate Mousse",
    recipeDescription:
      "Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!",
    footNoteInfo: "30 Min - medium prep- 4 serves",
    veganTag: VeganTag,
  },
];

import ScarlatescuRecipe from "../assets/scarlatescu-recipe.png";
import BonteaRecipe from "../assets/bontea-recipe.png";

export const mockSubscriptions: Recipe[] = [
  {
    id: 1,
    chefName: "Chef Scarlatescu",
    chefTitle: "Michelin-chef (Profesional)",
    postDescription: "",
    image: ScarlatescuRecipe,
    recipeTitle: "Fancy cousine",
    recipeDescription: "The fanciest thing you’ve ever seen",
    footNoteInfo: "999 Min - HARD prep - 100 serves",
  },
  {
    id: 2,
    chefName: "Chef Bontea",
    chefTitle: "Michelin-chef (Profesional)",
    postDescription: "",
    image: BonteaRecipe,
    recipeTitle: "The Fancy fancy",
    recipeDescription: "This is even fancier",
    footNoteInfo: "1 Min - Very hard prep- 999 serves",
  },
  {
    id: 3,
    chefName: "Chef Bontea",
    chefTitle: "Michelin-chef (Profesional)",
    postDescription: "",
    image: BonteaRecipe,
    recipeTitle: "The Fancy fancy",
    recipeDescription: "This is even fancier",
    footNoteInfo: "1 Min - Very hard prep- 999 serves",
  },
  {
    id: 4,
    chefName: "Chef Scarlatescu",
    chefTitle: "Michelin-chef (Profesional)",
    postDescription: "",
    image: ScarlatescuRecipe,
    recipeTitle: "Fancy cousine",
    recipeDescription: "The fanciest thing you’ve ever seen",
    footNoteInfo: "999 Min - HARD prep - 100 serves",
  },
];
