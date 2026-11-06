/* ===== Settings ===== */
const CONFIG={name:"Samuel Mutunga",whatsapp:"254721545228",email:"stushy82@gmail.com",github:"https://github.com/Samuel4678"};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const wa=t=>`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t||"Hello Samuel, I found your portfolio and would like to talk.")}`;
const mail=(s,b)=>`mailto:${CONFIG.email}?subject=${encodeURIComponent(s||"Opportunity for Samuel Mutunga")}&body=${encodeURIComponent(b||"")}`;

/* ===== Content ===== */
const ROLES=[["💻","Software / Web Developer","I build websites and apps from idea to launch, from the screen people see to the logic behind it.","You get working software that looks good, loads fast and is easy to use, so customers stay and teams save time."],
["🤖","Python & Automation Developer","I write programs that do repetitive work for you, like collecting data, checking websites and emailing reports.","Jobs that took hours run on their own, with fewer mistakes and more time for real work."],
["🧩","Systems & Software Designer","Before writing code, I plan how the parts of a system fit together and talk to each other.","Good planning means fewer bugs, lower costs and software that is easy to change later."],
["📈","Scaling & Backend Thinking","I design with growth in mind: databases, APIs and the logic that powers an app.","A system that works for 10 users keeps working for 10,000, with no expensive rebuild."],
["📊","Data & Maths-Driven Roles","I turn numbers into answers: modelling, estimating, finding patterns and checking results.","Decisions rest on evidence, and every calculation is accurate and explainable."],
["🛠️","IT & Networking Support","My degree covers computer hardware, operating systems and networking.","Problems get found and fixed quickly, so systems and people keep working."],
["🤝","Freelance & Contract Projects","I deliver client work from first demo to launch and handover, and I explain things in plain language.","You get a dependable partner who communicates clearly and delivers on time."],
["🎓","Graduate & Trainee Programmes","I bring a solid computing and maths foundation and a habit of learning fast.","You get someone productive early, who grows quickly into your team."]];
const SKILLS=[["JavaScript, HTML & CSS",["Web","Front-end"],"Builds the websites and apps people see and use.","Customers get pages that load fast and work on any phone."],
["Python",["Automation","Data"],"Writes programs that analyse data and automate routine tasks.","Saves hours of manual work and cuts mistakes."],
["Mathematics",["Logic","Modelling"],"Strong problem-solving and logical thinking, from estimating to checking answers.","Tricky problems get solved methodically, and results can be trusted."],
["Software & systems design",["Architecture","Planning"],"Breaks big problems into small, clear parts that fit together.","Software stays simple to fix, extend and hand over."],
["Scalability mindset",["Performance","Growth"],"Chooses designs that stay fast as users and data grow.","You avoid slow systems and costly rebuilds later."],
["APIs & integrations",["REST","Maps","WhatsApp"],"Connects apps to services like Google Maps, WhatsApp and email.","Your tools work together instead of you doing it by hand."],
["Databases & back-end basics",["Supabase","Postgres"],"Stores, protects and retrieves data, with logins and access rules.","Information stays organised, safe and available."],
["Git, GitHub & automation",["Git","Actions","Pages"],"Tracks changes, collaborates and deploys automatically.","Teams work together safely and releases are quick and repeatable."]];
const PROJ=[["🏖️","ROKI Resort","A complete resort website with rooms, dining, events, a map, dark/light mode and a built-in assistant that takes booking requests via WhatsApp.","Guests find answers instantly and book in one tap, so the resort gets more enquiries.",["JavaScript","UX","Maps","WhatsApp"],"https://samuel4678.github.io/Roki-resort2/","linear-gradient(135deg,#0f766e,#22d3ee)"],
["🏠","Seven Sunday Roofing","A roofing-materials catalogue with filters, a quote list and a roof calculator that uses geometry and trigonometry to estimate sheets, ridge capping and gutters.","Customers get an instant estimate and send a ready-made quote, which saves time for both sides.",["Maths","JavaScript","Calculator"],"https://samuel4678.github.io/sevensunday/","linear-gradient(135deg,#047857,#f59e0b)"],
["🏗️","Muksi Construction","A contractor website with a filterable project gallery, photo viewer, a 3-step project enquiry wizard and an embedded map.","Visitors become clear, well-described enquiries instead of vague calls.",["UI design","Forms","Maps"],"https://samuel4678.github.io/muksi/","linear-gradient(135deg,#1d4ed8,#f97316)"],
["🔎","Athi River Lead Finder","A Python multi-agent system: a manager and small workers find local businesses with the Google Places API, check their websites, rank them and email a report.","Shows system design in action: splitting a big job into small parts that work together, running automatically on GitHub Actions.",["Python","APIs","Automation"],"","linear-gradient(135deg,#6d28d9,#22d3ee)"]];
const EDU=[["September 2020 to present","BSc Computer Technology","Jomo Kenyatta University of Agriculture and Technology (JKUAT), School of Computing and Information Technology","Coursework includes computer hardware and organisation, programming, operating systems, software applications, programming language principles, the internet and networking."],
["2019","Kenya Certificate of Secondary Education (KCSE)","Nakuru High School","Mean grade A- (minus). A in Mathematics and Computer Studies, A- in Physics and Geography, B+ in Chemistry."]];
const HOW=[["Clear communication","I explain things in plain language and keep you updated, so there are no surprises."],["Show, don't just tell","I like to build a working demo early, so you can see and react to real progress."],["Careful and reliable","My maths background means I check my work, test edge cases and care about getting it right."]];

/* ===== Render ===== */
$("#yr").textContent=new Date().getFullYear();
["#navWa","#heroWa","#cWa","#fab"].forEach(s=>$(s).href=wa());
$("#heroMail").href=$("#cMail").href=mail();$("#cGit").href=CONFIG.github;
$("#roleGrid").innerHTML=ROLES.map(r=>`<article class="rc rv"><span class="i">${r[0]}</span><h3>${r[1]}</h3><p>${r[2]}</p><div class="why"><b>Why it helps you:</b> ${r[3]}</div></article>`).join("");
$("#skillGrid").innerHTML=SKILLS.map(s=>`<article class="rc rv"><h3>${s[0]}</h3><div class="tags">${s[1].map(t=>`<i>${t}</i>`).join("")}</div><p>${s[2]}</p><div class="why"><b>Why it helps you:</b> ${s[3]}</div></article>`).join("");
$("#projGrid").innerHTML=PROJ.map(p=>`<article class="pc rv"><div class="pa" style="background:${p[6]}">${p[0]}</div><div class="pb"><h3>${p[1]}</h3><div class="tags">${p[4].map(t=>`<i>${t}</i>`).join("")}</div><p>${p[2]}</p><div class="why"><b>Why it matters:</b> ${p[3]}</div>${p[5]?`<a class="btn sm" href="${p[5]}" target="_blank" rel="noopener">Open live site →</a>`:`<span class="small">Code available on request.</span>`}</div></article>`).join("");
$("#edu").innerHTML=EDU.map(e=>`<div class="ti rv"><small>${e[0]}</small><h3>${e[1]}</h3><b class="small">${e[2]}</b><p>${e[3]}</p></div>`).join("");
$("#howGrid").innerHTML=HOW.map(h=>`<div class="hw rv"><h3>${h[0]}</h3><p>${h[1]}</p></div>`).join("");
function sendMsg(e){e.preventDefault();const t=`Hello Samuel, I'm ${$("#mn").value}${$("#mc").value?" from "+$("#mc").value:""}.\n\n${$("#mm").value}`;open(wa(t),"_blank");$("#mailAlt").href=mail("Opportunity for Samuel Mutunga",t);return false}
$("#mailAlt").onclick=function(){this.href=mail("Opportunity for Samuel Mutunga",`Hello Samuel, I'm ${$("#mn").value||"…"}.\n\n${$("#mm").value}`)};
$("#mailAlt").href=mail();

/* ===== Hero: floating maths and code symbols, typed roles, avatar photo, resume ===== */
$("#syms").innerHTML=["∑","π","∫","√","∞","{ }","</>","λ","≈","Δ","θ","%","01","fn()","O(n)","x²"].map((s,i)=>`<span style="left:${(i*37)%96}%;top:${(i*53)%88}%;animation-delay:-${i*1.3}s;font-size:${1+((i*7)%10)/10}rem">${s}</span>`).join("");
const WORDS=["fast websites.","smart software.","scalable systems.","clean solutions.","automation tools."];let wi=0,ci=0,del=false;
(function type(){const w=WORDS[wi];ci+=del?-1:1;$("#typed").textContent=w.slice(0,ci);let d=del?45:85;if(!del&&ci===w.length){del=true;d=1400}else if(del&&ci===0){del=false;wi=(wi+1)%WORDS.length;d=350}setTimeout(type,d)})();
const ex=["jpg","jpeg","png","webp"];(function t(i){if(i>=ex.length)return;const im=new Image();im.onload=()=>{$(".ph").style.backgroundImage=`url(images/profile.${ex[i]})`;$("#avatar span").style.display="none"};im.onerror=()=>t(i+1);im.src=`images/profile.${ex[i]}`})(0);
fetch("resume.pdf",{method:"HEAD"}).then(r=>{if(r.ok){const a=$("#resume");a.href="resume.pdf";a.hidden=false}}).catch(()=>{});

/* ===== Scale demo: steps needed as users grow ===== */
const fmt=n=>Math.round(n).toLocaleString("en-US");
function bars(){const n=+$("#n").value;$("#nOut").textContent=fmt(n);
 const rows=[["Smart lookup (indexed search)","Jumps straight to the answer",Math.log2(n),"#34d399"],["Check one by one","Looks at every item",n,"#22d3ee"],["Sort everything well","Orders all the items",n*Math.log2(n),"#8b5cf6"],["Compare everyone with everyone","Doubles up the work as you grow",n*n,"#f43f5e"]];
 const max=Math.log10(n*n+10);
 $("#bars").innerHTML=rows.map(r=>`<div class="bar"><div><span>${r[0]}</span><em>${fmt(r[2])} steps</em></div><i><u style="width:${Math.max(3,Math.log10(r[2]+1)/max*100)}%;background:${r[3]}"></u></i><small class="small">${r[1]}</small></div>`).join("")}
$("#n").oninput=bars;bars();

/* ===== Theme, reveal, back-to-top ===== */
(function(){const r=document.documentElement,b=$("#theme"),m=$('meta[name="theme-color"]');
 const paint=()=>{const d=r.dataset.theme!=="light";b.textContent=d?"☀️":"🌙";b.setAttribute("aria-label",d?"Switch to light mode":"Switch to dark mode");m.content=d?"#0a0f1e":"#f6f8fe"};
 b.onclick=()=>{r.dataset.theme=r.dataset.theme==="light"?"dark":"light";try{localStorage.setItem("sm-theme",r.dataset.theme)}catch(e){}paint()};paint()})();
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&(e.target.classList.add("in"),io.unobserve(e.target))),{threshold:.1});$$(".rv").forEach(e=>io.observe(e));
addEventListener("scroll",()=>$("#top").classList.toggle("on",scrollY>700),{passive:true});
