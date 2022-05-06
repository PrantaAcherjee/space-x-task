import React,{useState} from 'react';
import "./Filter.css";

const Filter=({filterItem,launchItem,landingItem})=>{
  // console.log(data);
  
return(
<>
 <div>
 <h3>Filters</h3>
  <h4 style={{textAlign:'center'}}>Launch Year</h4>
  <hr />
 </div>
 {/* buttons */}
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
  
  <button  onClick={()=>filterItem("2006")} className="btn-style">2006</button>    
  <button onClick={()=>filterItem("2007")}  className="btn-style">2007</button>  
  
 </div>

 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button onClick={()=>filterItem("2008")}  className="btn-style">2008</button>     
 <button onClick={()=>filterItem("2009")}  className="btn-style" >2009</button>     
 </div>
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button onClick={()=>filterItem("2010")}  className="btn-style">2010</button>     
 <button onClick={()=>filterItem("2011")}  className="btn-style">2011</button>     
 </div>
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button onClick={()=>filterItem("2012")}  className="btn-style" >2012</button>     
 <button onClick={()=>filterItem("2013")} className="btn-style">2013</button>     
 </div>
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button onClick={()=>filterItem("2014")} className="btn-style">2014</button>     
 <button onClick={()=>filterItem("2015")} className="btn-style">2015</button>     
 </div>
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button onClick={()=>filterItem("2016")} className="btn-style">2016</button>     
 <button onClick={()=>filterItem("2017")} className="btn-style">2017</button>     
 </div>
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button onClick={()=>filterItem("2018")} className="btn-style">2018</button>     
 <button onClick={()=>filterItem("2019")} className="btn-style">2019</button>     
 </div>
 <div className="single-btn">
 <button onClick={()=>filterItem("2020")} className="btn-style">2020</button>                 
 </div>
 <div>
   <h4 style={{textAlign:'center'}}>Successful Launch</h4>
   <hr />
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button onClick={()=>launchItem(true)}
  className="btn-style">True</button>     
 <button onClick={()=>launchItem(false)}        className="btn-style">False</button>     
 </div>
 </div>
 <div>
   <h4 style={{textAlign:'center'}}>Successful Landing</h4>
   <hr />
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button onClick={()=>landingItem(true)} className="btn-style">True</button>     
 <button onClick={()=>landingItem(false)} className="btn-style">False</button>     
 </div>
 </div>
  
</>
)
}
export default Filter;