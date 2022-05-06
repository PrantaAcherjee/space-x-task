import React from 'react';
import "./Card.css";

const Card = ({data}) => {
  return (
    <>   
    <div className="card-div">
        <img style={{height:'80%',width:'80%',padding:'10px'}} src={data.links.mission_patch_small} alt={data.mission_name} />
        <div style={{padding:'12px'}}>
        <p>Mission Ids: {data.mission_id[0]}</p>
        <p>Launch Year: {data.launch_year}</p>
        <p>Successful Launch: {data.launch_success}</p>
        <p>Successful Landing: {data.land_success}</p>
    </div>
      </div>     
    </>
  )
}

export default Card