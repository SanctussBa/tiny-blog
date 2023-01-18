import { useState } from "react";
import { Post } from "../types";
import PostCard from "./PostCard";

type PostSectionProps = {
  listOfPosts: Post[];
  genre: string;
  showAllPosts: boolean;
};

const PostSection = ({
  listOfPosts,
  genre,
  showAllPosts,
}: PostSectionProps) => {
  const [showSection, setShowSection] = useState<boolean>(true);
  return (
    <div>
      <div className={genre + " section--title--container"}>
        <h2 className={genre + " section--title"}>{genre}</h2>
        <i
          className={
            showSection
              ? "fas fa-angle-up arrow-icon"
              : "fas fa-angle-down arrow-icon"
          }
          onClick={() => {
            setShowSection(!showSection);
          }}
        />
      </div>

      <div
        className={
          !showSection
            ? "hide-section " + genre + " post-section--container"
            : genre + " post-section--container"
        }
      >
        {listOfPosts.map((post, index) => (
          <div className="post-card" key={index}>
            <PostCard post={post} genre={genre} showAllPosts={showAllPosts} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostSection;
