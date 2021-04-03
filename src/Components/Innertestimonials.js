import React from 'react'
import './Styletestimonials.css'
function Innertestimonials({im}){
    return(
        <div className="t6">
            <div className="t61">
                <img src={im.image} alt=""/>
                <i class="fa fa-quote-left" aria-hidden="true"></i>
            </div>
            <div class="t8">
				<p>{im.body}</p> 
				<h3>{im.title}</h3>
				<p>{im.para}</p>
			</div>
        </div>
    );
}
export default Innertestimonials