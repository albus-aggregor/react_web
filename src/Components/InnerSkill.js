import React from 'react'
import './Styleskill.css'
function InnerSkill({d}){
    return(
        <div className="c5">
            <h5>{d.title}</h5>
            <p>{d.body}</p>
            <div className="c51">
				<a href={d.li}>Learn more </a>
				<span><a href={d.li}><i className="fa fa-angle-right"></i></a></span>
			</div>
        </div>
    );
}
export default InnerSkill;