import React, { useEffect, useState } from 'react'
import Innerportfolio from './Innnerportfolio';
import './Styleportfolio.css'
function Portfolio(){
    useEffect(()=>{
        fetchimg();
    },[])
    const [img1,setImg]=useState([])
    const fetchimg=()=>{
        const img=[
            {
                id:1,
                image:"Img/html.jpg"
            },
            {
                id:2,
                image:"Img/angular.jpg"
            },
            {
                id:3,
                image:"Img/react.png"
            }
        ]
        setImg(img)
    }
    let url=""
    return(
        <div className="i1">
            <div className="i2">PORTFOLIO</div>
            <div className="i3">My Work Recently</div>
            <div className="i4">
                <ul className="nav">
                    <li><a href={url}>All</a></li>
                    <li><a href={url}>Illustrator</a></li>
                    <li><a href={url}>UI/UX</a></li>
                    <li><a href={url}>Logo</a></li>
                </ul>
            </div>
            <div className="i5">
                {
                    img1.map(i=>(
                        <Innerportfolio key={i.id} im={i}/>
                    ))
                }
            </div>
        </div>
    
    );
}
export default Portfolio;