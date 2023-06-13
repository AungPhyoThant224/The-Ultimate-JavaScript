let courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course = courses.find((course) => {
  return course.name === "b";
});
console.log(course);

const courseIndex = courses.findIndex((course) => course.name === "b");
console.log(courseIndex);
