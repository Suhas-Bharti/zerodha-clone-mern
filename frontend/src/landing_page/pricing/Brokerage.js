import React from "react";

function Brokerage() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                {/* Heading */}
                <h1 className="fs-3 text-muted mb-4">Charges explained</h1>

                {/* LEFT COLUMN */}
                <div className="col-6 p-3">
                    <p className="fs-5 text-muted">
                        Securities/Commodities transaction tax
                    </p>
                    <p className="small text-secondary">
                        Tax by the government when transacting on the exchanges. Charged on both
                        buy and sell sides when trading equity delivery. Charged only on selling
                        side when trading intraday or on F&O.
                        <br />
                        <br />
                        When trading at Zerodha, STT/CTT can be a lot more than the brokerage we
                        charge. Important to keep a tab.
                    </p>

                    <p className="fs-5 text-muted">
                        Transaction / Turnover Charges
                    </p>
                    <p className="small text-secondary">
                        Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
                    </p>

                    <ul className="small text-secondary">
                        <li>
                            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to
                            ₹10,000 per crore.
                        </li>
                        <li>
                            BSE SS and ST groups revised to ₹1,00,000 per crore of gross turnover.
                        </li>
                        <li>
                            BSE Group A, B & other non-exclusive scrips – ₹375 per crore.
                        </li>
                        <li>
                            BSE M, MT, TS and MS groups – ₹275 per crore of gross turnover.
                        </li>
                    </ul>

                    <p className="fs-5 text-muted">Call & Trade</p>
                    <p className="small text-secondary">
                        Additional charges of ₹50 per order for orders placed through a dealer at
                        Zerodha including auto square-off orders.
                    </p>

                    <p className="fs-5 text-muted">Stamp charges</p>
                    <p className="small text-secondary">
                        Stamp charges by the Government of India as per the Indian Stamp Act of
                        1899 for transacting in instruments on the stock exchanges and
                        depositories.
                    </p>

                    <p className="fs-5 text-muted">NRI brokerage charges</p>
                    <ul className="small text-secondary">
                        <li>
                            For a non-PIS account: 0.5% or ₹50 per executed order for equity and
                            F&O (whichever is lower).
                        </li>
                        <li>
                            For a PIS account: 0.5% or ₹200 per executed order for equity
                            (whichever is lower).
                        </li>
                        <li>
                            ₹500 + GST charged as yearly account maintenance charges (AMC).
                        </li>
                    </ul>

                    <p className="fs-5 text-muted">
                        Account with debit balance
                    </p>
                    <p className="small text-secondary">
                        If the account is in debit balance, any order placed will be charged
                        ₹40 per executed order instead of ₹20 per executed order.
                    </p>

                    <p className="fs-5 text-muted">
                        Charges for Investor’s Protection Fund Trust (IPFT) by NSE
                    </p>
                    <ul className="small text-secondary">
                        <li>
                            Equity and Futures – ₹10 per crore + GST of the traded value.
                        </li>
                        <li>
                            Options – ₹50 per crore + GST of the traded value (premium value).
                        </li>
                        <li>
                            Currency – ₹0.05 per lakh + GST (Futures) and ₹2 per lakh + GST
                            (Options).
                        </li>
                    </ul>

                    <p className="fs-5 text-muted">
                        Margin Trading Facility (MTF)
                    </p>
                    <ul className="small text-secondary">
                        <li>
                            MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                        </li>
                        <li>
                            Interest is applied from T+1 day till the day MTF stocks are sold.
                        </li>
                        <li>
                            MTF Brokerage: 0.3% or ₹20 per executed order, whichever is lower.
                        </li>
                        <li>
                            MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.
                        </li>
                    </ul>
                </div>


                {/* RIGHT COLUMN */}
                <div className="col-6 p-3">
                    <p className="fs-5 text-muted">GST</p>
                    <p className="small text-secondary">
                        Tax levied by the government on the services rendered. 18% of
                        (brokerage + SEBI charges + transaction charges).
                    </p>

                    <p className="fs-5 text-muted">SEBI Charges</p>
                    <p className="small text-secondary">
                        Charged at ₹10 per crore + GST by Securities and Exchange Board of India.
                    </p>

                    <p className="fs-5 text-muted">
                        DP (Depository participant) charges
                    </p>
                    <p className="small text-secondary">
                        ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged
                        when stocks are sold, irrespective of quantity.
                    </p>

                    <p className="small text-secondary">
                        Female demat account holders (as first holder) get a discount of ₹0.25
                        per transaction.
                    </p>

                    <p className="fs-5 text-muted">Pledging charges</p>
                    <p className="small text-secondary">
                        ₹30 + GST per pledge request per ISIN.
                    </p>

                    <p className="fs-5 text-muted">
                        AMC (Account maintenance charges)
                    </p>
                    <p className="small text-secondary">
                        For BSDA demat account: Zero charges if holding value is less than
                        ₹4,00,000.
                    </p>

                    <p className="small text-secondary">
                        For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90
                        days).
                    </p>

                    <p className="fs-5 text-muted">
                        Corporate action order charges
                    </p>
                    <p className="small text-secondary">
                        ₹20 + GST will be charged for OFS / buyback / takeover / delisting
                        orders placed through Console.
                    </p>

                    <p className="fs-5 text-muted">
                        Off-market transfer charges
                    </p>
                    <p className="small text-secondary">₹25 per transaction.</p>

                    <p className="fs-5 text-muted">
                        Physical CMR request
                    </p>
                    <p className="small text-secondary">
                        First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
                        subsequent requests.
                    </p>

                    <p className="fs-5 text-muted">
                        Payment gateway charges
                    </p>
                    <p className="small text-secondary">
                        ₹9 + GST (Not levied on transfers done via UPI).
                    </p>

                    <p className="fs-5 text-muted">
                        Delayed Payment Charges
                    </p>
                    <p className="small text-secondary">
                        Interest is levied at 18% a year or 0.05% per day on the debit balance in
                        your trading account.
                    </p>

                    <p className="fs-5 text-muted">
                        Trading using 3-in-1 account with block functionality
                    </p>
                    <ul className="small text-secondary">
                        <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                        <li>Intraday Brokerage: 0.05% per executed order.</li>
                    </ul>
                </div>

            </div>

            <div className="row">
                <p className="fs-5 text-muted"> Disclaimer</p>
                <p className="small text-secondary mb-3">
                    For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
                </p>
            </div>
        </div>
    );
}

export default Brokerage;
