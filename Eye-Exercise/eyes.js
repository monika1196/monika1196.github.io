const balls = document.getElementsByClassName("ball");
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = "translate(-" + x + ",-" + y + ")";
  }
};

var img = new Image();
var div = document.getElementById("smile");
img.src = "./teeth.png";

function x() {
  div.appendChild(img);
}

setTimeout(() => {
  x();
}, 3500);
