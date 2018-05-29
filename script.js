var colors = ["red ball", "blue ball", "yellow ball", "green ball"];
var current = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// changes bead color when clicked on
function onClick(num, id) {
  current[num] = (current[num] + 1) % 4;
  document.getElementById(id).className = "bead" + (num % 8 + 1) + " " + colors[current[num]] + " ball";
  var same;
  for (var i = 0; i < 8; i++) {
    same = true;
    for (var j = 0; j < 8; j++) {
      if (current[j] != current[(i + j) % 8 + 8]) {
        same = false;
        break;
      };
    };
    if (same) {
      document.getElementById("light").className = "green ball";
      break;
    };
  };
  if (!same) {
    document.getElementById("light").className = "red ball";
  }
};
