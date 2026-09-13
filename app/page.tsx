"use client";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, Check, Menu, ShieldCheck, X } from "lucide-react";

const plans=[
 {name:"Free",price:"R0",copy:"For getting your finances out of spreadsheets.",features:["1 business profile","2 CSV uploads monthly","Income and expense tracking","Core cash-flow dashboard"]},
 {name:"Basic",price:"R149",copy:"For small businesses managing cash flow every week.",features:["Everything in Free","Unlimited CSV uploads","Automatic categorisation","Monthly trends and insights","CSV data exports"],popular:true},
 {name:"Pro",price:"R349",copy:"For growing teams that need deeper visibility.",features:["Everything in Basic","Up to 5 team members","Multiple business profiles","Advanced insights","Priority support"]}
];

export default function Home(){
 const [plan,setPlan]=useState("Free"),[menu,setMenu]=useState(false),[state,setState]=useState<"idle"|"loading"|"success"|"error">("idle"),[error,setError]=useState("");
 const choose=(p:string)=>{setPlan(p);document.querySelector("#signup")?.scrollIntoView({behavior:"smooth"})};
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();setState("loading");setError("");
  const body=Object.fromEntries(new FormData(e.currentTarget).entries());
  try{
   await emailjs.send("service_fqefdkw","template_r8utypp",{
    ...body,
    user_name:body.fullName,
    user_email:body.email,
    full_name:body.fullName,
    business_name:body.businessName,
    team_size:body.teamSize,
    business_type:body.businessType,
    reply_to:body.email,
    submitted_at:new Date().toISOString(),
   },{publicKey:"60KdI3TveYtJufTIs",limitRate:{id:"revnue-signup",throttle:10000}});
   setState("success");
  }
  catch(err){console.error("Email notification failed",err);setError("We couldn't send your details. Please wait a moment and try again.");setState("error")}
 }
 return <main>
  <header><nav className="shell nav"><a className="brand" href="#top"><b>R</b>Revnue</a><div className="links"><a href="#how">How it works</a><a href="#features">Features</a><a href="#pricing">Pricing</a></div><button className="btn top" onClick={()=>choose("Free")}>Get started</button><button className="hamb" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></nav>{menu&&<div className="mobile"><a href="#how">How it works</a><a href="#pricing">Pricing</a><a href="#signup">Get started</a></div>}</header>
  <section id="top" className="hero shell"><p className="label">● CASH FLOW, MADE CLEAR</p><h1>Stop guessing.<br/><em>Know your numbers.</em></h1><p>Turn scattered transactions into a clear picture of what came in, what went out, and what needs your attention.</p><button className="btn" onClick={()=>choose("Free")}>Start for free <ArrowRight size={17}/></button><small><ShieldCheck size={15}/> No card required. Your data stays yours.</small>
   <div className="dashboard"><div className="dashHead"><span><small>OVERVIEW</small><h2>Good morning, Tami.</h2></span><button>September 2026</button></div><div className="stats"><article><small>Total income</small><b>R 84,250</b><i>↑ 12.4% this month</i></article><article><small>Total expenses</small><b>R 51,880</b><i>↓ 3.1% this month</i></article><article><small>Net cash flow</small><b>R 32,370</b><i>Money left after expenses</i></article></div><div className="chart"><span>Income vs expenses</span><div>{[42,58,54,72,79,92].map((h,i)=><i key={i} style={{height:`${h}%`}}/> )}</div></div></div>
  </section>
  <section className="band"><div className="shell"><h2>Money moves fast.<br/><em>Your view of it should too.</em></h2><p>Revnue replaces scattered files, fragile spreadsheets, and end-of-month surprises with one clean financial view.</p></div></section>
  <section id="how" className="section shell"><p className="label">HOW IT WORKS</p><h2>From file to clarity<br/>in three simple steps.</h2><div className="steps">{[["01","Upload your data","Drop in a CSV export from your bank or accounting tool."],["02","We clean it up","Revnue organises transactions into income and expenses."],["03","See what matters","Track cash flow, spot trends, and make decisions with confidence."]].map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>
  <section id="features" className="features"><div className="section shell"><p className="label">BUILT FOR CLARITY</p><h2>Everything you need.<br/>Nothing you don’t.</h2><div className="featureGrid"><article><div className="cash"><small>Net cash flow</small><b>+ R 32,370</b><i>Healthy</i></div><h3>Your position at a glance</h3><p>Income, expenses, and net cash flow in one place. No formulas. No digging.</p></article><article><div className="cats"><span>Operations <b>R18,420</b></span><span>Marketing <b>R12,650</b></span><span>Software <b>R6,810</b></span></div><h3>Know where it went</h3><p>Understand spending by category and catch costly patterns early.</p></article><article><div className="miniChart">{[40,55,49,70,78,94].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div><h3>See the trend</h3><p>Compare months and see how your business changes over time.</p></article></div></div></section>
  <section id="pricing" className="section shell pricing"><p className="label">SIMPLE PRICING</p><h2>A plan for where you are.<br/>Room for where you’re going.</h2><div className="plans">{plans.map(p=><article className={p.popular?"popular":""} key={p.name}>{p.popular&&<strong>MOST POPULAR</strong>}<h3>{p.name}</h3><p>{p.copy}</p><div className="price"><b>{p.price}</b><small>/month</small></div><ul>{p.features.map(f=><li key={f}><Check size={16}/>{f}</li>)}</ul><button className={p.popular?"btn":"btn outline"} onClick={()=>choose(p.name)}>Choose {p.name}<ArrowRight size={16}/></button></article>)}</div><small>Prices exclude VAT. No card is taken in this preview.</small></section>
  <section id="signup" className="signup"><div className="shell signupGrid"><div><p className="label light">GET EARLY ACCESS</p><h2>Put your numbers<br/>to work.</h2><p>Tell us about you and your business. Your selected plan and profile details will be sent directly to the Revnue team.</p><div className="promise"><ShieldCheck/><span><b>Your details are sent directly.</b><small>The Revnue team is notified when you register.</small></span></div></div><div className="formCard">
   {state==="success"?<div className="success"><i><Check/></i><p className="label">DETAILS SENT</p><h3>You’re on the Revnue list.</h3><p>Your profile and <b>{plan}</b> preference were sent to the Revnue team.</p><button className="btn" onClick={()=>setState("idle")}>Add another signup</button></div>:
   <form onSubmit={submit}><div className="formTitle"><span><p className="label">CREATE YOUR PROFILE</p><h3>Start with {plan}</h3></span><small>Step 1 of 1</small></div><input type="hidden" name="plan" value={plan}/><label>Full name<input required minLength={2} name="fullName" placeholder="e.g. Lerato Mokoena"/></label><label>Work email<input required type="email" name="email" placeholder="you@company.co.za"/></label><div className="row"><label>Business name<input required minLength={2} name="businessName" placeholder="Your business"/></label><label>Team size<select required name="teamSize" defaultValue=""><option value="" disabled>Select size</option><option>Just me</option><option>2–5</option><option>6–20</option><option>21+</option></select></label></div><label>Business type<select required name="businessType" defaultValue=""><option value="" disabled>Select industry</option><option>Professional services</option><option>Retail or e-commerce</option><option>Construction or trades</option><option>Creative or agency</option><option>Technology</option><option>Other</option></select></label><div className="picker"><span>Selected plan</span><div>{plans.map(p=><button type="button" className={plan===p.name?"active":""} onClick={()=>setPlan(p.name)} key={p.name}>{p.name}<small>{p.price}</small></button>)}</div></div><label className="consent"><input required type="checkbox" name="consent" value="yes"/><span>I agree to send these details to Revnue for early-access registration.</span></label>{state==="error"&&<p className="error">{error}</p>}<button className="btn submit" disabled={state==="loading"}>{state==="loading"?"Sending your details…":"Create early-access profile"}<ArrowRight size={17}/></button><small className="fine">No payment or password is collected.</small></form>}
  </div></div></section>
  <footer><div className="shell"><a className="brand" href="#top"><b>R</b>Revnue</a><p>Clearer numbers. Better decisions.</p><small>© 2026 Revnue. A Purple Haze Technology product.</small></div></footer>
 </main>
}
