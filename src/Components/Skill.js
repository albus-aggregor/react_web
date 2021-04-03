import React, {useEffect, useState } from 'react'
import InnerSkill from './InnerSkill';
import './Styleskill.css'
function Skill(){
    useEffect(()=>{
        fetchItems();
    },[]);
    const [data,setData]=useState([]);
    const fetchItems = () =>{
        const data_set=[
            {
                id:1,
                title:"Illustator",
                body:"An illustration is a decoration, interpretation or visual explanation of a text, concept or process, designed for integration in published media, such as posters, flyers, magazines, books, teaching materials, animations, video games and films.",
                li:"https://www.google.com/"
            },
            {
                id:2,
                title:"UI/UX Designer",
                body:"In an Information  is a decoration, interpretation or visual explanation of a text, concept or process, designed for integration in published media, such as posters, flyers, magazines, books, teaching materials, animations, video games and films.",
                li:"https://www.google.com/"
            },
            {
                id:3,
                title:"Logo Design",
                body:"The shape of your logo says a lot about your business. or artistic, traditional or cutting edge. Just like logo colors, logo shapes have meaning and this article lead the companies must no longer about them. Next  you’ll know exactly what shape to use.",
                li:"https://www.google.com/"
            }
        ];
        setData(data_set);
    }
    return(
        <div className="c1">
			<div className="c2">
				<h4>SKILLS</h4>
			</div>
			<div className="c3">
				<h3>What Can I Do</h3>
			</div>
			<div className="c4">
                {data.map(d =>(
                    <InnerSkill key={d.id} d={d}/>
                ))}
            </div>
		</div>
    );
}
export default Skill;