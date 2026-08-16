import React from 'react';

function Education() {
    return (
        <div className='container'>
            <div className='row align-items-center gy-4'>

                <div className='col-12 col-md-6 text-center'>
                     <img src='media/images/education.svg' className='img-fluid' style={{width:"70%"}}/>  
                </div>

                <div className='col-12 col-md-6 mt-md-5'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}} >Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    <p className='mt-3'>TradingQ&A, the most active trading and investment market related queries.</p>
                    <a href='' style={{textDecoration:"none"}} >TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a> 
                </div>

            </div>
        </div>
    );
}

export default Education;