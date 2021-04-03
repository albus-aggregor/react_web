import React from 'react'
import './Styleheader.css'
function Header(){
    let url=''
    const onclick=()=>{
        var m=document.getElementById("nav2");
			if(m.style.display==="block"){
				m.style.display="none";
			}
			else{
				m.style.display="block";
			}
    }
    return(
            <div className="header">
                <div className="nav1">
                    <a href={url} className="icon"><span>WEB</span>.DEV</a>
                    <ul className="nav">
                        <li><a href={url}>About Us</a></li>
                        <li><a href={url}>Services</a></li>
                        <li><a href={url}>Portfolio</a></li>
                        <li><a href={url}>Contact Us</a></li>
                    </ul>
                    <i class="fa fa-bars" onClick={()=>onclick()}></i>
                </div>
                <div class="nav2" id="nav2">
                    <ul class="nav22">
                        <li><a href={url}>About Us</a></li>
                        <li><a href={url}>Services</a></li>
                        <li><a href={url}>Portfolio</a></li>
                        <li><a href={url}>Contact Us</a></li>
                    </ul>
                </div>
            </div>
    );
}
export default Header;