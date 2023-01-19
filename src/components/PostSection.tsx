import { useState } from "react";
import { Genre, Post } from "../types";
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

  const backgroundColor = {
    backgroundColor: `${Genre[genre]}`,
  }
  
  return (
    <div>
      <div
        className=" section--title--container"
        style={backgroundColor}
        
      >
        <h2 className=" section--title" style={backgroundColor}>{genre} </h2>
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
            ? "hide-section post-section--container"
            : " post-section--container"
        }
        style={backgroundColor}
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
