export function runLagrange(container){

container.innerHTML = `
<div style="color:white;padding:15px;font-family:Arial;">
  <h2>Lagrange Interpolation</h2>

  <textarea id="points">0,1\n1,3\n2,2</textarea>

  <label>x to estimate:</label>
  <input id="x" type="number" value="1.5"/>

  <button id="run">Run</button>

  <h3 id="result"></h3>
</div>
`;

function parsePoints(text){
  return text.trim().split("\n").map(line=>{
    let [x,y]=line.split(",").map(Number);
    return {x,y};
  });
}

container.querySelector("#run").onclick = () => {

  let pts = parsePoints(container.querySelector("#points").value);
  let x = +container.querySelector("#x").value;

  let result = 0;

  for(let i=0;i<pts.length;i++){

    let xi = pts[i].x;
    let yi = pts[i].y;

    let Li = 1;

    for(let j=0;j<pts.length;j++){
      if(i!==j){
        Li *= (x - pts[j].x)/(xi - pts[j].x);
      }
    }

    result += yi * Li;
  }

  container.querySelector("#result").innerHTML =
    `Interpolated Value: ${result.toFixed(6)}`;
};
}
