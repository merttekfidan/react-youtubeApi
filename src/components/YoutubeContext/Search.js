import React, { useState, useEffect, useContext } from "react";
import { Context } from "./Store";
function Search() {
  const [state, dispatch] = useContext(Context);
  const [val, setVal] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", value: val });
  };
  useEffect(() => {
    console.log(state.searchTerm);
  }, [state.searchTerm]);
  return (
    <div>
      <form onSubmit={formSubmit}>
        Count: {state.searchTerm}
        <input value={val} onChange={(e) => setVal(e.target.value)} />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default Search;
