import { FETCHING_SMURFS,
  SMURFS_FETCHED,
  ADDING_SMURF,
  SMURF_ADDED,
  UPDATING_SMURF,
  SMURF_UPDATED,
  DELETING_SMURF,
  SMURF_DELETED
  } from '../actions';

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   smurfsFetched: false,
   addingSmurf: false,
   smurfAdded: false,
   updatingSmurf: false,
   smurfUpdated: false,
   deletingSmurf: false,
   smurfDeleted: false,
   error: null
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      case FETCHING_SMURFS:
          return {
              ...state,
              error: '',
              isFetching: true
          };
      case SMURFS_FETCHED:
          return {
              ...state,
              isFetching: false,
              smurfs: action.payload,
              error: ''
          };
      case ADDING_SMURF:
          return {
              ...state,
              smurfs: action.payload,
              isSaving: false,
              error: ''
          };
      case SMURF_ADDED:
          return {
              ...state,
              isSaving: true,
              error: ''
          };
      case UPDATING_SMURF:
          return {
              ...state,
              isUpdating: true,
              error: ''
          };
      case SMURF_UPDATED:
          return {
              ...state,
              smurfs: action.payload,
              isUpdating: false,
              error: ''
          };
      case DELETING_SMURF:
          return {
              ...state,
              isDeleting: true,
              error: ''
          };
      case SMURF_DELETED:
          return {
              ...state,
              smurfs: action.payload,
              isDeleting: false,
              error: ''
          };
      default:
          return state;
      }
}

export default rootReducer;