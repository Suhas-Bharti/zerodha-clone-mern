import React from 'react';

function Footer() {
    return (
        <footer className='bg-light border-top'>
            <div className='container'>
                <div className='row mt-5 gy-4'>
                    <div className='col-12 col-sm-6 col-md-3'>
                        <img src='media/images/logo.svg' style={{ width: "45%", maxWidth: "150px" }} alt="Zerodha Logo" />
                        <p className='mt-4' style={{ fontSize: "15px" }}>
                            &copy; 2010-2024, Not Zerodha Booking Ltd. <br /> All rights reserved.
                        </p>
                    </div>

                    <div className='col-12 col-sm-6 col-md-3'>
                        <p><strong>Company</strong></p>
                        <a href='#'>About</a> <br />
                        <a href='#'>Products</a> <br />
                        <a href='#'>Pricing</a> <br />
                        <a href='#'>Referral programme</a> <br />
                        <a href='#'>Careers</a> <br />
                        <a href='#'>Zerodha.tech</a> <br />
                        <a href='#'>Press &amp; media</a> <br />
                        <a href='#'>Zerodha cares (CSR)</a> <br />
                    </div>

                    <div className='col-12 col-sm-6 col-md-3'>
                        <p><strong>Support</strong></p>
                        <a href='#'>Contact</a> <br />
                        <a href='#'>Support portal</a> <br />
                        <a href='#'>Z-Connect blog</a> <br />
                        <a href='#'>List of charges</a> <br />
                        <a href='#'>Download &amp; resources</a> <br />
                    </div>

                    <div className='col-12 col-sm-6 col-md-3'>
                        <p><strong>Account</strong></p>
                        <a href='#'>Open an account</a> <br />
                        <a href='#'>Fund transfer</a> <br />
                        <a href='#'>60 days challenge</a> <br />
                    </div>
                </div>

                <div className='mt-5 text-muted' style={{ fontSize: "14px" }}>
                    <p>
                        Zerodha Broking Ltd.: Member of NSE and BSE - SEBI registration No.: INZ00031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. - SEBI registration No.: IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 4605 - SEBI Registration No.: INZ00038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollar Colony, Opp. Clarence Public School, J.P. Nagar 4th Phase, Bangluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
                    </p>
                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filling complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benifits: Effective Communication, Speedy redressal of the grievances.
                    </p>
                    <p>
                        Investments in insecurities market are subjected to market risks; read all the related documents carefully before investing.
                    </p>
                    <p>
                        "Prevent unauthorised transactions in your account. Update your mobile number/e-mail IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors."
                    </p>
                    <div className='text-center footer-last py-3'>
                        <a href='#'>NSE</a>
                        <a href='#'>BSE</a>
                        <a href='#'>MCX</a>
                        <a href='#'>Term &amp; conditions</a>
                        <a href='#'>Policies &amp; procedures</a>
                        <a href='#'>Privacy policy</a>
                        <a href='#'>Disclosure</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
