/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import Axios from "axios";

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const SMURF_UPDATED = 'SMURF_UPDATED';
export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED';

export const fetchingSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    Axios
        .get(
            'http://localhost:3333/smurfs/'
        )
        .then(res => dispatch({ type: SMURFS_FETCHED, payload: res.data }))
        .catch(err => console.log('error fetching'))
}

export const addingSmurf = (smurf) => dispatch => {
    dispatch({ type: ADDING_SMURF });
    Axios
        .post(`http://localhost:3333/smurfs/`, smurf)
        .then(res => {
            dispatch({ type: SMURF_ADDED, payload: res.data });
        })
        .catch(err => console.log(err));
}

export const deletingSmurf = (id) => dispatch => {
    dispatch({ type: DELETING_SMURF });
    Axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            dispatch({ type: SMURF_DELETED, payload: res.data }, {params: {id: id}});
        })
        .catch(err => console.log(err));
}

export const updatingSmurf = (newName, newAge, newHeight, id) => dispatch => {
    dispatch({ type: UPDATING_SMURF });
    Axios
        .put(`http://localhost:3333/smurfs/${id}`, {
            id: id,
            name: newName,
            height: newHeight,
            age: newAge
        })
        .then(res => {
            dispatch({ type: SMURF_UPDATED, payload: res.data })
        })
        .catch(err => {
            console.log(err);
        })
}