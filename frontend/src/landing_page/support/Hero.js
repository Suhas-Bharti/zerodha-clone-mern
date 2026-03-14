import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className='mb-3' id='supportWrapper'>
                <h4 className='fs-3'>Support portal</h4>
                <a className='fs-5' href='#'>Track Tickets</a>
            </div>

            <div className='row'>
                <div className='col-1'></div>
                <div className='col-4 p-4'>
                    <h5>Search for an answer or browse help topics to create a ticket</h5>
                    <div className='searchSupport mb-3'>
                        <i class="fa fa-search" aria-hidden="true"></i>
                        <input
                            type="text"
                            placeholder="Eg: How do I open my account, How do I activate F&O..."
                        />
                    </div>
                    <a href=''>Track account openning</a>
                    <a href=''>Track segment activation</a>
                    <a href=''>Intraday margins</a>
                    <a href=''>Kite user manual</a>
                </div>
                <div className='col-2'></div>
                <div className='col-4 p-4'>
                    <h5 className='mb-4'>Featured</h5>
                    <ol>
                        <li className='mb-2'> <a href=''>Special live trading session on Sunday, February 1, 2026</a> </li>
                        <li> <a href=''>Intermittent issue on Kite [Resolved]</a> </li>
                    </ol>  
                </div>
                <div className='col-1'></div>
            </div>
        </section >
    );
}

export default Hero;
