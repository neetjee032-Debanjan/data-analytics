export function runBinaryArithmetic(container) {

container.innerHTML = `

<div
style="
padding:20px;
background:rgba(15,23,42,.65);
backdrop-filter:blur(12px);
border-radius:18px;
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
Binary Arithmetic Simulator
</h2>

<p
style="
color:#94a3b8;
margin-bottom:20px;
"
>
Perform Binary Addition, Subtraction and Multiplication
with step-by-step visualization.
</p>

<div
style="
display:flex;
gap:10px;
flex-wrap:wrap;
margin-bottom:15px;
"
>

<select
id="operation"
style="
padding:10px;
border-radius:10px;
"
>

<option value="add">
Addition
</option>

<option value="sub">
Subtraction
</option>

<option value="mul">
Multiplication
</option>

</select>

<input
id="num1"
value="1011"
placeholder="First Binary"
style="
padding:10px;
border-radius:10px;
width:180px;
"
/>

<input
id="num2"
value="1101"
placeholder="Second Binary"
style="
padding:10px;
border-radius:10px;
width:180px;
"
/>

<button
id="runBtn"
style="
padding:10px 20px;
border:none;
border-radius:10px;
background:#2563eb;
color:white;
font-weight:bold;
cursor:pointer;
"
>
Run
</button>

<button
id="resetBtn"
style="
padding:10px 20px;
border:none;
border-radius:10px;
background:#475569;
color:white;
font-weight:bold;
cursor:pointer;
"
>
Reset
</button>

</div>

<div id="status"></div>

<div
id="bitArea"
style="
display:flex;
gap:8px;
flex-wrap:wrap;
margin-top:20px;
"
></div>

<div
id="steps"
style="
margin-top:20px;
"
></div>

<div
id="answer"
style="
margin-top:20px;
"
></div>

</div>

`;

const op =
container.querySelector("#operation");

const n1 =
container.querySelector("#num1");

const n2 =
container.querySelector("#num2");

const runBtn =
container.querySelector("#runBtn");

const resetBtn =
container.querySelector("#resetBtn");

const status =
container.querySelector("#status");

const steps =
container.querySelector("#steps");

const answer =
container.querySelector("#answer");

const bitArea =
container.querySelector("#bitArea");

function validBinary(v){

return /^[01]+$/.test(v);

}

function clearUI(){

steps.innerHTML = "";
answer.innerHTML = "";
bitArea.innerHTML = "";
status.innerHTML = "";

}

resetBtn.onclick = () => {

clearUI();

};
function createBitCards(a,b){

bitArea.innerHTML = "";

const title =
document.createElement("div");

title.style.width = "100%";

title.style.marginBottom = "10px";

title.innerHTML = `
<b>Binary Inputs</b>
`;

bitArea.appendChild(title);

[a,b].forEach(binary => {

const row =
document.createElement("div");

row.style.display = "flex";
row.style.gap = "6px";
row.style.width = "100%";
row.style.marginBottom = "8px";

binary.split("").forEach(bit => {

const card =
document.createElement("div");

card.style.width = "45px";
card.style.height = "45px";

card.style.display = "flex";
card.style.alignItems = "center";
card.style.justifyContent = "center";

card.style.borderRadius = "10px";

card.style.fontWeight = "bold";

card.style.fontSize = "20px";

card.style.background =
bit === "1"
? "linear-gradient(135deg,#2563eb,#60a5fa)"
: "linear-gradient(135deg,#334155,#475569)";

card.innerHTML = bit;

row.appendChild(card);

});

bitArea.appendChild(row);

});

}

function binaryToDecimal(binary){

return parseInt(binary,2);

}

function addBinary(a,b){

let carry = 0;

let result = "";

let stepsArr = [];

let i = a.length - 1;
let j = b.length - 1;

while(i >= 0 || j >= 0 || carry){

const bitA =
i >= 0 ? Number(a[i]) : 0;

const bitB =
j >= 0 ? Number(b[j]) : 0;

const sum =
bitA + bitB + carry;

const out =
sum % 2;

const newCarry =
Math.floor(sum / 2);

stepsArr.push(
`${bitA} + ${bitB} + carry(${carry}) = ${sum}
→ output ${out}, carry ${newCarry}`
);

result =
out + result;

carry =
newCarry;

i--;
j--;
}

return {
result,
stepsArr
};

}

function subtractBinary(a,b){

const decA =
parseInt(a,2);

const decB =
parseInt(b,2);

if(decB > decA){

return {
error:
"First number must be greater than second number."
};
}

const result =
(decA - decB)
.toString(2);

return {
result,
stepsArr:[
`${decA} - ${decB} = ${decA-decB}`
]
};

}

function multiplyBinary(a,b){

const decA =
parseInt(a,2);

const decB =
parseInt(b,2);

const result =
(decA * decB)
.toString(2);

return {
result,
stepsArr:[
`${decA} × ${decB} = ${decA*decB}`
]
};

}
runBtn.onclick = async () => {

clearUI();

const a =
n1.value.trim();

const b =
n2.value.trim();

if(
!validBinary(a) ||
!validBinary(b)
){

status.innerHTML = `
<div
style="
background:#7f1d1d;
padding:12px;
border-radius:10px;
"
>
Please enter valid binary numbers.
</div>
`;

return;
}

createBitCards(a,b);

let resultData;

if(op.value === "add"){

resultData =
addBinary(a,b);

}
else if(op.value === "sub"){

resultData =
subtractBinary(a,b);

}
else{

resultData =
multiplyBinary(a,b);

}

if(resultData.error){

status.innerHTML = `
<div
style="
background:#7f1d1d;
padding:12px;
border-radius:10px;
"
>
${resultData.error}
</div>
`;

return;
}

status.innerHTML = `
<div
style="
background:#0f172a;
padding:12px;
border-radius:10px;
color:#60a5fa;
"
>
Running ${op.options[op.selectedIndex].text}
 Simulation...
</div>
`;

for(
let i=0;
i<resultData.stepsArr.length;
i++
){

steps.innerHTML += `

<div
style="
padding:12px;
margin-bottom:10px;
border-radius:10px;
background:rgba(255,255,255,.04);
border:1px solid rgba(255,255,255,.05);
"
>
<b>Step ${i+1}</b>

<br><br>

${resultData.stepsArr[i]}
</div>

`;

await new Promise(
r => setTimeout(r,700)
);

}

const decA =
binaryToDecimal(a);

const decB =
binaryToDecimal(b);

const decR =
binaryToDecimal(
resultData.result
);

answer.innerHTML = `

<div
style="
margin-top:20px;
padding:20px;
border-radius:16px;
background:linear-gradient(
135deg,
#0f172a,
#1e3a8a
);
border:1px solid rgba(255,255,255,.08);
"
>

<div
style="
font-size:14px;
color:#94a3b8;
margin-bottom:10px;
"
>
Final Result
</div>

<div
style="
font-size:32px;
font-weight:bold;
color:#60a5fa;
letter-spacing:3px;
margin-bottom:15px;
"
>
${resultData.result}
</div>

<div
style="
line-height:1.8;
color:#cbd5e1;
"
>

${a}₂ = ${decA}₁₀

<br>

${b}₂ = ${decB}₁₀

<br><br>

Result:

${resultData.result}₂ = ${decR}₁₀

</div>

</div>

`;

status.innerHTML = `
<div
style="
background:#14532d;
padding:12px;
border-radius:10px;
color:white;
"
>
✅ Simulation Complete
</div>
`;

};

}
