const inputClass = "mt-2 w-full rounded-xl border border-[#e5e9e5] bg-white px-4 py-3 text-sm text-[#26332b] outline-none transition placeholder:text-[#a1aaa3] focus:border-[#73b681] focus:ring-4 focus:ring-[#169b31]/10";

export default function Contact() {
  return (
    <section className="bg-[#f7f9f6] px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="pt-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#169b31]">We’re here for you</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#17251c] sm:text-5xl">Let’s talk.</h1>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#69736c]">Questions about your order, a flavour, or finding the right protein? Send our little team a note and we’ll get back to you within two working days.</p>
          <div className="mt-8 space-y-4 text-sm text-[#4e5b52]">
            <p className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#169b31] shadow-sm"><i className="bi bi-envelope" /></span> hello@veganfuel.example</p>
            <p className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#169b31] shadow-sm"><i className="bi bi-clock" /></span> Monday–Friday, 9:00–17:00</p>
          </div>
          <div className="mt-10 rounded-2xl bg-[#eaf3e9] p-5 text-sm leading-6 text-[#536455]"><strong className="text-[#203b27]">Quick tip</strong><br />For an order question, include your order number so we can find it faster.</div>
        </div>
        <form className="rounded-3xl border border-[#edf0ec] bg-white p-6 shadow-[0_18px_60px_rgba(23,45,27,0.07)] sm:p-9" onSubmit={(event) => { event.preventDefault(); window.alert("Thanks for reaching out! Your message is ready for our team."); }}>
          <h2 className="text-xl font-extrabold tracking-tight text-[#202a23]">Send us a message</h2>
          <p className="mt-2 text-sm text-[#788078]">Fill in the details below and we’ll take it from there.</p>
          <label className="mt-7 block text-xs font-semibold text-[#465149]">Your name<input className={inputClass} name="name" autoComplete="name" placeholder="Alex Green" required /></label>
          <label className="mt-5 block text-xs font-semibold text-[#465149]">Email address<input className={inputClass} type="email" name="email" autoComplete="email" placeholder="you@example.com" required /></label>
          <label className="mt-5 block text-xs font-semibold text-[#465149]">How can we help?<textarea className={`${inputClass} min-h-36 resize-y`} name="message" placeholder="Tell us a little about it…" required /></label>
          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#183b25] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#169b31]" type="submit">Send message <i className="bi bi-arrow-up-right" /></button>
          <p className="mt-4 text-[10px] leading-5 text-[#9aa19b]">Your details are only used to reply to your message.</p>
        </form>
      </div>
    </section>
  );
}