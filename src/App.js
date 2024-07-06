
import React, {useEffect, useState} from "react"
import Box from "./components/basicBox.js";

// const someCity = fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=39.500820&lon=-106.146492&exclude={part}&appid=e76c165b13bb9889559081d9f28990cb&units=imperial`)
// const lon = someCity.lon
const data = {copperMtn: `https://api.openweathermap.org/data/3.0/onecall?lat=39.500820&lon=-106.146492&exclude={part}&appid=e76c165b13bb9889559081d9f28990cb&units=imperial`}
const App = () =>{
    const [coor, setCoor] = useState('state');
        useEffect(() => {(async () => {
            const promises = Object.values(data)
            const requests = promises.map(async (url) => {
                const response = await fetch(url)
                const data = response.json()
                console.log('data', data)
                return data
            })
            const results = await Promise.all(requests)
            setCoor(results[0].current.temp)
        })()
    }, [])
    console.log('coor', coor)
    //     fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=39.500820&lon=-106.146492&exclude={part}&appid=e76c165b13bb9889559081d9f28990cb&units=imperial`)
    //     .then((res) => res.json())
    //     .then(data => {
    //         const thisData = data.lon
    //         setCoor(thisData);
    //     })
    //     .catch((Err) => console.log(Err))
    // })
    return (
        <h1>
            <Box lon={coor} location='Copper'/>
            {/* <Box lon={coor} location='Winter Park'/>
            <Box lon={coor} location='Eldora'/>
            <Box lon={coor} location='A-Basin'/> */}
        </h1>
    )
}

export default App