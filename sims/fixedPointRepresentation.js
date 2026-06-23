export function runFixedPointRepresentation(container){

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
Fixed Point Representation Laboratory
</h2>

<p
style="
color:#94a3b8;
margin-bottom:20px;
"
>
Explore Q-Format fixed-point storage,
binary representation,
precision loss and overflow.
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
id="decimalInput"
type="number"
step="any"
value="12.75"
placeholder="Enter Number"
style="
padding:12px;
border-radius:12px;
width:220px;
"
/>

<select
id="qFormat"
style="
padding:12px;
border-radius:12px;
"
>

<option value="8,8">
Q8.8
</option>

<option value="4,4">
Q4.4
</option>

<option value="16,16">
Q16.16
</option>

<option value="1,15">
Q1.15
</option>

<option value="2,14">
Q2.14
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
Convert
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

<div id="rangeView"></div>

<div id="binaryView"></div>

<div id="registerView"></div>

<div id="precisionView"></div>

<div id="overflowView"></div>

<div id="bitEditor"></div>

</div>

`;

const decimalInput =
container.querySelector("#decimalInput");

const qFormat =
container.querySelector("#qFormat");

const convertBtn =
container.querySelector("#convertBtn");

const resetBtn =
container.querySelector("#resetBtn");

const status =
container.querySelector("#status");

const rangeView =
container.querySelector("#rangeView");

const binaryView =
container.querySelector("#binaryView");

const registerView =
container.querySelector("#registerView");

const precisionView =
container.querySelector("#precisionView");

const overflowView =
container.querySelector("#overflowView");

const bitEditor =
container.querySelector("#bitEditor");

function clearAll(){

status.innerHTML = "";

rangeView.innerHTML = "";

binaryView.innerHTML = "";

registerView.innerHTML = "";

precisionView.innerHTML = "";

overflowView.innerHTML = "";

bitEditor.innerHTML = "";

}

resetBtn.onclick = () => {

decimalInput.value = "12.75";

clearAll();

};

function createBitBox(bit,color){

return `

<div
style="
width:34px;
height:34px;
display:flex;
align-items:center;
justify-content:center;
border-radius:8px;
font-weight:bold;
background:${color};
"
>
${bit}
</div>

`;

}

function toBinaryFixed(
value,
integerBits,
fractionBits
){

const scale =
Math.pow(
2,
fractionBits
);

const fixedValue =
Math.round(
value * scale
);

const totalBits =
integerBits +
fractionBits;

let binary =
(fixedValue >>> 0)
.toString(2);

binary =
binary.padStart(
totalBits,
"0"
);

return {
fixedValue,
binary
};

}

function calculateRange(
integerBits,
fractionBits
){

const max =
Math.pow(
2,
integerBits
) -
Math.pow(
2,
-fractionBits
);

const min = 0;

return {
min,
max
};

}
function renderRange(
integerBits,
fractionBits
){

const range =
calculateRange(
integerBits,
fractionBits
);

rangeView.innerHTML = `

<div
style="
margin-top:20px;
padding:18px;
border-radius:16px;
background:#111827;
"
>

<h3>
Representable Range
</h3>

<div
style="
margin-top:10px;
font-size:17px;
"
>

Minimum Value:

<b>
${range.min}
</b>

<br><br>

Maximum Value:

<b>
${range.max}
</b>

</div>

</div>

`;

}

function renderOverflow(
value,
integerBits,
fractionBits
){

const range =
calculateRange(
integerBits,
fractionBits
);

if(
value > range.max ||
value < range.min
){

overflowView.innerHTML = `

<div
style="
margin-top:20px;
padding:18px;
border-radius:16px;
background:#7f1d1d;
color:white;
font-weight:bold;
"
>

⚠ OVERFLOW DETECTED

<br><br>

Entered Value:

${value}

<br>

Allowed Range:

${range.min}
to
${range.max}

</div>

`;

return true;

}

overflowView.innerHTML = `

<div
style="
margin-top:20px;
padding:18px;
border-radius:16px;
background:#14532d;
color:white;
font-weight:bold;
"
>

✅ Value Fits Inside Selected Q Format

</div>

`;

return false;

}

function renderBinary(
binary,
integerBits,
fractionBits
){

const intPart =
binary.slice(
0,
integerBits
);

const fracPart =
binary.slice(
integerBits
);

binaryView.innerHTML = `

<div
style="
margin-top:20px;
padding:18px;
border-radius:16px;
background:#111827;
"
>

<h3>
Binary Representation
</h3>

<div
style="
margin-top:15px;
display:flex;
gap:4px;
flex-wrap:wrap;
"
>

${intPart
.split("")
.map(
bit =>
createBitBox(
bit,
"#2563eb"
)
)
.join("")}

${fracPart
.split("")
.map(
bit =>
createBitBox(
bit,
"#9333ea"
)
)
.join("")}

</div>

<div
style="
margin-top:15px;
display:flex;
gap:20px;
font-size:14px;
"
>

<div>
🔵 Integer Bits
</div>

<div>
🟣 Fraction Bits
</div>

</div>

</div>

`;

}

function renderRegister(
binary,
integerBits,
fractionBits
){

const intPart =
binary.slice(
0,
integerBits
);

const fracPart =
binary.slice(
integerBits
);

registerView.innerHTML = `

<div
style="
margin-top:20px;
padding:18px;
border-radius:16px;
background:#0f172a;
"
>

<h3>
Memory Register View
</h3>

<div
style="
margin-top:18px;
font-family:monospace;
font-size:18px;
"
>

┌──────── Integer ────────┬──────── Fraction ────────┐

<br><br>

${intPart}
&nbsp;&nbsp;
${fracPart}

<br><br>

└─────────────────────────┴──────────────────────────┘

</div>

</div>

`;

}

function renderPrecision(
original,
stored
){

const error =
Math.abs(
original - stored
);

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

Requested Value:

<b>
${original}
</b>

<br><br>

Stored Value:

<b>
${stored}
</b>

<br><br>

Absolute Error:

<b>
${error}
</b>

</div>

`;

}
function binaryToDecimalFixed(
binary,
integerBits,
fractionBits
){

const intPart =
binary.slice(
0,
integerBits
);

const fracPart =
binary.slice(
integerBits
);

let value =
parseInt(
intPart,
2
);

for(
let i=0;
i<fractionBits;
i++
){

if(
fracPart[i] === "1"
){

value +=
Math.pow(
2,
-(i+1)
);

}

}

return value;

}

function renderBitEditor(
binary,
integerBits,
fractionBits
){

bitEditor.innerHTML = `

<div
style="
margin-top:20px;
padding:20px;
border-radius:16px;
background:#111827;
"
>

<h3>
Interactive Bit Editor
</h3>

<p
style="
margin-top:10px;
color:#94a3b8;
"
>
Click any bit to flip it and see the decimal value update instantly.
</p>

<div
id="editorBits"
style="
display:flex;
gap:4px;
flex-wrap:wrap;
margin-top:15px;
"
>

${binary
.split("")
.map((bit,index)=>`

<div
class="bit-cell"
data-index="${index}"
style="
width:36px;
height:36px;
display:flex;
align-items:center;
justify-content:center;
border-radius:8px;
cursor:pointer;
font-weight:bold;
background:
${index < integerBits
? "#2563eb"
: "#9333ea"};
"
>

${bit}

</div>

`)
.join("")}

</div>

<div
id="decodedValue"
style="
margin-top:18px;
font-size:18px;
font-weight:bold;
color:#60a5fa;
"
>

Decimal Value:
${binaryToDecimalFixed(
binary,
integerBits,
fractionBits
)}

</div>

</div>

`;

let currentBinary =
binary.split("");

const cells =
bitEditor.querySelectorAll(
".bit-cell"
);

const output =
bitEditor.querySelector(
"#decodedValue"
);

cells.forEach(cell => {

cell.onclick = () => {

const index =
Number(
cell.dataset.index
);

currentBinary[index] =
currentBinary[index] === "0"
? "1"
: "0";

cell.innerHTML =
currentBinary[index];

const newBinary =
currentBinary.join("");

const newValue =
binaryToDecimalFixed(
newBinary,
integerBits,
fractionBits
);

output.innerHTML = `

Decimal Value:
${newValue}

`;

};

});

}
convertBtn.onclick = () => {

clearAll();

const value =
parseFloat(
decimalInput.value
);

if(
isNaN(value)
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

const parts =
qFormat.value
.split(",");

const integerBits =
Number(parts[0]);

const fractionBits =
Number(parts[1]);

status.innerHTML = `

<div
style="
padding:15px;
border-radius:12px;
background:#0f172a;
margin-bottom:15px;
"
>

Selected Format:

<b>

Q${integerBits}.${fractionBits}

</b>

</div>

`;

renderRange(
integerBits,
fractionBits
);

const overflow =
renderOverflow(
value,
integerBits,
fractionBits
);

if(
overflow
){

return;

}

const result =
toBinaryFixed(
value,
integerBits,
fractionBits
);

renderBinary(
result.binary,
integerBits,
fractionBits
);

renderRegister(
result.binary,
integerBits,
fractionBits
);

const storedValue =
binaryToDecimalFixed(
result.binary,
integerBits,
fractionBits
);

renderPrecision(
value,
storedValue
);

renderBitEditor(
result.binary,
integerBits,
fractionBits
);

};

}
