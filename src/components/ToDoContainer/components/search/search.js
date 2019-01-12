import React from "react";
import { SearchInput, SearchTitle } from './searchStyles.js';

const Search = ({search, fun}) => {
    return (
        <React.Fragment>
            <SearchTitle>Search Todos</SearchTitle>
            <SearchInput type="text" value={search} onChange={(e)=>fun(e)}/> 
        </React.Fragment>
    )
}
  
export default Search;
