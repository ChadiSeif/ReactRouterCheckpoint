import React from "react";
import input from "react-bootstrap";
import "./../FilterByTitle/FilterByTitle.css";

const FilterByTitle = ({ search, setSearch }) => {
  return (
    <div>
      <input
        className="input"
        class="form-control"
        type="text"
        placeholder="Search Movie"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      ></input>
    </div>
  );
};

export default FilterByTitle;
