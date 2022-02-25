// Must return anything even 'null', but should return something.
// Must return any value besides 'UNDEFINED'. DONT RETURN UNDEFINED.
// When starting the program, reducer will call so we can't return undefined values.
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
