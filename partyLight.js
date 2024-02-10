let onOff = document.querySelector(".onOff");
let path = document.querySelector("path");

function colorGenerate() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  randColor = `rgb(${r},${g}, ${b})`;
  return randColor;
}


let i = 0;

onOff.addEventListener("click", () => {
  path.style.fill = "red";
  i++;
  console.log(i);
  let id = setInterval(() => {
    document.body.style.backgroundColor = colorGenerate();
    console.log(document.body.style.backgroundColor);
    if (i % 2 == 0) {
      clearInterval(id);
      path.style.fill = "rgb(47, 228, 47)";
    }
  }, 500);
});
