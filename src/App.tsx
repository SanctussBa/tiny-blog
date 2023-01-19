import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import PostSection from "./components/PostSection";
import { Genre, Post } from "./types";
import PostCard from "./components/PostCard";

function App() {
  const [listOfPosts, setListOfPosts] = useState<Post[]>([]);
  const [showAllPosts, setShowAllPosts] = useState<boolean>(false);
  const [postCategory, setPostCategory] = useState<string>("all");
  const [showCategoryMenu, setShowCategoryMenu] = useState<boolean>(false);
  const [listOfCategories, setListOfCategories] = useState<string[]>([]);

 
  const fetchPosts = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const allPosts = await response.json();
    const posts = await allPosts.posts;
    setListOfPosts(posts);
    getListOfCategories(posts);
  }


  
  const getListOfCategories = (list: Post[]) => {
    const allTags = Array.from(new Set(list.map((p) => p.tags)));
    const mergedArray = allTags.reduce(function (prev, next) {
      return prev.concat(next);
    });
    const uniqueCategories = mergedArray.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });

    setListOfCategories(uniqueCategories);
  }


  useEffect(() => {
    fetchPosts();
    
    
    
  }, [])
  let component;
  if (postCategory === "all") {
    component = (
      <>
        {showAllPosts ? (
          <>
          <div className="all-posts-container">
            {listOfPosts.map((posts, index) => (
              <section className="post-card" key={index}>
                <PostCard
                  post={posts}
                  genre={posts.tags[0]}
                  showAllPosts={showAllPosts}
                />
              </section>
            ))}
            </div>
          </>
        ) : (
          <>
            {Object.keys(Genre).map((genre, index) => (
              <section key={index}>
                <PostSection
                  showAllPosts={showAllPosts}
                  listOfPosts={listOfPosts.filter((post) =>
                    post.tags.includes(genre)
                  )}
                  genre={genre}
                />
              </section>
            ))}
          </>
        )}
      </>
    );
  } else {
    component = (
      <>
      <h2 className="text-centered">Category: <span className="span-category-title">{postCategory}</span></h2>
      <div className="all-posts-container">
        {listOfPosts
          .filter((posts) => posts.tags.includes(postCategory))
          .map((p, index) => (
            <section className="post-card" key={index}>
              <PostCard
                post={p}
                genre={p.tags[0]}
                showAllPosts={showAllPosts}
              />
            </section>
          ))}
          </div>
      </>
    );
  }

  return (
    <main className="main--container">
      <Navigation
        setShowAllPosts={setShowAllPosts}
        showAllPosts={showAllPosts}
        listOfCategories={listOfCategories}
        setPostCategory={setPostCategory}
        showCategoryMenu={showCategoryMenu}
        setShowCategoryMenu={setShowCategoryMenu}
      />
      <div >{component}</div>
    </main>
  );
}

export default App;
