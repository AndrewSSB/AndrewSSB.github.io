import "../styles/Comments.css";
import InfoCard from "./InfoCard";

import UserIcon from "../assets/user-icon.svg";
import LikeIcon from "../assets/like-icon.svg";
import DislikeIcon from "../assets/dislike-icon.svg";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import { ConfigProvider, Divider } from "antd";
import { commentsMockData } from "../mock/mock-data";

const currentUser = {
  chefName: "Random Chef",
  chefTitle: "Amateur-Chef",
};

export type Comment = {
  id: number;
  chefName: string;
  chefTitle: string;
  comment: string;
  numberOfLikes: number;
  numberOfDislikes: number;
  subComments?: Comment[] | null;
};

export default function Comments() {
  const [visibleRootComments, setVisibleRootComments] = useState(2);
  const [expandedReplies, setExpandedReplies] = useState<
    Record<number, number>
  >({});

  const handleViewReplies = (commentId: number, totalReplies: number) => {
    setExpandedReplies((prev) => ({
      ...prev,
      [commentId]: Math.min((prev[commentId] || 0) + 10, totalReplies),
    }));
  };

  const handleLoadMoreRootComments = () => {
    setVisibleRootComments((prev) =>
      Math.min(prev + 2, commentsMockData.length)
    );
  };

  const renderSubComments = (subComments: Comment[], parentId: number) => {
    const visibleCount = expandedReplies[parentId] || 0;
    const visibleReplies = subComments.slice(0, visibleCount);

    return (
      <div style={{ marginLeft: 30, marginTop: 10 }}>
        {visibleReplies.map((reply) => (
          <div key={reply.id}>
            <InfoCard
              title={
                <div className="recipe-card-title">
                  <img src={UserIcon} alt="sal" />
                  <div className="chef-info">
                    <p className="header">{reply.chefName}</p>
                    <p className="normal">{reply.chefTitle}</p>
                  </div>
                </div>
              }
            >
              <div className="comment-container">
                <p className="comments-text">{reply.comment}</p>
                <div className="comments-reaction-container">
                  <div className="comments-icons-space">
                    <img
                      className="comments-icons"
                      src={LikeIcon}
                      alt="Likes"
                    />
                    <span className="comments-interaction">
                      {reply.numberOfLikes}
                    </span>
                  </div>
                  <div className="comments-icons-space">
                    <img
                      className="comments-icons"
                      src={DislikeIcon}
                      alt="Dislikes"
                    />
                    <span>{reply.numberOfDislikes}</span>
                  </div>
                </div>
                <div className="comments-reaction-container">
                  <PrimaryButton
                    text="Reply"
                    backgroundColor={"rgba(0, 0, 0, 0.0)"}
                    textColor={"#000"}
                    border
                    width={"115px"}
                    height={"38px"}
                    onClick={() => console.log("Reply to", reply.id)}
                  />
                  {reply.subComments?.length &&
                    (expandedReplies[reply.id] || 0) === 0 && (
                      <p
                        className="view-more-comments"
                        onClick={() =>
                          handleViewReplies(reply.id, reply.subComments!.length)
                        }
                      >
                        View all {reply.subComments.length} replies
                      </p>
                    )}
                </div>
              </div>
            </InfoCard>
            <ConfigProvider theme={{ token: { lineWidth: 3 } }}>
              <Divider />
            </ConfigProvider>
            {reply.subComments?.length &&
              renderSubComments(reply.subComments, reply.id)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="comments-container">
      <p className="comments-title">Comment Section</p>
      <InfoCard
        title={
          <div className="recipe-card-title">
            <img src={UserIcon} alt="sal" />
            <div className="chef-info">
              <p className="header">{currentUser?.chefName}</p>
              <p className="normal">{currentUser?.chefTitle}</p>
            </div>
          </div>
        }
      >
        <p className="comments-text">1 whole chicken (about 3-4 pounds)</p>
      </InfoCard>
      <div className="users-comments-container">
        {commentsMockData.length > 0 &&
          commentsMockData.slice(0, visibleRootComments).map((item, idx) => (
            <div key={idx}>
              <InfoCard
                title={
                  <div className="recipe-card-title">
                    <img src={UserIcon} alt="sal" />
                    <div className="chef-info">
                      <p className="header">{item?.chefName}</p>
                      <p className="normal">{item?.chefTitle}</p>
                    </div>
                  </div>
                }
              >
                <div className="comment-container">
                  <p className="comments-text">{item.comment}</p>
                  <div className="comments-reaction-container">
                    <div className="comments-icons-space">
                      <img
                        className="comments-icons"
                        src={LikeIcon}
                        alt="Likes"
                      />
                      <span className="comments-interaction">
                        {item.numberOfLikes}
                      </span>
                    </div>
                    <div className="comments-icons-space">
                      <img
                        className="comments-icons"
                        src={DislikeIcon}
                        alt="Dislikes"
                      />
                      <span>{item.numberOfDislikes}</span>
                    </div>
                  </div>
                  <div className="comments-reaction-container">
                    <PrimaryButton
                      text="Reply"
                      backgroundColor={"rgba(0, 0, 0, 0.0)"}
                      textColor={"#000"}
                      border
                      width={"115px"}
                      height={"38px"}
                      onClick={() => console.log("sal")}
                    />
                    {item.subComments?.length ? (
                      (expandedReplies[item.id] || 0) === 0 ? (
                        <p
                          className="view-more-comments"
                          onClick={() =>
                            handleViewReplies(item.id, item.subComments!.length)
                          }
                        >
                          View all {item.subComments.length} replies
                        </p>
                      ) : null
                    ) : null}
                  </div>
                </div>
                <ConfigProvider theme={{ token: { lineWidth: 3 } }}>
                  <Divider />
                </ConfigProvider>
                {item.subComments?.length &&
                  renderSubComments(item.subComments, item.id)}
              </InfoCard>
            </div>
          ))}
        {visibleRootComments < commentsMockData.length && (
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <PrimaryButton
              text="VIEW MORE COMMENTS"
              backgroundColor={"rgba(0, 0, 0, 0.0)"}
              textColor={"#000"}
              border
              width={"205PX"}
              height={"38px"}
              onClick={handleLoadMoreRootComments}
            />
          </div>
        )}
      </div>
    </div>
  );
}
