import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

//Types e Action Creators
const { Types, Creators } = createActions({
  signInRequest: ["email", "password"],
  signInSuccess: ["token"]
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  //usuario logado ou nao
  signedIn: !!localStorage.getItem('@Omni:token'),
  token: localStorage.getItem("@Omni:token") || null
});

//Reducers
export const success = (state, { token }) => {
  console.log(token);
  return state.merge({ signedIn: true, token });
};

//Reducers to types

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success
});
