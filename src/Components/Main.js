import React from 'react'
import './Stylemain.css'
function Main(){
    let url=''
    return(
        <div className="main">
            <div className="h0">
                <div className="h1">
                    <p>HELLO I'M<span> WEB DEVELOPER</span></p>
                </div>
                <div className="h2">
                    <h2>William Andersons</h2>
                </div>
                <div className="h3">
                    <p>As my technical side, I have leaned c,python,HTML,CSS,javascript and oracle i am interested in working with develop webpage</p>
                </div>
                <div className="h4">
                    <div className="h41"><button className="btn">HIRE ME</button></div>
                    <div className="h42"><a href={url} className="btn1">DOWNLOAD RESUME</a></div>
                    <div className="h43"><a href={url}><i className="fa fa-angle-right"></i></a></div>
                </div>
		    </div>
        </div>
    );
}
export default Main;