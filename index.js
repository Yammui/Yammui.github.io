//console.log("hello world");
const audio = new Audio("s1.wav");
const audio2 = new Audio("s2.mp3");
const cat = document.querySelector(".booody");
const cat2 = document.querySelector(".bigfatcat");

cat.addEventListener("click", () => {
  audio.play();
});

cat2.addEventListener("click", () => {
  audio2.play();
});
