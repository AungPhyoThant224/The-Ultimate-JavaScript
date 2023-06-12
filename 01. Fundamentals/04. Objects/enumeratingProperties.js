const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  },
};

/**
 * key will get the Keys of Objects
 */
for (let key in circle) {
  console.log(circle[key]);
}

/**
 * key will get the Keys of Objects
 * Object.keys(circle) return the list of Keys of circle object
 */
for (let key of Object.keys(circle)) {
  console.log(key);
}

/**
 * entry will get the list of Key, Value pari of Objects
 * Object.entries(circle) return the list of Keys, Value pairs of
 * circle object
 */
for (let entry of Object.entries(circle)) {
  console.log(entry);
}

/**
 * If key radius contain in circle object retrun true other wise false
 */
if ("radius" in circle) console.log("yes");
