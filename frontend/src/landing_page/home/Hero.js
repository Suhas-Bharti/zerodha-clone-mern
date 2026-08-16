import React from 'react';

function Hero() {
    return (
        <div className='container pt-5'> 
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='img-fluid mb-5 w-100' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invert in stocks, derivatives, mutual funds, and more</p>
                <button className='p-2 btn btn-primary fs-5 mb-5 w-auto px-5' style={{margin: "0 auto"}}> Sign up Now </button>
            </div>
        </div>
    );
}

export default Hero;