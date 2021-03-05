const btn = document.querySelector(".btn");

const allColors = ["aliceblue", "antiquewhite", "bisque", "brown", "cornflowerblue", "darksalmon", "darkseagreen", "goldenrod", "indianred", "paleturquoise", "peachpuff", "seagreen", "sienna", "violet", "rebeccapurple", "lightgreen", "lightgrey", "navy", "silver"];

btn.addEventListener("click", selectsRandomColor);


function selectsRandomColor() {
  const randomColorPosition = Math.floor(Math.random() * allColors.length);
  const randomColor = allColors[randomColorPosition];
  document.body.style.backgroundColor = randomColor;
};
