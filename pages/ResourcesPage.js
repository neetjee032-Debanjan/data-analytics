export function renderResources(app){

app.innerHTML = `

<div style="
padding:30px;
max-width:1200px;
margin:auto;
">

<h1 style="
color:#60a5fa;
margin-bottom:20px;
">
📚 Resources Hub
</h1>

<p style="
color:#94a3b8;
margin-bottom:30px;
">
Access notes, books, PDFs,
practice sheets and video lectures.
</p>

<div style="
display:grid;
grid-template-columns:
repeat(auto-fit,minmax(250px,1fr));
gap:20px;
">

<div class="card">
<h3>📘 Interpolation</h3>
<ul>
<li>Lagrange Notes</li>
<li>Newton Forward</li>
<li>Newton Backward</li>
<li>Cubic Spline</li>
</ul>
</div>

<div class="card">
<h3>📗 Numerical Integration</h3>
<ul>
<li>Trapezoidal Rule</li>
<li>Simpson 1/3</li>
<li>Simpson 3/8</li>
</ul>
</div>

<div class="card">
<h3>📕 Differential Equations</h3>
<ul>
<li>Euler Method</li>
<li>Modified Euler</li>
<li>Runge Kutta</li>
</ul>
</div>

<div class="card">
<h3>📙 Root Finding</h3>
<ul>
<li>Bisection</li>
<li>False Position</li>
<li>Newton Raphson</li>
<li>Secant Method</li>
</ul>
</div>

</div>

</div>

`;

}
