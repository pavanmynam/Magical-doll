import streamlit as st

st.set_page_config(page_title="Pavan's Magical Doll", page_icon="🪆")

st.markdown("""
<style>
.big-doll { font-size: 80px; text-align: center; }
.reply-box { background: white; padding: 20px; border-radius: 15px; box-shadow: 0 4px 10px #ccc; }
</style>
""", unsafe_allow_html=True)

st.title("🧚 Pavan's Magical Doll - Pavanmynam")
st.markdown('<div class="big-doll">🪆✨💃</div>', unsafe_allow_html=True)

if "reply" not in st.session_state:
    st.session_state.reply = "Hello Pavan! Nenu nee personal doll ni. Em work cheppina chestanu - Ticket, Payment, Call!"

st.markdown(f'<div class="reply-box">🤖 {st.session_state.reply}</div>', unsafe_allow_html=True)
st.write("")

col1, col2, col3 = st.columns(3)
with col1:
    if st.button("🎬 Ticket Book"):
        st.session_state.reply = "✅ Ticket Booked! Movie: RRR at Upal, Seats A1,A2. Rs.500 Paid!"
with col2:
    if st.button("💰 Payment Cheyyi"):
        st.session_state.reply = "✅ Payment Done! Rs.500 UPI ID Pavanmynam@upi tho pay chesa!"
with col3:
    if st.button("📞 Call Cheyyi"):
        st.session_state.reply = "📞 Calling... Phone lo unte phone call, PC lo unte web call chestunna!"

user_input = st.text_input("Doll ki em work ivvali? (Ex: movie ticket book cheyyi)")

if st.button("Doll ki Cheppu 🚀"):
    msg = user_input.lower()
    if "ticket" in msg:
        st.session_state.reply = f"✅ Done! '{user_input}' - Ticket booked & Payment success!"
    elif "pay" in msg or "payment" in msg:
        st.session_state.reply = f"✅ Done! '{user_input}' - Payment of Rs.500 successful!"
    elif "call" in msg:
        st.session_state.reply = f"📞 Done! '{user_input}' - Call initiated!"
    else:
        st.session_state.reply = f"🔥 Done Pavan! '{user_input}' - Nee work complete chesa! Phone lo aina PC lo aina chestanu."
    st.rerun()

st.caption("Phone lo veste phone lo, PC lo veste PC lo - Same Doll, Same Power! Pavanmynam")
