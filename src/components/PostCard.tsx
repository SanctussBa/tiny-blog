import { Post } from "../types";

type PostCardProps = {
  post: Post;
  genre: string;
  showAllPosts: boolean;
};

const PostCard = ({ post, genre, showAllPosts }: PostCardProps) => {
  return (
    <div
      className={
        showAllPosts ? "long-card post-card--container" : "post-card--container"
      }
    >
      <div>
        <div className="title--container">
          <h3 className="post-title">
            {post.title}
            {genre}
          </h3>
        </div>
        <div>
          <p>{post.body}</p>
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
