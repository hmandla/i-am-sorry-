
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function Heart() {
  this.x = Math.random() * canvas.width;
  this.y = -20;
  this.size = 20 + Math.random() * 20;
  this.speed = 1 + Math.random() * 2;
  this.alpha = 0.7 + Math.random() * 0.3;
}

Heart.prototype.draw = function () {
  ctx.globalAlpha = this.alpha;
  ctx.font = `${this.size}px Arial`;
  ctx.fillText('💖', this.x, this.y);
  ctx.globalAlpha = 1;
};

Heart.prototype.update = function () {
  this.y += this.speed;
  if (this.y > canvas.height) {
    this.y = -20;
    this.x = Math.random() * canvas.width;
  }
};

function createHearts(count = 40) {
  for (let i = 0; i < count; i++) {
    hearts.push(new Heart());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart) => {
    heart.update();
    heart.draw();
  });
  requestAnimationFrame(animate);
}

createHearts();
animate();

function playMusicAndForgive() {
  const music = document.getElementById("bgMusic");
  music.play().catch((e) => console.log("Music playback blocked:", e));
  alert("Thank you, Anu Bangaram ❤️ I promise to be better everyday.");
}
