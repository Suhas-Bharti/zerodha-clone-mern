import React from 'react';

function Hero() {
    return (
        <div className='container mt-5'>
            <div className='row border-bottom text-center'>
                <h1>Pricing</h1>
                <h3 className='mb-5 mt-3 fs-6 text-muted'>Free equity investments and flat ₹20 traday and F&O trades</h3>
            </div>

            <div className='row mt-4 text-center'>
                <div className='col-12 col-sm-6 col-md-4 p-4'>
                    <img src='media/images/pricingEquity.svg' className='img-fluid' />
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-12 col-sm-6 col-md-4 p-4'>
                    <img src='media/images/intradayTrades.svg' className='img-fluid' />
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-12 col-sm-6 col-md-4 p-4'>
                    <img src='media/images/pricingEquity.svg' className='img-fluid' />
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='mt-4'>All direct mutual fund investments are absolutely <br />free — ₹ 0 commissions &amp; DP charges.</p>
                </div>
            </div>
            <div className='row text-center'>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invert in stocks, derivatives, mutual funds, and more</p>
                <button className='p-2 btn btn-primary fs-5 mb-5 w-auto px-5' style={{margin: "0 auto"}}> Sign up Now </button>
            </div>
        </div>
    );
}

export default Hero;