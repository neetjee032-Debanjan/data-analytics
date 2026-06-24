export function runSimpson38(container){

container.innerHTML = `

<div
style="
padding:24px;
background:rgba(15,23,42,.75);
backdrop-filter:blur(12px);
border-radius:20px;
border:1px solid rgba(255,255,255,.08);
color:white;
font-family:Inter,sans-serif;
"
>

<h2
style="
color:#60a5fa;
margin-bottom:10px;
"
>
Simpson's 3/8 Rule Laboratory
</h2>

<p
style="
color:#94a3b8;
margin-bottom:20px;
"
>
Visualize numerical integration using Simpson's
3/8 Rule and compare against a high-accuracy
reference integral.
</p>

<div
style="
display:flex;
gap:12px;
flex-wrap:wrap;
margin-bottom:20px;
"
>

<select id="functionSelect">

<option value="x*x">
x²
</option>

<option value="x*x*x">
x³
</option>

<option value="Math.sin(x)">
sin(x)
</option>

<option value="Math.cos(x)">
cos(x)
</option>

<option value="Math.exp(x)">
eˣ
</option>

<option value="custom">
Custom Function
</option>

</select>

<input
id="customFunction"
type="text"
value="Math.sin(x)+x*x"
placeholder="Enter JS function"
style="
flex:1;
min-width:220px;
padding:8px;
background:#0f172a;
border:1px solid #334155;
color:white;
border-radius:8px;
"
/>

</div>

<div
style="
margin-bottom:15px;
"
>

<div>

a =
<span id="aValue">
0
</span>

</div>

<input
id="aSlider"
type="range"
min="-10"
max="10"
step="0.1"
value="0"
style="width:100%;"
/>

</div>

<div
style="
margin-bottom:15px;
"
>

<div>

b =
<span id="bValue">
3
</span>

</div>

<input
id="bSlider"
type="range"
min="-10"
max="10"
step="0.1"
value="3"
style="width:100%;"
/>

</div>

<div
style="
margin-bottom:20px;
"
>

<div>

n =
<span id="nValue">
6
</span>

(subintervals)

</div>

<input
id="nSlider"
type="range"
min="3"
max="30"
step="3"
value="6"
style="width:100%;"
/>

</div>

<canvas
id="graph"
width="1100"
height="600"
style="
background:#020617;
border:1px solid #334155;
border-radius:16px;
max-width:100%;
"
>
</canvas>

<div id="results"></div>

</div>

`;

const canvas =
container.querySelector("#graph");

const ctx =
canvas.getContext("2d");

const functionSelect =
container.querySelector("#functionSelect");

const customFunction =
container.querySelector("#customFunction");

const aSlider =
container.querySelector("#aSlider");

const bSlider =
container.querySelector("#bSlider");

const nSlider =
container.querySelector("#nSlider");

const aValue =
container.querySelector("#aValue");

const bValue =
container.querySelector("#bValue");

const nValue =
container.querySelector("#nValue");

const results =
container.querySelector("#results");

const W =
canvas.width;

const H =
canvas.height;

const SCALE = 45;

function worldToScreen(x,y){

return {

x:
W/2 + x*SCALE,

y:
H/2 - y*SCALE

};

}

function drawGrid(){

ctx.clearRect(
0,
0,
W,
H
);

ctx.fillStyle =
"#020617";

ctx.fillRect(
0,
0,
W,
H
);

ctx.strokeStyle =
"#1e293b";

for(
let x=0;
x<W;
x+=SCALE
){

ctx.beginPath();

ctx.moveTo(
x,
0
);

ctx.lineTo(
x,
H
);

ctx.stroke();

}

for(
let y=0;
y<H;
y+=SCALE
){

ctx.beginPath();

ctx.moveTo(
0,
y
);

ctx.lineTo(
W,
y
);

ctx.stroke();

}

ctx.strokeStyle =
"#94a3b8";

ctx.lineWidth = 2;

ctx.beginPath();

ctx.moveTo(
0,
H/2
);

ctx.lineTo(
W,
H/2
);

ctx.stroke();

ctx.beginPath();

ctx.moveTo(
W/2,
0
);

ctx.lineTo(
W/2,
H
);

ctx.stroke();

drawTicks();

drawAxesLabels();

}
function drawAxesLabels(){

ctx.fillStyle =
"#cbd5e1";

ctx.font =
"16px Arial";

ctx.fillText(
"X",
W-30,
H/2-10
);

ctx.fillText(
"Y",
W/2+10,
25
);

ctx.fillStyle =
"#475569";

ctx.font =
"18px Arial";

ctx.fillText(
"I",
W*0.75,
H*0.25
);

ctx.fillText(
"II",
W*0.25,
H*0.25
);

ctx.fillText(
"III",
W*0.25,
H*0.75
);

ctx.fillText(
"IV",
W*0.75,
H*0.75
);

}

function drawTicks(){

ctx.strokeStyle =
"#334155";

ctx.fillStyle =
"#64748b";

ctx.font =
"12px Arial";

for(
let i=-12;
i<=12;
i++
){

const sx =
W/2 + i*SCALE;

ctx.beginPath();

ctx.moveTo(
sx,
H/2-5
);

ctx.lineTo(
sx,
H/2+5
);

ctx.stroke();

if(i!==0){

ctx.fillText(
i,
sx-5,
H/2+20
);

}

}

for(
let i=-6;
i<=6;
i++
){

const sy =
H/2 - i*SCALE;

ctx.beginPath();

ctx.moveTo(
W/2-5,
sy
);

ctx.lineTo(
W/2+5,
sy
);

ctx.stroke();

if(i!==0){

ctx.fillText(
i,
W/2+10,
sy+4
);

}

}

}

function getFunction(){

if(
functionSelect.value ===
"custom"
){

try{

return new Function(
"x",
`return ${customFunction.value};`
);

}
catch{

return null;

}

}

return new Function(
"x",
`return ${functionSelect.value};`
);

}

function safeEvaluate(
f,
x
){

try{

const y =
f(x);

if(
!isFinite(y)
)
return null;

return y;

}
catch{

return null;

}

}

function plotFunction(){

const f =
getFunction();

if(!f)
return;

ctx.beginPath();

ctx.strokeStyle =
"#22c55e";

ctx.lineWidth = 3;

let started =
false;

for(
let x=-12;
x<=12;
x+=0.02
){

const y =
safeEvaluate(
f,
x
);

if(
y===null
)
continue;

const p =
worldToScreen(
x,
y
);

if(!started){

ctx.moveTo(
p.x,
p.y
);

started = true;

}
else{

ctx.lineTo(
p.x,
p.y
);

}

}

ctx.stroke();

}

function getInputs(){

let a =
Number(
aSlider.value
);

let b =
Number(
bSlider.value
);

let n =
Number(
nSlider.value
);

if(
a===b
)
b += 0.1;

if(
n % 3 !== 0
){

n =
Math.ceil(
n/3
)*3;

}

aValue.textContent =
a.toFixed(2);

bValue.textContent =
b.toFixed(2);

nValue.textContent =
n;

return {
a,
b,
n
};

}

function drawIntegrationArea(){

const f =
getFunction();

if(!f)
return;

const {
a,
b
}
=
getInputs();

ctx.fillStyle =
"rgba(59,130,246,0.20)";

for(
let x=a;
x<b;
x+=0.02
){

const y =
safeEvaluate(
f,
x
);

if(
y===null
)
continue;

const p1 =
worldToScreen(
x,
0
);

const p2 =
worldToScreen(
x,
y
);

ctx.fillRect(
p1.x,
Math.min(
p1.y,
p2.y
),
2,
Math.abs(
p2.y-p1.y
)
);

}

}
function simpson38Integral(){

const f =
getFunction();

if(!f)
return null;

const {
a,
b,
n
}
=
getInputs();

const h =
(b-a)/n;

let sum = 0;

for(
let i=0;
i<=n;
i++
){

const x =
a + i*h;

const fx =
safeEvaluate(
f,
x
);

if(
fx===null
)
return null;

if(
i===0 ||
i===n
){

sum += fx;

}
else if(
i % 3 === 0
){

sum +=
2*fx;

}
else{

sum +=
3*fx;

}

}

return {

integral:
(3*h/8)*sum,

h

};

}

function drawSimpsonNodes(){

const f =
getFunction();

if(!f)
return;

const {
a,
b,
n
}
=
getInputs();

const h =
(b-a)/n;

for(
let i=0;
i<=n;
i++
){

const x =
a+i*h;

const y =
safeEvaluate(
f,
x
);

if(
y===null
)
continue;

const p =
worldToScreen(
x,
y
);

ctx.beginPath();

ctx.arc(
p.x,
p.y,
6,
0,
Math.PI*2
);

if(
i===0 ||
i===n
){

ctx.fillStyle =
"#f59e0b";

}
else if(
i%3===0
){

ctx.fillStyle =
"#ef4444";

}
else{

ctx.fillStyle =
"#3b82f6";

}

ctx.fill();

ctx.strokeStyle =
"white";

ctx.stroke();

}

}

function drawVerticalStrips(){

const f =
getFunction();

if(!f)
return;

const {
a,
b,
n
}
=
getInputs();

const h =
(b-a)/n;

ctx.strokeStyle =
"rgba(255,255,255,.35)";

ctx.lineWidth = 1;

for(
let i=0;
i<=n;
i++
){

const x =
a+i*h;

const y =
safeEvaluate(
f,
x
);

if(
y===null
)
continue;

const p1 =
worldToScreen(
x,
0
);

const p2 =
worldToScreen(
x,
y
);

ctx.beginPath();

ctx.moveTo(
p1.x,
p1.y
);

ctx.lineTo(
p2.x,
p2.y
);

ctx.stroke();

}

}

function drawWeights(){

const f =
getFunction();

if(!f)
return;

const {
a,
b,
n
}
=
getInputs();

const h =
(b-a)/n;

ctx.font =
"14px Arial";

for(
let i=0;
i<=n;
i++
){

const x =
a+i*h;

const y =
safeEvaluate(
f,
x
);

if(
y===null
)
continue;

const p =
worldToScreen(
x,
y
);

let weight;

if(
i===0 ||
i===n
){

weight = "1";

}
else if(
i%3===0
){

weight = "2";

}
else{

weight = "3";

}

ctx.fillStyle =
"#f8fafc";

ctx.fillText(
`w=${weight}`,
p.x-12,
p.y-18
);

}

}
function referenceIntegral(){

const f =
getFunction();

if(!f)
return null;

const {
a,
b
}
=
getInputs();

const steps =
6000;

const h =
(b-a)/steps;

let sum = 0;

for(
let i=0;
i<steps;
i++
){

const x1 =
a + i*h;

const x2 =
x1 + h;

const y1 =
safeEvaluate(
f,
x1
);

const y2 =
safeEvaluate(
f,
x2
);

if(
y1===null ||
y2===null
)
return null;

sum +=
(y1+y2)*h/2;

}

return sum;

}

function renderResults(){

const simpson =
simpson38Integral();

if(!simpson)
return;

const reference =
referenceIntegral();

if(
reference===null
)
return;

const approx =
simpson.integral;

const error =

Math.abs(
approx-reference
);

const percentError =

Math.abs(
(error/reference)*100
);

const color =

error < 0.0001
? "#16a34a"

: error < 0.01
? "#eab308"

: "#ef4444";

results.innerHTML = `

<div
style="
margin-top:20px;
padding:20px;
background:#111827;
border-radius:16px;
"
>

<h3>
Simpson 3/8 Analysis
</h3>

<div
style="
line-height:2;
margin-top:12px;
"
>

Step Size h

=

<b>

${simpson.h.toFixed(8)}

</b>

<br>

Simpson 3/8 Integral

=

<b>

${approx.toFixed(10)}

</b>

<br>

Reference Integral

=

<b>

${reference.toFixed(10)}

</b>

<br>

Absolute Error

=

<b style="color:${color};">

${error.toExponential(4)}

</b>

<br>

Percentage Error

=

<b style="color:${color};">

${percentError.toFixed(8)}%

</b>

</div>

</div>

`;

}

function renderTheoryPanel(){

results.innerHTML += `

<div
style="
margin-top:20px;
padding:20px;
background:#0f172a;
border-radius:16px;
"
>

<h3>
Simpson's 3/8 Rule Formula
</h3>

<div
style="
line-height:2;
margin-top:12px;
"
>

For each block of three subintervals:

<br><br>

<b>

∫f(x)dx

≈

(3h/8)

[

f(x₀)

+

3f(x₁)

+

3f(x₂)

+

f(x₃)

]

</b>

<br><br>

Weights Pattern:

<br>

1 → 3 → 3 → 2 → 3 → 3 → 2 ...

<br>

Final node weight = 1

<br><br>

Accuracy:

<br>

Fourth-order numerical integration

<br>

Error decreases rapidly as n increases.

</div>

</div>

`;

}

function drawConvergenceHint(){

const {
n
}
=
getInputs();

ctx.fillStyle =
"#94a3b8";

ctx.font =
"18px Arial";

ctx.fillText(

`Increase n for better accuracy`,

20,

35

);

ctx.fillText(

`Current n = ${n}`,

20,

65

);

}
function redrawLab(){

drawGrid();

plotFunction();

drawIntegrationArea();

drawVerticalStrips();

drawSimpsonNodes();

drawWeights();

drawConvergenceHint();

renderResults();

renderTheoryPanel();

}

function initializeLab(){

redrawLab();

functionSelect.addEventListener(
"change",
redrawLab
);

customFunction.addEventListener(
"input",
redrawLab
);

aSlider.addEventListener(
"input",
redrawLab
);

bSlider.addEventListener(
"input",
redrawLab
);

nSlider.addEventListener(
"input",
redrawLab
);

}

initializeLab();

}
