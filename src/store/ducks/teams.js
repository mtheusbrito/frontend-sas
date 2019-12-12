import Immutable from "seamless-immutable";
import { createReducer, createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getTeamsRequest: null,
  getTeamsSuccess: ["data"]
});

export const TeamsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: []
});

//Reducers
export const getSuccess = (state, { data }) => state.merge({ data });
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TEAMS_SUCCESS]: getSuccess
});
