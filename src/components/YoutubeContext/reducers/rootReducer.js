function rootReducer(state, action) {
  switch (action.type) {
    case "SEARCH":
      return { searchTerm: action.value };
    case "TEST":
      return { searchTerm: "Works!" };
    default:
      throw new Error();
  }
}

export default rootReducer;
