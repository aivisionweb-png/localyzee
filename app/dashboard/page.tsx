'use client';
import Link from "next/link";
import {useEffect,useState} from "react";
import QRCode from "qrcode";

type Biz={name:string;category:string;phone:string;city:string;slug:string};
const starter:Biz[]=[{name:"Shreeji Cafe",category:"Cafe & Restaurant",phone:"+91 98765 43210",city:"Ahmedabad",slug:"shreeji-cafe"}];
const plans=[["Starter","499","1 business"],["Growth","999","3 businesses"],["Scale","1999","10 businesses"]];

export default function Dashboard(){
 const [businesses,setBusinesses]=useState<Biz[]>(starter),[open,setOpen]=useState(false),[bill,setBill]=useState(false),[plan,setPlan]=useState("999"),[qr,setQr]=useState(""),[form,setForm]=useState({name:"",category:"Cafe",phone:"",city:"Ahmedabad"});
 useEffect(()=>{const s=localStorage.getItem("localyze_businesses");if(s)setBusinesses(JSON.parse(s));},[]);
 const save=(x:Biz[])=>{setBusinesses(x);localStorage.setItem("localyze_businesses",JSON.stringify(x));};
 const add=()=>{if(!form.name.trim())return;const slug=form.name.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");save([...businesses,{...form,slug}]);setForm({name:"",category:"Cafe",phone:"",city:"Ahmedabad"});setOpen(false);};
 const payLink=`upi://pay?pa=kaustubhbhudev@fam&pn=KAUSTUBH%20SHUKLA&am=${plan}&cu=INR&tn=LOCALYZE%20monthly%20plan`;
 useEffect(()=>{QRCode.toDataURL(payLink,{width:300,margin:2}).then(setQr).catch(()=>{});},[plan]);
 return <main className="min-h-screen bg-[#f7f3ea] text-[var(--ink)]">
  <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-black/10 bg-[#fffdf8] p-6 md:block">
   <Link href="/" className="text-2xl font-black tracking-[-.04em]">LOCAL<span className="text-[var(--gold2)]">YZE</span></Link>
   <p className="mt-2 text-[10px] font-black uppercase tracking-[.2em] text-black/30">OWNER CONSOLE</p>
   <div className="mt-10 space-y-1">{[["Overview","#top"],["My Businesses","#businesses"],["Leads","#activity"],["Offers","#activity"],["Reviews","#activity"],["Analytics","#activity"],["Billing","#billing"]].map(([x,h],i)=><a href={h} key={x} className={`block rounded-xl px-4 py-3 text-sm font-semibold ${i===0?"bg-[var(--navy)] text-white":"text-black/45 hover:bg-black/5 hover:text-black"}`}>{x}</a>)}</div>
   <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[var(--navy)] p-4 text-white"><p className="text-[10px] uppercase tracking-[.2em] text-white/40">OWNER</p><p className="mt-2 font-bold">Kaustubh</p><p className="mt-1 text-xs text-white/45">LOCALYZE Admin</p></div>
  </aside>

  <section id="top" className="md:ml-64">
   <header className="sticky top-0 z-20 flex items-center justify-between border-b border-black/10 bg-[#f7f3ea]/90 px-5 py-5 backdrop-blur-xl md:px-10">
    <div><p className="text-xs font-black uppercase tracking-[.18em] text-black/30">Owner dashboard</p><h1 className="mt-1 text-2xl font-black">Good morning, Kaustubh.</h1></div>
    <button onClick={()=>setOpen(true)} className="rounded-xl bg-[var(--navy)] px-5 py-3 text-sm font-black text-white hover:bg-[var(--navy2)]">+ Add Business</button>
   </header>

   <div className="p-5 md:p-10">
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[["Active businesses",String(businesses.length),"+1"],["Visitors","1,284","+18.4%"],["WhatsApp leads","186","+12.8%"],["MRR","₹9,990","+₹2,997"]].map(([a,b,c])=><div key={a} className="rounded-3xl border border-black/10 bg-white/65 p-6"><p className="text-sm text-black/40">{a}</p><div className="mt-4 flex items-end justify-between"><strong className="text-3xl">{b}</strong><span className="text-xs font-bold text-[var(--gold2)]">{c}</span></div></div>)}</div>

    <section id="businesses" className="mt-8 rounded-3xl border border-black/10 bg-white/65 p-6 md:p-8">
     <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[var(--gold2)]">Portfolio</p><h2 className="mt-2 text-2xl font-black">Your businesses</h2><p className="mt-1 text-sm text-black/40">Add, manage and open every customer site.</p></div><button onClick={()=>setOpen(true)} className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-bold hover:bg-black/5">+ New business</button></div>
     <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{businesses.map(b=><div key={b.slug} className="rounded-2xl border border-black/10 bg-[#fffdf8] p-5"><div className="flex justify-between gap-3"><div><h3 className="font-black">{b.name}</h3><p className="mt-1 text-xs text-black/40">{b.category} · {b.city}</p></div><span className="rounded-full bg-[#e7f2ee] px-3 py-1 text-[10px] font-black text-[#256653]">LIVE</span></div><div className="mt-5 flex gap-2"><Link href={`/business/${b.slug}`} className="flex-1 rounded-xl bg-[var(--navy)] px-3 py-2 text-center text-xs font-black text-white">View site</Link><button className="rounded-xl border border-black/10 px-4 text-xs font-bold">Manage</button></div></div>)}</div>
    </section>

    <section id="activity" className="mt-8 grid gap-6 lg:grid-cols-3">
     <div className="rounded-3xl border border-black/10 bg-white/65 p-7 lg:col-span-2"><div className="flex justify-between"><div><h2 className="text-xl font-black">Growth activity</h2><p className="mt-1 text-sm text-black/35">Last 30 days</p></div><span className="text-sm font-bold text-[var(--gold2)]">+24.6%</span></div><div className="mt-10 flex h-52 items-end gap-2">{[35,48,42,63,52,71,58,82,68,91,79,96].map((h,i)=><div key={i} className="flex-1 rounded-t-lg bg-[var(--navy)]/80" style={{height:`${h}%`}} />)}</div></div>
     <div className="rounded-3xl bg-[var(--navy)] p-7 text-white"><p className="text-xs font-black uppercase tracking-[.2em] text-[var(--gold)]">Live offer</p><h2 className="mt-5 text-3xl font-black">Buy 2 Get 1 Free</h2><p className="mt-3 text-sm text-white/45">Selected cold beverages · Today</p><button className="mt-8 w-full rounded-xl bg-[var(--gold)] py-3 font-black text-[var(--ink)]">Edit offer</button></div>
    </section>

    <section id="billing" className="mt-8 rounded-3xl border border-black/10 bg-white/65 p-6 md:p-8"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[var(--gold2)]">Billing</p><h2 className="mt-2 text-2xl font-black">Monthly plans</h2><p className="mt-1 text-sm text-black/40">Payments are directed to your UPI account.</p></div><span className="rounded-full bg-black/5 px-4 py-2 text-xs font-bold text-black/50">kaustubhbhudev@fam</span></div><div className="mt-6 grid gap-4 md:grid-cols-3">{plans.map(([n,p,b])=><button onClick={()=>{setPlan(p);setBill(true)}} key={n} className={`rounded-2xl border p-5 text-left ${p==="999"?"border-[var(--gold2)] bg-[var(--gold)]/10":"border-black/10 bg-white"}`}><p className="font-black">{n}</p><p className="mt-4 text-3xl font-black">₹{p}<span className="text-xs font-normal text-black/35">/month</span></p><p className="mt-1 text-xs text-black/40">{b}</p><p className="mt-5 text-xs font-black text-[var(--gold2)]">Pay via UPI →</p></button>)}</div></section>
   </div>
  </section>

  {open&&<div className="fixed inset-0 z-50 grid place-items-center bg-black/65 p-5 backdrop-blur-sm"><div className="w-full max-w-lg rounded-3xl bg-[#fffdf8] p-7 shadow-2xl"><div className="flex justify-between"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[var(--gold2)]">New business</p><h2 className="mt-2 text-2xl font-black">Create customer account</h2></div><button onClick={()=>setOpen(false)} className="text-black/35">✕</button></div><div className="mt-6 space-y-3">{[["Business name","name","e.g. Royal Salon"],["Category","category","e.g. Salon"],["Phone","phone","+91..."],["City","city","Ahmedabad"]].map(([l,k,p])=><label key={k} className="block"><span className="text-xs font-bold text-black/45">{l}</span><input value={form[k as keyof typeof form]} onChange={e=>setForm({...form,[k]:e.target.value})} placeholder={p} className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[var(--gold2)]"/></label>)}</div><button onClick={add} className="mt-6 w-full rounded-xl bg-[var(--navy)] py-3 font-black text-white">Create business →</button></div></div>}

  {bill&&<div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-5 backdrop-blur-sm"><div className="w-full max-w-md rounded-3xl bg-[#fffdf8] p-7 text-center"><button onClick={()=>setBill(false)} className="float-right text-black/35">✕</button><p className="text-xs font-black uppercase tracking-[.2em] text-[var(--gold2)]">UPI checkout</p><h2 className="mt-3 text-3xl font-black">₹{plan}/month</h2><p className="mt-2 text-sm text-black/45">Pay to <b className="text-black">kaustubhbhudev@fam</b></p>{qr&&<img src={qr} alt="UPI QR" className="mx-auto mt-6 w-56 rounded-2xl border border-black/10 bg-white p-3"/>}<a href={payLink} className="mt-5 block rounded-xl bg-[var(--navy)] py-3 font-black text-white">Open UPI App</a><p className="mt-4 text-[11px] leading-5 text-black/35">This is a UPI intent/QR demo. Automatic subscription verification requires a merchant gateway and server-side webhooks.</p></div></div>}
 </main>
}