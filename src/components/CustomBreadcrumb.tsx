import { Breadcrumb, ConfigProvider } from "antd";
import { useSearchParams } from "react-router-dom";
import { recipesOfTheWeekMockData } from "../mock/mock-data";

export type CustomBreadcrumbProps = {
  mainTitle?: string;
};

export default function CustomBreadcrumb() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const id = searchParams.get("id");

  const items = [
    {
      title: "View All",
      href: "/find-more",
    },
  ];

  if (title) {
    items.push({
      title: decodeURIComponent(title),
      href: `/view-all?title=${encodeURIComponent(title)}`,
    });
  }

  if (title && id) {
    const recipe = recipesOfTheWeekMockData.find(
      (item) => item.id === Number(id ?? 0)
    );

    items.push({
      title: recipe?.recipeTitle ?? "",
      href: `/view-recipe?title=${encodeURIComponent(title)}&id=${id}`,
    });
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <ConfigProvider
        theme={{
          token: {
            colorText: "#000",
            fontFamily: "Montserrat",
            fontSize: 16,
          },
          components: {
            Breadcrumb: {
              linkColor: "rgb(159, 156, 149)",
            },
          },
        }}
      >
        <Breadcrumb items={items} />
      </ConfigProvider>
    </div>
  );
}
