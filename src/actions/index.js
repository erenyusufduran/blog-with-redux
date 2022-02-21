import jsonPlaceholder from "../apis/jsonPlaceholder";

// Action creators must return --plain-- JS objects with a type property!!
// Middleware to help us make requests in a redux application // - Redux-Thunk

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response });
  };

/* Normally Action Creators must return action objects, must have a type propery
      optionally have a 'payload'
*/

/* 
    In Redux Thunk, Action Creators can return action objects, NOT MUST
 can return a function. -> If an action objects returned, it must have a type
                                                           -> optionally have a 'payload'   
*/

/* Action Creator return smt either an object or function. --> dispatch 
    dispatch bring smt to redux thunk. Redux Thunk is says to Action are you a function?
    If it is not function it goes reducer normally.
    If it is a FUNCTION --> We will wait for the async process over. 
        AND this new action goes to dispatch again, then goes reducers.

        with Redux-Thunk we can change the response aswell.
*/
