import Link from "next/link";

const features=[
 ["01","Digital presence","A premium customer-facing website for every business."],
 ["02","Lead capture","WhatsApp, calls, bookings and enquiries tracked in one place."],
 ["03","Offers & reviews","Publish offers and turn customer feedback into social proof."],
 ["04","Growth analytics","See traffic, actions and performance without complicated tools."]
];

export default function Home(){
 return <main className="min-h-screen bg-[var(--ivory)] text-[var(--ink)]">
  <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-[var(--ink)]/10 px-6 py-5">
   <Link href="/" className="text-2xl font-black tracking-[-.04em]">LOCAL<span className="text-[var(--gold2)]">YZE</span></Link>
   <div className="flex gap-2">
    <Link href="/dashboard" className="rounded-xl border border-[var(--ink)]/15 px-5 py-2.5 text-sm font-semibold hover:bg-white">Owner Login</Link>
    <Link href="/dashboard" className="rounded-xl bg-[var(--navy)] px-5 py-2.5 text-sm font-bold text-white hover:bg-[var(--navy2)]">Open Demo</Link>
   </div>
  </nav>

  <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
   <div className="grid items-end gap-16 lg:grid-cols-[1.3fr_.7fr]">
    <div>
     <div className="inline-flex rounded-full border border-[var(--gold2)]/35 bg-[var(--gold)]/10 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-[var(--gold2)]">Digital operating system for local business</div>
     <h1 className="mt-7 max-w-5xl text-6xl font-black leading-[.94] tracking-[-.055em] md:text-8xl">Make your local business feel <span className="text-[var(--navy)]">bigger.</span></h1>
     <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">Web presence, customer enquiries, offers, reviews and analytics — packaged into one premium monthly service.</p>
     <div className="mt-10 flex flex-wrap gap-3">
      <Link href="/dashboard" className="rounded-2xl bg-[var(--navy)] px-7 py-4 font-black text-white shadow-lg shadow-[var(--navy)]/15">Open Owner Dashboard →</Link>
      <Link href="/business/shreeji-cafe" className="rounded-2xl border border-[var(--ink)]/15 bg-white/50 px-7 py-4 font-bold hover:bg-white">See Customer Experience</Link>
     </div>
    </div>
    <div className="rounded-[2rem] bg-[var(--navy)] p-7 text-white shadow-2xl shadow-[var(--navy)]/15">
      <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--gold)]">LOCALYZE / OS</p>
      <p className="mt-8 text-4xl font-black">Everything your customer needs.</p>
      <div className="mt-8 space-y-3 text-sm text-white/70">{["Business website","WhatsApp enquiries","Live offers","Reviews","Analytics","Monthly billing"].map(x=><div key={x} className="flex items-center gap-3 border-b border-white/10 pb-3"><span className="text-[var(--gold)]">✦</span>{x}</div>)}</div>
    </div>
   </div>

   <div className="mt-20 grid gap-4 md:grid-cols-4">{features.map(([n,t,d])=><div key={n} className="rounded-3xl border border-[var(--ink)]/10 bg-white/55 p-6"><span className="text-xs font-black text-[var(--gold2)]">{n}</span><h2 className="mt-8 text-lg font-black">{t}</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{d}</p></div>)}</div>
  </section>

  <section className="bg-[var(--navy)] px-6 py-24 text-white">
   <div className="mx-auto max-w-7xl">
    <p className="text-xs font-black uppercase tracking-[.25em] text-[var(--gold)]">Recurring revenue model</p>
    <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Sell the system. Keep the customer monthly.</h2>
    <div className="mt-12 grid gap-5 md:grid-cols-3">
     {[["Starter","499","1 business","Website + WhatsApp"],["Growth","999","3 businesses","Dashboard + offers + analytics"],["Scale","1,999","10 businesses","Advanced growth tools"]].map(([n,p,b,d],i)=><div key={n} className={`rounded-3xl border p-7 ${i===1?"border-[var(--gold)] bg-white/[.07]":"border-white/10 bg-white/[.03]"}`}><div className="flex items-center justify-between"><h3 className="text-xl font-bold">{n}</h3>{i===1&&<span className="rounded-full bg-[var(--gold)] px-3 py-1 text-[10px] font-black text-[var(--ink)]">POPULAR</span>}</div><p className="mt-7 text-5xl font-black">₹{p}<span className="text-sm font-normal text-white/40"> / month</span></p><p className="mt-3 font-semibold">{b}</p><p className="mt-1 text-sm text-white/40">{d}</p><Link href="/dashboard#billing" className="mt-8 block rounded-xl bg-[var(--gold)] px-4 py-3 text-center font-black text-[var(--ink)] hover:bg-[#e4c987]">Choose plan</Link></div>)}
    </div>
   </div>
  </section>

  <footer className="px-6 py-10 text-center text-sm text-[var(--muted)]">LOCALYZE © 2026 · Premium digital infrastructure for local businesses</footer>
 </main>
}