import React, { useEffect, useState } from 'react'
import './Styleicon.css'
function Icon(){
    useEffect(()=>{
        fetchicon();
    },[])
    const [icon,setIcon]=useState([])
    const fetchicon=()=>{
        const i_c=[
            {
                id:1,
                icon:"Img/l1.png"
            },{
                id:2,
                icon:"Img/l2.png"
            },{
                id:3,
                icon:"Img/l3.png"
            },{
                id:4,
                icon:"Img/l4.png"
            },{
                id:5,
                icon:"Img/l5.png"
            }]
            setIcon(i_c)
    }
    return(
        <div className="n1">
            {icon.map(ic=>(
                <img src={ic.icon} alt="error" key={ic.id} />
            ))}
        </div>
    );
}
export default Icon;