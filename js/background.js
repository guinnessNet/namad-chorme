const images = [
  "3.jpg",
  "1.jpg",
  "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `./images/${chosenImage}`

document.body.appendChild(bgImage)