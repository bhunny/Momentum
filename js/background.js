const images = [];

for (var i = 0; i<10; i++){
    images.push(`${i}.jpg`);
}
const chosenImage = images[Math.floor(Math.random()*images.length)];

//const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);

const body = document.querySelector("body");
body.style = `background-image: url(img/${chosenImage})`;