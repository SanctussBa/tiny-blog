import { Post } from "../types";

type PostCardProps = {
  post: Post;
  genre: string;
  showAllPosts: boolean;
};

const PostCard = ({ post, genre, showAllPosts }: PostCardProps) => {
  return (
    <div
      className="post-card--container"
    >
      <div className="text-container">
        <div className="title--container">
          <h3 className="post-title">
            {post.title}
            {genre}
          </h3>
          
        </div>
        <hr></hr>
        <div>
          <p className="body-text">{post.body}</p>
        </div>
      </div>

      <div className="tags--container">
        <small className="tags--container">
          {post.tags.map((tag, index) => (
            <p key={index} className={tag + " tags"}>
              {tag}
            </p>
          ))}
        </small>
      </div>
    </div>
  );
};

export default PostCard;
