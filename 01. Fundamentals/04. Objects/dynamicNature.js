const circle = {
  radius: 1,
};

circle.color = "red";
circle.draw = function () {
  console.log("Draw");
};

delete circle.color;

console.log(circle);
