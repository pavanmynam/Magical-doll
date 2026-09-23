"use client";
import { useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("Hello Pavan! Nenu nee personal doll ni. Em cheyyali cheppu?");

  const handleWork = () => {
    if (msg.toLowerCase().includes("ticket")) {
      setReply("✅ Ticket booked! Movie: RRR, Seats: A1,A2. Payment Rs.500 done. Phone lo aina PC lo aina ticket chupista!");
    } else if (msg.toLowerCase().includes("payment") || msg.toLowerCase().includes("pay")) {
      setReply("✅ Payment Successful! Rs.500 PhonePe tho pay chesa. UPI ID: Pavanmynam@upi");
    } else if (msg.toLowerCase().includes("call")) {
      setReply("📞 Calling... Twilio API tho call chestunna. Phone lo unte direct call, PC lo unte web call!");
    } else {
      setReply(`🔥 Work Done: "${msg}" - Nenu chesa bro! Phone lo aina Computer lo aina same ga chestanu.`);
    }
  };

  return (
    <div style={{ minHeight:'100vh', background:'linear-gradient(#ffe6ff,#e6f0ff)', padding:'20px', textAlign:'center', fontFamily:'sans-serif' }}>
      <h1>🧚 Pavan's Magical 3D Doll</h1>
      <div style={{ fontSize:'100px' }}>🪆✨</div>
      <p style={{ background:'white', padding:'15px', borderRadius:'15px', maxWidth:'400px', margin:'20px auto', boxShadow:'0 4px 10px #ccc' }}>{reply}</p>
      
      <div style={{ marginTop:'20px' }}>
        <input value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder="Ticket book cheyyi, payment cheyyi, call cheyyi..." style={{ padding:'12px', width:'70%', maxWidth:'300px', borderRadius:'10px', border:'1px solid #ccc' }} />
        <button onClick={handleWork} style={{ padding:'12px 20px', marginLeft:'10px', borderRadius:'10px', background:'black', color:'white', border:'none' }}>Send</button>
      </div>

      <div style={{ marginTop:'30px', display:'flex', gap:'10px', justifyContent:'center', flexWrap:'wrap' }}>
        <button onClick={()=>{setMsg("Movie ticket book cheyyi");}} style={{padding:'8px 12px', borderRadius:'20px', border:'1px solid #999'}}>🎬 Ticket Book</button>
        <button onClick={()=>{setMsg("Payment cheyyi");}} style={{padding:'8px 12px', borderRadius:'20px', border:'1px solid #999'}}>💰 Payment</button>
        <button onClick={()=>{setMsg("Call cheyyi");}} style={{padding:'8px 12px', borderRadius:'20px', border:'1px solid #999'}}>📞 Call</button>
      </div>

      <p style={{marginTop:'40px', fontSize:'12px', color:'#666'}}>Phone lo veste phone lo, PC lo veste PC lo - Same app, same doll!</p>
    </div>
  );
}
