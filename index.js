//Exercise 7
//write a function to show string properties of an object(
const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b"
};

showProperties(movie);

function showProperties(obj) {
  for (var propt in obj) {
    if (typeof obj[propt] === "string") {
      console.log(propt + ":" + obj[propt]);
    }
  }
}
