import React,{useState,useEffect} from 'react';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import "./Home.css";

export const Home = () => {
 const [data,setData]=useState([]);
 const [display,setDisplay]=useState([]);
  
  
//  base url 
 useEffect(()=>{
fetch('https://api.spacexdata.com/v3/launches?limit=100')
.then(res=>res.json())
.then(data=>{
  setData(data);
  setDisplay(data);
   
})
// console.log(data)
 },[])

 

// filter by year 
 const filterItem=(filtering)=>{
  const updateItem=data.filter((d)=>{
    return d.launch_year===filtering;
  })
  setDisplay(updateItem)
  }

  // filter by launch 
 const launchItem=(filtering)=>{
  const updateItem=data.filter((d)=>{
    return d.launch_success===filtering;
  })
  setDisplay(updateItem);
  }
//  filter by landing 
 const landingItem=(filtering)=>{
  const updateItem=data.filter((d)=>{
    return d.rocket.first_stage.cores[0].land_success===filtering;
  })
  setDisplay(updateItem);
  }
  

  return (
    <div className='display-grid'>
       {/* filtering grid  */}
      <div className='first-div'>                      
        <Filter filterItem={filterItem} launchItem={launchItem} landingItem={landingItem}></Filter>                     
      </div>

         {/* display grid  */}
         <div className='second-div'>
           {
             data.length===0?<h3 style={{color:'blue'}}>Loading....</h3>:
             <div className='map-div'>                   
           {             
           display.map(d=><div><Card key={d.flight_number} data={d}>
              </Card></div>               
              )          
          }                 
        </div>
           }
        
        </div>
    </div>
  )
}
