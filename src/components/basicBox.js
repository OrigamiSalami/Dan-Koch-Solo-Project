import React from "react";

function Box({lon, location}) {
return(   
<div className = 'BasicBox'>
    <div>Location: {location && (location)}</div>
    <p>Current Temp: {lon && (lon)}</p>
</div>)

}

export default Box;