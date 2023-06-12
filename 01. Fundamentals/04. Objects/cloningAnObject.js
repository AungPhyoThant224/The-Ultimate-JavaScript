const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  },
};

/**
 * Clone with Loop
 */
const loop = {};
for (let key in circle) {
  loop[key] = circle[key];
}

/**
 * Clone with assign
 * with empty object
 */
const assign = Object.assign({}, circle);

/**
 * Clone with assign
 * with additional values
 */
const assignWithAdditional = obj.assign({ color: "red" }, circle);

/**
 * Clone with spread operator
 * ... will spread the circle object
 */
const spread = { ...circle };
