import React from 'react'
import './Styleabout.css'
function About(){
    let url=''
    return(
        <div className="r">
            <div className="r0">
                <div className="r1">
                    <h4>ABOUT ME</h4>
                </div>
                <div className="r2">
                    <div className="r3">
                        <h2>You can't use up creativity.
                        The more you use. the more
                        you have in your signifant mind.</h2>
                        <p>Laurelyn Collins who pointed out the dual attribution and unlikely assignment to Wilde.It is our shame and our loss when we discourage people from being creative.Too often creativity is smothered rather than nurtured. There has to be a climate in which new ways of thinking, perceiving, questioning are encouraged. People also have to feel they are needed</p>
                        <div className="r31">
                            <a href={url} className="btn2">DOWNLOAD RESUME</a>
                            <span><a href={url}><i className="fa fa-angle-right"></i></a></span>
                        </div>
                    </div>
                    <div className="r4">
                        <h2>Any type of question & Discussion.</h2>
                        <p>Ideas among a teacher and students or among students for the purpose of furthering students thinking, learning, problem solving, understanding, or literary appreciation</p>
                        <a href={url} className="btn3">Lorem@ipsum.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;