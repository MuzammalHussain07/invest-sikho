import { useEffect, useState } from "react";
import { auth, getUserDoc } from "../lib/firebase";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userDoc, setUserDoc] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async u => {
      if (!u) {
        setUser(null); setUserDoc(null);
      } else {
        setUser(u);
        const doc = await getUserDoc(u.uid);
        setUserDoc(doc);
      }
    });
    return () => unsub();
  }, []);

  if (!user) return <div className="container"><h3>Please login to see your dashboard.</h3></div>;

  return (
    <div className="container">
      <h2>📊 Invest Sikho Dashboard</h2>
      <p>Welcome, <strong>{user.email}</strong>!</p>
      <p>Status: {userDoc ? (userDoc.hasAccess ? "✅ Access granted" : "⏳ Waiting for admin approval") : "Loading..."}</p>

      {/* -------- Knowledge Sections ---------- */}
      <div style={{ marginTop: 20 }}>
        <h3>💡 Forex Learning Hub</h3>

        <div className="card">
          <h4>📈 Charts & Candles</h4>
          <p>Green candle 🟢 = price up, Red candle 🔴 = price down.</p>
          <img src="https://i.ibb.co/3MScD1P/candlestick-example.png" alt="Candlestick" width="100%"/>
        </div>

        <div className="card">
          <h4>⏱ Trading Sessions</h4>
          <table>
            <thead><tr><th>Session</th><th>Time GMT</th><th>Tip</th></tr></thead>
            <tbody>
              <tr><td>London 🇬🇧</td><td>08:00-17:00</td><td>High liquidity 🔥</td></tr>
              <tr><td>New York 🇺🇸</td><td>13:00-22:00</td><td>Best with London overlap 💹</td></tr>
              <tr><td>Tokyo 🇯🇵</td><td>00:00-09:00</td><td>Low volatility 🌊</td></tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h4>💰 Lot Size & XAU/USD</h4>
          <table>
            <thead><tr><th>Lot</th><th>Units</th><th>Risk</th></tr></thead>
            <tbody>
              <tr><td>Micro</td><td>1,000</td><td>Low</td></tr>
              <tr><td>Mini</td><td>10,000</td><td>Medium</td></tr>
              <tr><td>Standard</td><td>100,000</td><td>High</td></tr>
            </tbody>
          </table>
          <p>XAU/USD = Gold vs USD. Buy = expecting gold ↑, Sell = expecting gold ↓</p>
        </div>

        <div className="card">
          <h4>🕌 Shariah-Compliant Trading & Risk/Reward</h4>
          <ul>
            <li>✅ Only trades without interest (swap-free)</li>
            <li>Risk/Reward 1:2 or 1:3 💹</li>
            <li>Pre-calculate lot size 💰</li>
            <li>Set Stop-Loss & Take-Profit ⬆️⬇️</li>
          </ul>
        </div>

        <div className="card">
          <h4>🎯 Entry & Exit Strategy</h4>
          <ol>
            <li>Check session & volatility ⏱️</li>
            <li>Identify trend & candle pattern 📈</li>
            <li>Calculate risk & lot size 💵</li>
            <li>Place entry order 🔹</li>
            <li>Set stop-loss & take-profit ⬆️⬇️</li>
            <li>Monitor trade 👀</li>
          </ol>
        </div>

        <p>📌 Complete learning in 1 month. Start theory → charts → risk/reward → live examples → practice trades. Tips based on research & experience.</p>
      </div>

      {/* -------- Course Videos at Bottom -------- */}
      {userDoc && userDoc.hasAccess ? (
        <div style={{ marginTop: 30 }}>
          <h3>🎬 Your Course Lessons</h3>
          <p>Lesson 1: Intro to Forex</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_1" frameBorder="0" allowFullScreen></iframe>
          <p>Lesson 2: Currency Pairs</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" frameBorder="0" allowFullScreen></iframe>
        </div>
      ) : (
        <p style={{ marginTop: 20 }}>💡 Please complete payment and wait for admin approval to access course videos.</p>
      )}
    </div>
  );
}
