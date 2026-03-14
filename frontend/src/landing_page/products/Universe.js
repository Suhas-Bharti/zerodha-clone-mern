import React from 'react';

function Universe() {
    return (
        <div className='container'>
            <div className='row mt-5 text-center mt-5'>
                <h1 className='fs-2 mb-3'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms.</p>
            </div>
            <div className='row mt-3 text-center'>
                <div className='col-4 p-5'>
                    <img src='media/images/smallcaseLogo.png' style={{ marginBottom: "20px" }} />
                    <p>
                        Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
                    </p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/streakLogo.png' style={{ marginBottom: "20px", width: "45%" }} />
                    <p>
                        Systematic trading platform that allows you to create and backtest strategies without coding.
                    </p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/sensibullLogo.svg' style={{ marginBottom: "25px", width: "67%" }} />
                    <p>
                        Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                    </p>
                </div>
            </div>
            <div className='row mt-3 text-center'>
                <div className='col-4 p-5'>
                    <img src='media/images/zerodhaFundhouse.png' style={{ marginBottom: "20px", width: "50%" }} />
                    <p>
                        Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/goldenpiLogo.png' style={{ marginBottom: "20px", width: "48%" }} />
                    <p>
                        Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                    </p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/dittoLogo.png' style={{ marginBottom: "28px", width: "30%" }} />
                    <p>
                        Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free
                    </p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}> Sign up Now </button>
            </div>
        </div>
    );
}

export default Universe;