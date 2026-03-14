import React from 'react';

function Hero() {
    return (
        <div className='container border-bottom'>
            <div className='row text-center mt-5 p-4'>
                <h1>Zerodha Products</h1>
                <h3 className='text-muted fs-4 m-2'>Sleek, modern, and intuitive trading platforms</h3>
                <p>Check out our &nbsp;
                    <a href='#' style={{ textDecoration: "none" }}>Investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Hero;