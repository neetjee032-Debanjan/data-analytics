export function runDecimalToBinary(container) {

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
margin-bottom:10px;
color:#60a5fa;
"
>
Decimal → Binary Conversion Simulator
</h2>

<p
style="
color:#94a3b8;
margin-bottom:20px;
"
>
Watch how repeated division by 2 converts a decimal number into binary.
</p>

<div
style="
display:flex;
gap:10px;
flex-wrap:wrap;
margin-bottom:20px;
"
>

<input
id="decimalInput"
type="number"
value="45"
min="0"
style="
padding:10px;
border-radius:10px;
border:none;
width:160px;
font-size:16px;
"
/>

<button
id="convertBtn"
style="
padding:10px 20px;
border:none;
border-radius:10px;
background:#2563eb;
color:white;
cursor:pointer;
font-weight:bold;
"
>
Convert
</button>

<button
id="resetBtn"
style="
padding:10px 20px;
border:none;
border-radius:10px;
background:#475569;
color:white;
cursor:pointer;
font-weight:bold;
"
>
Reset
</button>

</div>

<div id="finalBinary"></div>

<div
id="steps"
style="
margin-top:20px;
"
></div>

<div
id="bitCards"
style="
display:flex;
flex-wrap:wrap;
gap:8px;
margin-top:20px;
"
></div>

</div>
`;

const convertBtn =
container.querySelector("#convertBtn");

const resetBtn =
container.querySelector("#resetBtn");

const stepsDiv =
container.querySelector("#steps");

const bitCards =
container.querySelector("#bitCards");

const finalBinary =
container.querySelector("#finalBinary");

let running = false;
function resetUI(){

stepsDiv.innerHTML = "";
bitCards.innerHTML = "";
finalBinary.innerHTML = "";

}

resetBtn.onclick = () => {

running = false;

resetUI();

};

convertBtn.onclick = async () => {

if(running) return;

running = true;

resetUI();

let number = parseInt(
container.querySelector("#decimalInput").value
);

if(
isNaN(number) ||
number < 0
){

finalBinary.innerHTML = `
<div
style="
padding:12px;
background:#7f1d1d;
border-radius:10px;
margin-bottom:15px;
"
>
Please enter a valid non-negative integer.
</div>
`;

running = false;
return;
}

let original = number;

let remainders = [];

let step = 1;

while(number > 0){

let quotient =
Math.floor(number / 2);

let remainder =
number % 2;

remainders.push(remainder);

stepsDiv.innerHTML += `

<div
style="
background:rgba(255,255,255,.04);
padding:12px;
border-radius:12px;
margin-bottom:10px;
border:1px solid rgba(255,255,255,.05);
animation:fadeIn .4s;
"
>

<b>Step ${step}</b>

<br><br>

${number} ÷ 2 = ${quotient}

<br>

Remainder =

<span
style="
color:#fbbf24;
font-weight:bold;
"
>
${remainder}
</span>

</div>

`;

await new Promise(
r => setTimeout(r,700)
);

number = quotient;

step++;

if(number === 0){
break;
}

}
let binaryString =
remainders
.slice()
.reverse()
.join("");

if(binaryString === ""){
binaryString = "0";
}

finalBinary.innerHTML = `

<div
style="
padding:16px;
border-radius:16px;
background:linear-gradient(
135deg,
#0f172a,
#1e3a8a
);
border:1px solid rgba(255,255,255,.08);
margin-bottom:20px;
"
>

<div
style="
font-size:14px;
color:#94a3b8;
margin-bottom:8px;
"
>
Final Binary Representation
</div>

<div
style="
font-size:32px;
font-weight:bold;
color:#60a5fa;
letter-spacing:4px;
"
>
${binaryString}
</div>

<div
style="
margin-top:8px;
color:#cbd5e1;
"
>
${original}₁₀ = ${binaryString}₂
</div>

</div>

`;

await new Promise(
r => setTimeout(r,500)
);

const bits =
binaryString.split("");

for(let i=0;i<bits.length;i++){

const bit =
document.createElement("div");

bit.style.background =
bits[i] === "1"
? "linear-gradient(135deg,#2563eb,#60a5fa)"
: "linear-gradient(135deg,#334155,#475569)";

bit.style.padding =
"14px 18px";

bit.style.borderRadius =
"12px";

bit.style.fontSize =
"22px";

bit.style.fontWeight =
"bold";

bit.style.color =
"white";

bit.style.boxShadow =
"0 8px 20px rgba(0,0,0,.25)";

bit.style.transform =
"scale(0)";

bit.style.transition =
"all .3s ease";

bit.innerHTML =
bits[i];

bitCards.appendChild(bit);

setTimeout(() => {

bit.style.transform =
"scale(1)";

},100);

await new Promise(
r => setTimeout(r,250)
);

}

running = false;

};

}
