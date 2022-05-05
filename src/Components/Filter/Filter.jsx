import React from 'react';
import "./Filter.css";

const Filter=()=>{
return(
<container>
 
 <div style={{marginBottom:'10px'}}>
 <h3>Filters</h3>
  <h4 style={{textAlign:'center'}}>Launch Year</h4>
  <hr />
 </div>
 {/* buttons */}
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button className="btn-style">2006</button>     
 <button className="btn-style">2007</button>     
 </div>
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button className="btn-style" >2008</button>     
 <button className="btn-style" >2009</button>     
 </div>
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button className="btn-style">2010</button>     
 <button className="btn-style">2011</button>     
 </div>
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button className="btn-style" >2012</button>     
 <button className="btn-style">2013</button>     
 </div>
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button className="btn-style">2014</button>     
 <button className="btn-style">2015</button>     
 </div>
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button className="btn-style">2016</button>     
 <button className="btn-style">2017</button>     
 </div>
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button className="btn-style">2018</button>     
 <button className="btn-style">2019</button>     
 </div>
 <div className="single-btn">
 <button className="btn-style">2020</button>                 
 </div>
 <div>
   <h4 style={{textAlign:'center'}}>Successful Launch</h4>
   <hr />
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button className="btn-style">True</button>     
 <button className="btn-style">False</button>     
 </div>
 </div>
 <div>
   <h4 style={{textAlign:'center'}}>Successful Landing</h4>
   <hr />
 <div style={{display:'flex',justifyContent:'space-evenly'}}>
 <button className="btn-style">True</button>     
 <button className="btn-style">False</button>     
 </div>
 </div>
  
</container>
)
}
export default Filter;