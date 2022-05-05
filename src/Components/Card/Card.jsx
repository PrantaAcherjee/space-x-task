import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
 
const Card = ({data}) => {
  return (
    <>   
    <Paper>
        <img style={{height:'80%',width:'80%'}} src={data.links.mission_patch_small} alt={data.mission_name} />
        <Box style={{padding:'12px'}}>
        <p>Mission Ids: {data.mission_id[0]}</p>
        <p>Launch Year: {data.launch_year}</p>
        <p>Successful Launch: {data.launch_success}</p>
        <p>Successful Landing: {data.land_success}</p>
        </Box>
      </Paper>     
    </>
  )
}

export default Card