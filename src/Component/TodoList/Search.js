import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsSearch } from "react-icons/bs";
import "./TodoList.css";

const Search = () => {
  return (
    <form className="mb-3">
      <div className="search__container">
        <input
          className="form-control"
          type="text"
          placeholder="Do search By Priority Number"
        />
        <button className="search__btn">
          <BsSearch />
        </button>
      </div>
    </form>
  );
};

export default Search;
