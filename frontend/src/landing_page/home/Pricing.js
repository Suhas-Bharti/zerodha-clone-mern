import React from 'react';

function Pricing() {
    return (
        <div className='container'>
            <div className='row align-items-center gy-4'>
                <div className='col-12 col-md-5 offset-md-1'>
                    <h1 className='fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}} >See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                </div>
                <div className='col-12 col-md-5 mb-5'>
                     <div className='row text-center'>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and <br/> direct mutual funds</p>
                        </div>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;