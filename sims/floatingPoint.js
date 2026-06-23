export function runFloatingPoint(container){

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
margin-bottom:10px;
color:#60a5fa;
"
>
Floating Point Playground
</h2>

<p
style="
color:#94a3b8;
margin-bottom:20px;
"
>
Learn how floating point numbers work through
scientific notation, mantissa, exponent,
precision and normalization.
</p>

<div
style="
display:flex;
gap:12px;
flex-wrap:wrap;
margin-bottom:20px;
"
>

<input
id="numberInput"
type="number"
step="any"
value="12345.678"
style="
padding:12px;
width:220px;
border-radius:12px;
"
/>

<select
id="precision"
style="
padding:12px;
border-radius:12px;
"
>

<option value="3">
3 Significant Digits
</option>

<option value="5">
5 Significant Digits
</option>

<option value="7">
7 Significant Digits
</option>

<option value="10">
10 Significant Digits
</option>

</select>

<button
id="convertBtn"
style="
padding:12px 20px;
background:#2563eb;
color:white;
border:none;
border-radius:12px;
font-weight:bold;
cursor:pointer;
"
>
Analyze
</button>

<button
id="resetBtn"
style="
padding:12px 20px;
background:#475569;
color:white;
border:none;
border-radius:12px;
font-weight:bold;
cursor:pointer;
"
>
Reset
</button>

</div>

<div id="status"></div>

<div id="scientificView"></div>

<div id="mantissaView"></div>

<div id="precisionView"></div>

<div id="normalizationView"></div>

<div id="realWorldView"></div>

</div>

`;

const numberInput =
container.querySelector("#numberInput");

const precisionInput =
container.querySelector("#precision");

const convertBtn =
container.querySelector("#convertBtn");

const resetBtn =
container.querySelector("#resetBtn");

const status =
container.querySelector("#status");

const scientificView =
container.querySelector("#scientificView");

const mantissaView =
container.querySelector("#mantissaView");

const precisionView =
container.querySelector("#precisionView");

const normalizationView =
container.querySelector("#normalizationView");

const realWorldView =
container.querySelector("#realWorldView");

function clearViews(){

status.innerHTML = "";

scientificView.innerHTML = "";

mantissaView.innerHTML = "";

precisionView.innerHTML = "";

normalizationView.innerHTML = "";

realWorldView.innerHTML = "";

}

resetBtn.onclick = () => {

numberInput.value =
"12345.678";

clearViews();

};

function scientificParts(num){

if(num === 0){

return {

mantissa:0,

exponent:0

};

}

const exponent =
Math.floor(
Math.log10(
Math.abs(num)
)
);

const mantissa =
num /
Math.pow(
10,
exponent
);

return {

mantissa,

exponent

};

}

function roundToSignificant(
num,
digits
){

return Number(
num.toPrecision(
digits
)
);

}
function renderScientificNotation(num){

const parts =
scientificParts(num);

scientificView.innerHTML = `

<div
style="
margin-top:20px;
padding:18px;
border-radius:16px;
background:#111827;
"
>

<h3>
Scientific Notation
</h3>

<div
style="
font-size:30px;
font-weight:bold;
margin-top:15px;
color:#60a5fa;
"
>

${parts.mantissa.toFixed(8)}
× 10<sup>${parts.exponent}</sup>

</div>

</div>

`;

}

function renderMantissaExponent(num){

const parts =
scientificParts(num);

mantissaView.innerHTML = `

<div
style="
margin-top:20px;
padding:18px;
border-radius:16px;
background:#0f172a;
"
>

<h3>
Mantissa & Exponent
</h3>

<br>

Mantissa:

<b>
${parts.mantissa}
</b>

<br><br>

Exponent:

<b>
${parts.exponent}
</b>

<br><br>

Formula:

<br>

Value =
Mantissa × 10<sup>Exponent</sup>

</div>

`;

}

function renderPrecisionLoss(
num,
digits
){

const rounded =
roundToSignificant(
num,
digits
);

const error =
Math.abs(
num - rounded
);

const relativeError =
num !== 0
? (error/Math.abs(num))*100
: 0;

precisionView.innerHTML = `

<div
style="
margin-top:20px;
padding:18px;
border-radius:16px;
background:#111827;
"
>

<h3>
Precision Analysis
</h3>

<br>

Original Number:

<b>
${num}
</b>

<br><br>

Stored Number
(${digits} Significant Digits):

<b>
${rounded}
</b>

<br><br>

Absolute Error:

<b>
${error}
</b>

<br><br>

Relative Error:

<b>
${relativeError.toFixed(8)} %
</b>

</div>

`;

}

function generateNormalizationSteps(num){

let value =
Math.abs(num);

if(value === 0){

return ["0"];

}

const steps = [];

while(value >= 10){

steps.push(
value.toFixed(8)
);

value /= 10;

}

while(
value > 0 &&
value < 1
){

steps.push(
value.toFixed(8)
);

value *= 10;

}

steps.push(
value.toFixed(8)
);

return steps;

}

function renderNormalization(num){

const steps =
generateNormalizationSteps(num);

normalizationView.innerHTML = `

<div
style="
margin-top:20px;
padding:18px;
border-radius:16px;
background:#111827;
"
>

<h3>
Normalization Process
</h3>

<div
style="
margin-top:15px;
line-height:2;
font-family:monospace;
"
>

${steps
.map(
(step,i)=>`

Step ${i+1}

→

${step}

`
)
.join("<br>")}

</div>

</div>

`;

}
function renderRealWorldExamples(num){

const moonDistance =
384400000;

const atomSize =
0.0000000001;

const avogadro =
602200000000000000000000;

realWorldView.innerHTML = `

<div
style="
margin-top:20px;
padding:18px;
border-radius:16px;
background:#0f172a;
"
>

<h3>
Real World Floating Point Examples
</h3>

<br>

🌙 Moon Distance:

<br>

${moonDistance.toLocaleString()}

<br>

↓

<br>

${moonDistance.toExponential(6)}

<br><br>

⚛ Atomic Scale:

<br>

${atomSize}

<br>

↓

<br>

${atomSize.toExponential(6)}

<br><br>

🧪 Avogadro Number:

<br>

${avogadro.toLocaleString()}

<br>

↓

<br>

${avogadro.toExponential(6)}

</div>

`;

}

function renderFloatingPointDemo(){

const result =
0.1 + 0.2;

const expected =
0.3;

const diff =
Math.abs(
result - expected
);

const card = document.createElement("div");

card.style.marginTop = "20px";
card.style.padding = "18px";
card.style.borderRadius = "16px";
card.style.background = "#111827";

card.innerHTML = `

<h3>
Floating Point Surprise
</h3>

<br>

0.1 + 0.2

<br><br>

Expected:

<b>
0.3
</b>

<br><br>

Computer Stores:

<b style="color:#60a5fa;">
${result}
</b>

<br><br>

Difference:

<b>
${diff}
</b>

<br><br>

Reason:

<br>

Floating point numbers are stored as binary approximations.

`;

realWorldView.appendChild(card);

}

function renderExponentShift(num){

const parts =
scientificParts(num);

const card =
document.createElement("div");

card.style.marginTop = "20px";
card.style.padding = "18px";
card.style.borderRadius = "16px";
card.style.background = "#111827";

card.innerHTML = `

<h3>
Floating Decimal Point
</h3>

<div
id="shiftDemo"
style="
margin-top:15px;
font-size:24px;
font-weight:bold;
color:#60a5fa;
"
>

${num}

</div>

`;

realWorldView.appendChild(card);

const target =
card.querySelector("#shiftDemo");

let step = 0;

const interval =
setInterval(()=>{

step++;

target.innerHTML =

parts.mantissa.toFixed(8)

+

" × 10"

+

"<sup>"

+

(parts.exponent)

+

"</sup>";

if(step > 1){

clearInterval(interval);

}

},1200);

}
convertBtn.onclick = () => {

clearViews();

const num =
parseFloat(
numberInput.value
);

if(
isNaN(num)
){

status.innerHTML = `

<div
style="
padding:15px;
border-radius:12px;
background:#7f1d1d;
color:white;
font-weight:bold;
"
>

Please enter a valid number.

</div>

`;

return;

}

const digits =
Number(
precisionInput.value
);

status.innerHTML = `

<div
style="
padding:15px;
border-radius:12px;
background:#14532d;
color:white;
font-weight:bold;
"
>

Analyzing Floating Point Representation...

</div>

`;

setTimeout(()=>{

renderScientificNotation(
num
);

},300);

setTimeout(()=>{

renderMantissaExponent(
num
);

},700);

setTimeout(()=>{

renderPrecisionLoss(
num,
digits
);

},1100);

setTimeout(()=>{

renderNormalization(
num
);

},1500);

setTimeout(()=>{

renderRealWorldExamples(
num
);

},1900);

setTimeout(()=>{

renderExponentShift(
num
);

},2300);

setTimeout(()=>{

renderFloatingPointDemo();

},2700);

};

}
