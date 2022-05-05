import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid'; 
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';

export const Home = () => {
 const [data,setData]=useState([]);

 useEffect(()=>{
fetch('https://api.spacexdata.com/v3/launches?limit=100')
.then(res=>res.json())
.then(data=>setData(data))
// console.log(data)
 },[])



  return (
    <div>
      <Box sx={{ width: '100%',margin:'25px 0' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {/* filtering grid  */}
        <Grid item md={2} xs={12}>
           <Paper>
                <Filter></Filter>
           </Paper>
        </Grid>
        {/* display grid  */}
        <Grid item  md={10} xs={12}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
           {
              
           data.map(d=><Grid item xs={12} sm={12} md={3}><Card key={d.flight_number} data={d}>
              </Card></Grid>               
              )          
          }
          
           </Grid> 
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}
