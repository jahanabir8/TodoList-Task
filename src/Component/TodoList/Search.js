import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsSearch } from "react-icons/bs";
import "./TodoList.css";

const Search = ({handleSearch, search}) => {
  return (
    <form className="mb-3">
      <div className="search__container">
        <input
          className="form-control"
          onChange={handleSearch}
          type="text"
          placeholder="Do search By Priority Number"
          value={search}
        />
        <button className="search__btn">
          <BsSearch />
        </button>
      </div>
    </form>
  );
};

export default Search;
