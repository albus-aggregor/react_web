import React, { useEffect, useState } from 'react'
import Innertestimonials from './Innertestimonials';
import './Styletestimonials.css'
function Testimonials(){
    useEffect(()=>{
        fetchdata();
    },[])
    const [d_img,setD_img]=useState([])
    const fetchdata=()=>{
        const d_i=[
            {
                id:1,
                image:"Img/html.jpg",
                body:"HyperText Markup Language (HTML) is the set of markup symbols or codes inserted into a file.",
                title:"Evaulation",
                para:"display on the Internet"
            },
            {
                id:2,
                image:"Img/angular.jpg",
                body:"HyperText Markup Language (HTML) is the set of markup symbols or codes inserted into a file.",
                title:"Evaulation",
                para:"display on the Internet"
            },
            {
                id:3,
                image:"Img/react.png",
                body:"HyperText Markup Language (HTML) is the set of markup symbols or codes inserted into a file.",
                title:"Evaulation",
                para:"display on the Internet"
            }
        ]
        setD_img(d_i)
    }
    return(
        <div className="t1">
			<div className="t4">
				<h4>TESTIMONIALS</h4>
				<h2>What they say about me</h2>
				<p>Laurelyn Collins who pointed out the dual attribution and unlikely assignment to Wilde.It is our shame and our loss when we discourage.</p>
			</div>
            <div className="t5">
				{d_img.map(im=>(
                    <Innertestimonials key={im.id} im={im}/>
                ))}
            </div>
        </div>
    );
}
export default Testimonials