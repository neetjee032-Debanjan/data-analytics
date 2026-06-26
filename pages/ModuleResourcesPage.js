export function renderModuleResources(app, module){

app.innerHTML = `

<div
style="
max-width:1200px;
margin:auto;
padding:40px;
">

<button
id="backBtn"
style="
padding:12px 18px;
border:none;
border-radius:10px;
background:#2563eb;
color:white;
cursor:pointer;
margin-bottom:25px;
">
← Back to Resources
</button>

<h1
style="
color:#60a5fa;
margin-bottom:10px;
">
${module.icon} ${module.title}
</h1>

<p
style="
color:#94a3b8;
margin-bottom:35px;
font-size:18px;
">
Everything related to ${module.title} is organized below.
</p>

<div
style="
display:grid;
grid-template-columns:
repeat(auto-fit,minmax(300px,1fr));
gap:25px;
">

${createSection("📄 Notes",module.resources.notes)}

${createSection("🎥 Video Lectures",module.resources.videos)}

${createSection("📚 Books",module.resources.books)}

${createSection("📝 Practice",module.resources.practice)}

${createSection("💻 Programming Code",module.resources.code)}

${createSection("📐 Formula Sheets",module.resources.formulas)}

${createSection("🔬 Simulators",module.resources.simulators)}

</div>

</div>

`;

document
.getElementById("backBtn")
.onclick=()=>{

window.location.hash="resources";

};

}

function createSection(title,list){

return `

<div
style="
background:#111827;
border-radius:16px;
padding:24px;
border:1px solid #1f2937;
">

<h2
style="
margin-top:0;
color:white;
">
${title}
</h2>

${
list.length===0

?

`
<div
style="
color:#64748b;
padding:18px 0;
">
Resources will be added soon.
</div>
`

:

list.map(item=>`

<div
style="
padding:12px;
margin-top:10px;
background:#1e293b;
border-radius:10px;
cursor:pointer;
transition:.2s;
">

${item.title}

</div>

`).join("")

}

</div>

`;

}
