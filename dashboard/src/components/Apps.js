import React from "react";

const Apps = () => {
  const apps = [
    {
      name: "Smallcase",
      desc: "Invest in curated portfolios built by experts.",
      category: "Investing"
    },
    {
      name: "Sensibull",
      desc: "Options trading strategies & analytics platform.",
      category: "Options"
    },
    {
      name: "Streak",
      desc: "Create and deploy algo strategies without coding.",
      category: "Algo Trading"
    },
    {
      name: "Coin",
      desc: "Commission-free direct mutual fund investments.",
      category: "Mutual Funds"
    },
    {
      name: "Console",
      desc: "Advanced reports, P&L analytics and tax reports.",
      category: "Reports"
    },
    {
      name: "Kite Connect",
      desc: "Build your own trading apps using APIs.",
      category: "Developer"
    },
    {
      name: "TradingView",
      desc: "Advanced charting platform with 100+ technical indicators.",
      category: "Charting"
    },
    {
      name: "Market Pulse",
      desc: "Live market movers, heatmaps & sector performance.",
      category: "Market Analysis"
    },
    {
      name: "Risk Manager",
      desc: "Analyze portfolio risk, exposure & diversification score.",
      category: "Risk Tools"
    },
    {
      name: "IPO Center",
      desc: "Apply, track and manage IPO investments easily.",
      category: "IPO"
    },
    {
      name: "Backtest Lab",
      desc: "Backtest trading strategies using historical data.",
      category: "Strategy Testing"
    },
    {
      name: "News Terminal",
      desc: "Real-time financial news and corporate announcements.",
      category: "News"
    },
    {
      name: "Options Calculator",
      desc: "Calculate option premiums, Greeks and payoff charts.",
      category: "Options"
    },
    {
      name: "Screener Pro",
      desc: "Filter stocks based on technical & fundamental parameters.",
      category: "Screening"
    }
  ];

  return (
    <div className="apps-page">
      <div className="apps-header">
        <h2>Trading Apps & Tools</h2>
        <p>Enhance your trading experience with powerful tools</p>
      </div>

      <div className="apps-grid">
        {apps.map((app, index) => (
          <div className="app-card" key={index}>
            <div className="app-badge">{app.category}</div>
            <h3>{app.name}</h3>
            <p>{app.desc}</p>
            <div className="app-footer">
              <button className="launch-btn">Launch</button>
              <button className="learn-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;