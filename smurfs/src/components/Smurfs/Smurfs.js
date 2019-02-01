import React from 'react';
import Smurf from './Smurf';

const Smurfs = props => {
  if(props.smurfs.length === 0) {
    return <div className="noSmurfs">empty</div>
  } else {
  return (
    <div className="smurfsHold">
        {props.smurfs.map((smurf, index) => (
            <Smurf smurf={smurf} key={smurf.id} deletingSmurf={props.deletingSmurf} updatingSmurf={props.updatingSmurf} />
        ))}
  </div>
  )
        }
}

export default Smurfs;
