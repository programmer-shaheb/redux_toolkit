const Sidebar = ({ selectedValue, setSelectedValue, setSelectedOption }) => {
  const handleRadioChange = (event) => {
    setSelectedValue((prevSelectedValue) => event.target.value);
  };

  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <aside>
        <div className="sidebar-items">
          <div className="sidebar-content">
            <h4>Sort</h4>
            <select
              name="sort"
              id="lws-sort"
              className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
              onChange={handleSelectionChange}
            >
              <option value="">Default</option>
              <option value="newest">Newest</option>
              <option value="most_liked">Most Liked</option>
            </select>
          </div>
          <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
              <div>
                <input
                  type="radio"
                  name="filter"
                  value="all"
                  id="lws-all"
                  checked={selectedValue === "all"}
                  className="radio"
                  onChange={handleRadioChange}
                />
                <label for="lws-all">All</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="filter"
                  value="saved"
                  checked={selectedValue === "saved"}
                  id="lws-saved"
                  className="radio"
                  onChange={handleRadioChange}
                />
                <label for="lws-saved">Saved</label>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
