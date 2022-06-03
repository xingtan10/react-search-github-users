const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, id) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={id}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}

      {/* <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        Breakfast
      </button> */}
    </div>
  );
};
export default Categories;
