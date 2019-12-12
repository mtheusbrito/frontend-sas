import Immutable from "seamless-immutable";
import { createReducer, createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getTeamsRequest: null,
  getTeamsSuccess: ["data"],
  selectTeam: [''], 

});

export const TeamsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [], 
  active: JSON.parse(localStorage.getItem('@Omni:team')) || null, 
});

//Reducers
export const getSuccess = (state, { data }) => state.merge({ data });
export const selectTeam = (state, {team}) => {
  localStorage.setItem('@Omni:team', JSON.stringify(team));

  return state.merge({ active: team});

}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TEAMS_SUCCESS]: getSuccess,
  [Types.SELECT_TEAM]: selectTeam
});
