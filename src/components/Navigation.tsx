type NavigationProps = {
  setShowAllPosts: React.Dispatch<React.SetStateAction<boolean>>;
  showAllPosts: boolean;
  listOfCategories: string[];
  setPostCategory: React.Dispatch<React.SetStateAction<string>>;
  showCategoryMenu: boolean;
  setShowCategoryMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navigation = ({
  setShowAllPosts,
  showAllPosts,
  listOfCategories,
  setPostCategory,
  showCategoryMenu,
  setShowCategoryMenu,
}: NavigationProps) => {
  const showSectionsOnClick = () => {
    setShowAllPosts(!showAllPosts);
    setPostCategory("all");
  };

  const selectCategoryTrigger = () => {
    setShowCategoryMenu(!showCategoryMenu);
  };
  return (
    <header className="navigation--header">
      <nav className="header--navigation">
        <h1 onClick={() => {window.location.reload()}} className="navigation--title">Tiny Blog</h1>
        <div className="show-posts--triger" onClick={showSectionsOnClick}>
          <h3>{showAllPosts ? "Show Sections" : "Show All Posts"}</h3>
        </div>
        <div onClick={selectCategoryTrigger} className="select-category">
          <div className="select-category-container">
            <p className="underline">Select Category</p>
            <div className="select-arrow">
              <i
                className={
                  !showCategoryMenu ? "fas fa-angle-down" : "fas fa-angle-up"
                }
              />
            </div>

            <ul
              className={
                !showCategoryMenu
                  ? "select-category-ul hide"
                  : "select-category-ul"
              }
            >
              {listOfCategories.map((category, index) => (
                <li
                  className="category-item"
                  key={index}
                  onClick={() => setPostCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
