import { resources } from "../data/resources.js";
import { renderModuleResources } from "./ModuleResourcesPage.js";

export function renderResources(app) {

app.innerHTML = `

<div
style="
min-height:100vh;
background:
linear-gradient(
180deg,
#020617 0%,
#07152d 40%,
#0f172a 100%
);
padding:40px;
color:white;
font-family:Inter,sans-serif;
">

<div
style="
max-width:1400px;
margin:auto;
">

<!-- =========================
HERO
========================= -->

<div
style="
background:
linear-gradient(
135deg,
#1d4ed8,
#2563eb,
#1e40af
);
padding:45px;
border-radius:28px;
box-shadow:
0 25px 60px rgba(0,0,0,.45);
overflow:hidden;
position:relative;
">

<div
style="
position:absolute;
right:-80px;
top:-80px;
width:260px;
height:260px;
border-radius:50%;
background:
rgba(255,255,255,.08);
">
</div>

<div
style="
position:absolute;
right:140px;
bottom:-70px;
width:170px;
height:170px;
border-radius:50%;
background:
rgba(255,255,255,.05);
">
</div>

<div
style="
position:relative;
z-index:2;
">

<div
style="
font-size:54px;
font-weight:800;
margin-bottom:12px;
">

📚 Resources Hub

</div>

<div
style="
font-size:19px;
line-height:1.8;
max-width:900px;
color:#e2e8f0;
">

Master Numerical Methods using carefully
organized notes, books, videos,
formula sheets,
coding references,
practice questions,
previous-year papers
and interactive simulations.

</div>

<div
style="
display:flex;
gap:16px;
flex-wrap:wrap;
margin-top:28px;
">

<div class="hero-pill">
📄 Notes
</div>

<div class="hero-pill">
🎥 Videos
</div>

<div class="hero-pill">
📚 Books
</div>

<div class="hero-pill">
💻 Codes
</div>

<div class="hero-pill">
📝 Practice
</div>

<div class="hero-pill">
🔬 Simulators
</div>

</div>

<div
style="
margin-top:35px;
display:flex;
gap:15px;
flex-wrap:wrap;
">

<input

id="resourceSearch"

placeholder="🔍 Search modules, topics, books..."

style="
flex:1;
min-width:320px;
padding:18px;
font-size:17px;
border:none;
outline:none;
border-radius:16px;
background:white;
"

>

<button

id="clearSearch"

style="
padding:18px 28px;
background:#0f172a;
color:white;
border:none;
border-radius:16px;
font-size:16px;
cursor:pointer;
"

>

Clear

</button>

</div>

</div>

</div>

<!-- =========================
STATISTICS
========================= -->

<div
id="statsGrid"

style="
display:grid;
grid-template-columns:
repeat(auto-fit,minmax(170px,1fr));
gap:18px;
margin-top:35px;
margin-bottom:40px;
">

${statCard(
"📘",
"Modules",
resources.length
)}

${statCard(
"📄",
"Notes",
countCategory("notes")
)}

${statCard(
"🎥",
"Videos",
countCategory("videos")
)}

${statCard(
"📚",
"Books",
countCategory("books")
)}

${statCard(
"📝",
"Practice",
countCategory("practice")
)}

${statCard(
"💻",
"Code",
countCategory("code")
)}

${statCard(
"🔬",
"Labs",
countCategory("simulators")
)}

</div>

<!-- =========================
FILTER BAR
========================= -->

<div
style="
display:flex;
gap:12px;
flex-wrap:wrap;
margin-bottom:35px;
">

${filterChip("All")}
${filterChip("Notes")}
${filterChip("Videos")}
${filterChip("Books")}
${filterChip("Practice")}
${filterChip("Code")}
${filterChip("Simulators")}

</div>

<!-- =========================
MODULE GRID
========================= -->

<div

id="resourceGrid"

style="
display:grid;
grid-template-columns:
repeat(auto-fit,minmax(360px,1fr));
gap:28px;
">

</div>

</div>

</div>

`;

const grid =
document.getElementById(
"resourceGrid"
);

const search =
document.getElementById(
"resourceSearch"
);

const clearBtn =
document.getElementById(
"clearSearch"
);

function renderCards(keyword=""){

grid.innerHTML="";

resources

.filter(module=>{

if(keyword==="") return true;

const q =
keyword.toLowerCase();

if(
module.title
.toLowerCase()
.includes(q)
)
return true;

if(
module.module
.toLowerCase()
.includes(q)
)
return true;

return module.topics.some(
topic=>
topic
.toLowerCase()
.includes(q)
);

})

.forEach(module=>{

const card =
document.createElement("div");

card.className =
"resource-card";

card.style.cssText=`

background:#111827;

border-radius:22px;

padding:30px;

cursor:pointer;

border:1px solid #1f2937;

transition:.25s;

display:flex;

flex-direction:column;

`;

card.onmouseenter=()=>{

card.style.transform=
"translateY(-8px)";

card.style.borderColor=
"#3b82f6";

card.style.boxShadow=
"0 20px 50px rgba(0,0,0,.35)";

};

card.onmouseleave=()=>{

card.style.transform="";

card.style.borderColor=
"#1f2937";

card.style.boxShadow="";

};

card.innerHTML=`

<div
style="
display:flex;
justify-content:space-between;
align-items:center;
">

<div
style="
font-size:50px;
">
${module.icon}
</div>

<div
style="
background:#1e3a8a;
padding:8px 14px;
border-radius:999px;
font-size:13px;
">

${module.topics.length}
Topics

</div>

</div>

<div
style="
margin-top:22px;
color:#60a5fa;
font-size:14px;
letter-spacing:1px;
text-transform:uppercase;
">

${module.module}

</div>

<div
style="
margin-top:8px;
font-size:28px;
font-weight:700;
">

${module.title}

</div>

<div
style="
margin-top:18px;
display:flex;
flex-wrap:wrap;
gap:8px;
">

${module.topics
.map(topic=>`

<span
style="
background:#1f2937;
padding:8px 12px;
border-radius:999px;
font-size:13px;
">

${topic}

</span>

`)
.join("")}

</div>
<div
style="
margin-top:28px;
display:flex;
justify-content:space-between;
align-items:center;
">

<div
style="
display:flex;
gap:18px;
color:#94a3b8;
font-size:14px;
">

<div>

📄
${module.resources.notes.length}
Notes

</div>

<div>

🎥
${module.resources.videos.length}
Videos

</div>

<div>

📚
${module.resources.books.length}
Books

</div>

</div>

</div>

<div
style="
margin-top:28px;
width:100%;
height:8px;
background:#1f2937;
border-radius:999px;
overflow:hidden;
">

<div
style="
height:100%;
width:${Math.min(
100,
module.topics.length*18
)}%;
background:
linear-gradient(
90deg,
#3b82f6,
#60a5fa
);
">
</div>

</div>

<div
style="
margin-top:28px;
display:flex;
justify-content:space-between;
align-items:center;
">

<div
style="
color:#94a3b8;
font-size:14px;
">

Complete Resource Collection

</div>

<button

style="
padding:12px 20px;
border:none;
border-radius:12px;
background:#2563eb;
color:white;
cursor:pointer;
font-size:15px;
font-weight:600;
"

>

Open Resources →

</button>

</div>

`;

card.onclick=()=>{

openModule(module);

};

grid.appendChild(card);

});

}

renderCards();

search.oninput=()=>{

renderCards(
search.value.trim()
);

};

clearBtn.onclick=()=>{

search.value="";

renderCards();

};

}

function openModule(module){

const app=
document.getElementById(
"app"
);

renderModuleResources(
app,
module
);

}

function statCard(
icon,
title,
value
){

return `

<div

style="
background:#111827;
border-radius:18px;
padding:24px;
text-align:center;
border:1px solid #1f2937;
transition:.25s;
"

>

<div
style="
font-size:38px;
">

${icon}

</div>

<div
style="
margin-top:12px;
color:#94a3b8;
font-size:15px;
">

${title}

</div>

<div
style="
margin-top:15px;
font-size:34px;
font-weight:700;
color:white;
">

${value}

</div>

</div>

`;

}

function filterChip(name){

return `

<div

style="
padding:10px 18px;
background:#111827;
border-radius:999px;
border:1px solid #1f2937;
color:#cbd5e1;
font-size:14px;
cursor:pointer;
user-select:none;
transition:.25s;
"

onmouseover="
this.style.background='#1e293b';
"

onmouseout="
this.style.background='#111827';
"

>

${name}

</div>

`;

}

function countCategory(category){

let total=0;

resources.forEach(module=>{

if(
module.resources &&
module.resources[category]
){

total+=
module.resources[
category
].length;

}

});

return total;

}
/* ============================================
   FUTURE READY HELPERS
============================================ */

export function refreshResources(){

const search =
document.getElementById(
"resourceSearch"
);

if(search){

search.dispatchEvent(
new Event("input")
);

}

}

/* ============================================
   EMPTY STATE (Future Search)
============================================ */

export function showNoResults(grid){

grid.innerHTML = `

<div
style="
grid-column:1/-1;
padding:60px;
border-radius:22px;
background:#111827;
text-align:center;
border:1px solid #1f2937;
">

<div
style="
font-size:70px;
margin-bottom:20px;
">

🔍

</div>

<h2
style="
margin:0;
font-size:30px;
color:white;
">

No Resources Found

</h2>

<p
style="
margin-top:15px;
color:#94a3b8;
font-size:17px;
line-height:1.8;
">

Try searching using another keyword.

</p>

</div>

`;

}

/* ============================================
   FUTURE:
   Resource Counters
============================================ */

export function totalResources(){

let total = 0;

resources.forEach(module=>{

Object.values(
module.resources
).forEach(arr=>{

total += arr.length;

});

});

return total;

}

/* ============================================
   FUTURE:
   Featured Resources
============================================ */

export function featuredResources(){

const featured=[];

resources.forEach(module=>{

Object.values(
module.resources
).forEach(arr=>{

arr.forEach(item=>{

if(item.featured){

featured.push(item);

}

});

});

});

return featured;

}

/* ============================================
   FUTURE:
   Download Counter
============================================ */

export function increaseDownloadCounter(resource){

resource.downloads =
(resource.downloads||0)+1;

}

/* ============================================
   END OF FILE
============================================ */
