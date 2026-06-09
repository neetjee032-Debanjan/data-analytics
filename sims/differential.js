export function runDE(container){

container.innerHTML = `
<div style="color:white;padding:15px;font-family:Arial;">
  <h2>Differential Equations Solver</h2>

  <label>dy/dx = f(x,y)</label>
  <input id="fn" value="x + y"/>

  <label>x0:</label>
  <input id="x0" type="number" value="0"/>

  <label>y0:</label>
  <input id="y0" type="number" value="1"/>

  <label>h:</label>
  <input id="h" type="number" value="0.1"/>

  <label>steps:</label>
  <input id="n" type="number" value="10"/>

  <select id="method">
    <option value="euler">Euler</option>
    <option value="rk4">RK4</option>
  </select>

  <button id="run">Run</button>

  <table border="1" style="width:100%;margin-top:10px;color:white;">
    <tbody id="table"></tbody>
  </table>
</div>
`;

function f(expr,x,y){
  return Function("x","y",`return ${expr}`)(x,y);
}

container.querySelector("#run").onclick = () => {

  let expr = container.querySelector("#fn").value;
  let x = +container.querySelector("#x0").value;
  let y = +container.querySelector("#y0").value;
  let h = +container.querySelector("#h").value;
  let n = +container.querySelector("#n").value;
  let method = container.querySelector("#method").value;

  let rows = [];

  for(let i=0;i<n;i++){

    let k1,k2,k3,k4;

    if(method==="euler"){
      k1 = f(expr,x,y);
      y = y + h*k1;
    }

    else {
      k1 = f(expr,x,y);
      k2 = f(expr,x+h/2,y+h*k1/2);
      k3 = f(expr,x+h/2,y+h*k2/2);
      k4 = f(expr,x+h,y+h*k3);

      y = y + (h/6)*(k1+2*k2+2*k3+k4);
    }

    x += h;

    rows.push({i,x:x.toFixed(4),y:y.toFixed(4)});
  }

  container.querySelector("#table").innerHTML =
    rows.map(r=>`
      <tr><td>${r.i}</td><td>${r.x}</td><td>${r.y}</td></tr>
    `).join("");
};
}
