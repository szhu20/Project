var colors = ["red ball", "blue ball", "yellow ball", "green ball"];
var current = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// changes bead color when clicked on
function click(num, id) {
  current[num] = (current[num] + 1) % 4;
  document.getElementById(id).className = "blue ball";
  var same = false;
  var i;
  for (i = 0; i < 8; i++) {

  };
};
