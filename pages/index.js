// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "#0b5cff" }}>💹 Invest Sikho</h1>
      <p style={{ textAlign: "center" }}>
        سیکھو سمجھو اور نفع کماؤ — Learn Forex & Investment in simple Urdu + English
      </p>

      <section style={{ marginTop: 30 }}>
        <h2>📈 What is Forex Trading?</h2>
        <p>
          Forex = “Foreign Exchange” — buying & selling of currencies and gold.
          Example: <strong>XAU/USD</strong> = Gold vs US Dollar.  
          You buy when you expect price to rise 🆙, sell when you expect it to fall 🔻.
        </p>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>🕒 Major Market Sessions</h2>
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr style={{ background: "#eef" }}>
              <th>Session</th>
              <th>Approx Pakistan Time</th>
              <th>Feature</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>🇯🇵 Tokyo</td><td>4 am – 1 pm</td><td>Asian liquidity</td></tr>
            <tr><td>🇬🇧 London</td><td>12 pm – 9 pm</td><td>High volatility ⚡</td></tr>
            <tr><td>🇺🇸 New York</td><td>5 pm – 2 am</td><td>News impact zone 📰</td></tr>
          </tbody>
        </table>
        <p>📊 Tip: The overlap of London + New York = best movement window.</p>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>🕯️ Candle & Chart Basics</h2>
        <ul>
          <li>🟩 Green candle = Price went up (bullish)</li>
          <li>🟥 Red candle = Price went down (bearish)</li>
          <li>Each candle shows <strong>Open – High – Low – Close</strong></li>
          <li>Support = floor 🧱 where price stops falling</li>
          <li>Resistance = ceiling 🚫 where price stops rising</li>
        </ul>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>⚙️ Indicators & Analysis</h2>
        <p>Indicators help confirm trend or momentum:</p>
        <ul>
          <li>📉 Moving Average – trend direction finder</li>
          <li>💪 RSI – tells overbought or oversold levels</li>
          <li>🎯 Bollinger Bands – measure volatility zones</li>
          <li>📊 MACD – trend + momentum combo tool</li>
        </ul>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>💰 Lot Size & Risk Management</h2>
        <p>
          1 lot = 100,000 units.  
          Beginners can start with 0.01 lot (1,000 units).  
          Always plan your <strong>Risk / Reward Ratio</strong> — target profit should be 2× your stop loss.
        </p>
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr style={{ background: "#eef" }}>
              <th>Account Balance ($)</th>
              <th>Risk per Trade (2%)</th>
              <th>Recommended Lot Size</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>100</td><td>2</td><td>0.01</td></tr>
            <tr><td>500</td><td>10</td><td>0.05</td></tr>
            <tr><td>1000</td><td>20</td><td>0.10</td></tr>
          </tbody>
        </table>
        <p>📏 Before each trade, calculate lot size based on balance + stop loss distance.</p>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>☪️ Shariah-Compliant Investment Model</h2>
        <p>
          ✅ No interest (SWAP-free accounts)  
          ✅ Transparent risk/reward ratios  
          ✅ Pre-defined entry & exit levels  
          ✅ Capital protection through Stop Loss discipline  
          Invest only in halal assets like Gold (XAUUSD), Stocks, or ETFs with ethical criteria.
        </p>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>🪙 Understanding XAU/USD</h2>
        <p>
          XAU = Gold (ounce), USD = US Dollar.  
          Buying XAU/USD means you expect Gold price to rise against USD.  
          Selling means you expect Gold to fall.  
          Example: If Gold rises from $1900 → $1910 and you bought 1 lot, profit ≈ $100.
        </p>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>🎯 Entry – Exit – Stop Loss – Take Profit</h2>
        <ul>
          <li>🟢 <strong>Entry</strong> – When price confirms direction after setup.</li>
          <li>🛑 <strong>Stop Loss</strong> – Max loss you allow (never skip it!).</li>
          <li>🎉 <strong>Take Profit</strong> – Your target exit point.</li>
          <li>📊 Always plan trade before entry – never chase candles!</li>
        </ul>
      </section>

      <section style={{ marginTop: 40, padding: 20, background: "#f0f8ff", borderRadius: 10 }}>
        <h2>📅 Complete Learning Plan (1 Month)</h2>
        <ol>
          <li>Week 1 – Basic concepts, charts, sessions</li>
          <li>Week 2 – Indicators + candle patterns</li>
          <li>Week 3 – Risk/Reward management + lot sizes</li>
          <li>Week 4 – Live practice & journal your trades</li>
        </ol>
        <p>
          Based on research & personal experience — learn step-by-step for strong foundations before real trading.  
          <strong>Stay patient, practice daily 🧘 and control emotions 🧠.</strong>
        </p>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>🎓 Ready to Start Your Course?</h2>
        <p>👇 Join our structured Forex Investment Course now</p>
        <p>
          <Link href="/register"><a>👉 Register</a></Link> | 
          <Link href="/payment"><a>💳 Pay via JazzCash / Easypaisa</a></Link> | 
          <Link href="/dashboard"><a>📺 Access Dashboard</a></Link>
        </p>
        <p>
          After payment, admin will approve your access and you can start lessons in the Dashboard.
        </p>
      </section>
    </div>
  );
}
