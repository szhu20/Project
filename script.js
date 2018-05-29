var colors = ["red", "blue", "yellow", "green"];
var current = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function myFunction(num, id) {
  current[num] = (current[num] + 1) % 4;
  document.getElementById("circle1").style.color = "blue";
};
