import React from 'react';
import { Link } from 'react-router-dom';

function Team() {
    return (
        <div className='container mb-5'>
            <div className='row p-5 border-top'>
                <h1 className='text-center'>
                    People
                </h1>
            </div>
            <div className='row mt-3 text-muted p-3'>
                <div className='col-6 text-center'>
                     <img src='media/images/bharti.png' style={{borderRadius:"100%", width:"50%"}} />
                     <h1 className='mt-3' style={{fontSize:"1.5em"}}>
                        Suhas Bharti <br />
                     </h1>
                     <h6>
                        Founder, CEO
                     </h6>
                </div>
                <div className='col-6' style={{ fontSize: "1.2em", lineHeight: "2" }}>
                    <p>
                        Suhas bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on 
                        <Link to="/" style={{textDecoration:"none"}}> HomePage</Link> / 
                        <a href="#" style={{textDecoration:"none"}}> Trading Q&amp;A</a> / 
                        <a href="#" style={{textDecoration:"none"}}> Twitter</a>
                    </p>
                </div>
            </div>
        </div >
    );
}

export default Team;