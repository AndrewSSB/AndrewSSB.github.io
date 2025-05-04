import { Card, Col, ConfigProvider, Row } from "antd";

import UserIcon from "../assets/user-icon.svg";

import "../styles/RecipeCard.css";
import PrimaryButton from "./PrimaryButton";

import HeartIcon from "../assets/heart-icon.svg";
import MessageIcon from "../assets/message-icon.svg";
import { Recipe } from "../types/mock-types";
import { ReactNode } from "react";

export type RecipeCardProps = {
  renderDefaultContent?: boolean | null;
  sourceData: Recipe[];
  count?: number | null;
  footnoteActions?: ReactNode;
  navigate?: (value: number) => void;
};

export default function RecipeCard(props: RecipeCardProps) {
  return (
    <Row gutter={[16, 16]}>
      {props.sourceData.map((item, idx) => (
        <Col key={idx} xs={24} sm={12}>
          <ConfigProvider
            theme={{
              token: {
                colorBgContainer: "rgb(255, 251, 242)",
                borderRadiusLG: 24,
                colorBorderSecondary: "rgba(38, 37, 34, 0.24)",
              },
            }}
          >
            {props.renderDefaultContent && (
              <Card>
                <div className="recipe-card-container">
                  <div className="recipe-card-title">
                    <img src={UserIcon} alt="sal" />
                    <div className="chef-info">
                      <p className="header">{item.chefName}</p>
                      <p className="normal">{item.chefTitle}</p>
                    </div>
                  </div>
                  {item.postDescription && (
                    <p id="author-description">{item.postDescription}</p>
                  )}
                  <div className="image-wrapper">
                    <img src={item.image} alt="Recipe Image" />
                    {item.veganTag && (
                      <div className="vegan-tag">
                        <img src={item.veganTag} alt="Vegan Tag" />
                      </div>
                    )}
                  </div>
                  <div className="chef-info">
                    <p className="header">{item.recipeTitle}</p>
                    <p id="recipe-description">{item.recipeDescription}</p>
                  </div>
                  <div className="bottom-section">
                    <p className="footnote-p">{item.footNoteInfo}</p>
                    {props.footnoteActions ? (
                      props.footnoteActions
                    ) : (
                      <div className="footnote-actions">
                        <img
                          src={HeartIcon}
                          alt="Heart Icon"
                          style={{ height: "38px" }}
                        />
                        <img
                          src={MessageIcon}
                          alt="Message Icon"
                          style={{ height: "38px" }}
                        />
                        <PrimaryButton
                          text="VIEW RECIPE"
                          backgroundColor={"rgba(0, 0, 0, 0.0)"}
                          textColor={"#000"}
                          border
                          width={"115px"}
                          height={"38px"}
                          onClick={() => {
                            if (props.navigate) {
                              props.navigate(item.id);
                            }
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            )}
          </ConfigProvider>
        </Col>
      ))}
    </Row>
  );
}
