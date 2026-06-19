export function initParticles() {

  const container =
    document.createElement("div");

  container.className = "particles";

  document.body.appendChild(container);

  for (let i = 0; i < 40; i++) {

    const p =
      document.createElement("div");

    p.className = "particle";

    const size =
      Math.random() * 6 + 2;

    p.style.width =
      `${size}px`;

    p.style.height =
      `${size}px`;

    p.style.left =
      `${Math.random() * 100}%`;

    p.style.animationDuration =
      `${15 + Math.random() * 25}s`;

    p.style.animationDelay =
      `${Math.random() * 20}s`;

    p.style.opacity =
      (Math.random() * 0.4 + 0.1)
      .toString();

    container.appendChild(p);
  }

}
