const css = document.querySelector("h3");
const [color1,color2] = document.querySelector(".color");
const body = document.getElementById("#gradient");

setGradient = () => {
  body.style.background = _linearGradient();
    css.textContent = `${body.style.background};`;
}

_linearGradient = () => {
  return `linear-gradient(to right, ${color1.value}, ${color2.value}`;
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
