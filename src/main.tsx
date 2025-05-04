import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Welcome from "./pages/Welcome";
import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import FindMore from "./pages/FindMore";
import Navigation from "./components/Navigation/Navigation";
import Copyright from "./components/Copyright";
import ViewAllRecipes from "./pages/ViewAllRecipes";
import ViewRecipe from "./pages/ViewRecipe";
import CustomBreadcrumb from "./components/CustomBreadcrumb";
import ChefProfile from "./pages/ChefProfile";

const links = [
  {
    title: "HOME",
  },
  {
    title: "FIND MORE",
  },
  {
    title: "COOK BOOK",
  },
  {
    title: "ABOUT US",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <Welcome />
        <Copyright links={links} />
      </>
    ),
  },
  {
    path: "/find-more",
    element: (
      <>
        <Navigation />
        <FindMore />
        <Copyright links={links} />
      </>
    ),
  },
  {
    path: "/view-all",
    element: (
      <>
        <Navigation />
        <CustomBreadcrumb />
        <ViewAllRecipes />
        <Copyright links={links} />
      </>
    ),
  },
  {
    path: "/view-recipe",
    element: (
      <>
        <Navigation />
        <CustomBreadcrumb />
        <ViewRecipe />
        <Copyright links={links} />
      </>
    ),
  },
  {
    path: "/view-profile",
    element: (
      <>
        <Navigation />
        <CustomBreadcrumb />
        <ChefProfile />
        <Copyright links={links} />
      </>
    ),
  },
  {
    path: "*",
    loader: () => {
      return redirect("/");
    },
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
