import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <h1 className='text-center mb-5 fs-2'>To create a ticket, select a relevant topic</h1>
                <div className='col-12 col-sm-6 col-md-4 mt-4 p-3'>
                    <p className='fs-4'>
                        <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Openning
                    </p>
                    <ul>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Minor</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Resident individual</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Non Resident Indian(NRI)</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Company, Partnership, HUF and LLP</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Glossary</li></a>
                    </ul>
                </div>

                <div className='col-12 col-sm-6 col-md-4 mt-4 p-3'>
                    <p className='fs-4'>
                        <i className="fa fa-user-circle-o" aria-hidden="true"></i> Your Zerodha Account
                    </p>
                    <ul>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Your Profile</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Account modification</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Client Master Report (CMR) and Depository Participant (DP)</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li> Nomination</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Transfer and conversion of securities</li></a>
                    </ul>
                </div>

                <div className='col-12 col-sm-6 col-md-4 mt-4 p-3'>
                    <p className='fs-4'>
                        <i className="fa fa-line-chart" aria-hidden="true"></i> Kite
                    </p>
                    <ul>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>IPO</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Trading FAQs</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Margin Trading Facility (MTF) and Margins</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Charts and orders</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Alerts and Nudges</li></a>
                    </ul>
                </div>

                <div className='col-12 col-sm-6 col-md-4 mt-4 p-3'>
                    <p className='fs-4'>
                        <i className="fa fa-inr" aria-hidden="true"></i> Funds
                    </p>
                    <ul>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Add Money</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Withdraw money</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Add bank accounts</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>eMandates</li></a>
                    </ul>
                </div>

                <div className='col-12 col-sm-6 col-md-4 mt-4 p-3'>
                    <p className='fs-4'>
                        <i className="fa fa-adjust" aria-hidden="true"></i> Console
                    </p>
                    <ul>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Portfolio</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Corporate actions</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Funds statement</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Reports</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Profile</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Segments</li></a>
                    </ul>
                </div>

                <div className='col-12 col-sm-6 col-md-4 mt-4 p-3'>
                    <p className='fs-4'>
                        <i className="fa fa-clock-o" aria-hidden="true"></i> Coin
                    </p>
                    <ul>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Mutual funds</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>National Pension Scheme (NPS)</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Fixed Deposit (FD)</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Features on Coin</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>Payments and Orders</li></a>
                        <a href='#' style={{ textDecoration: 'none', lineHeight: '2.5' }}><li>General</li></a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;