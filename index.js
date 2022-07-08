let canvas = document.querySelector("canvas");
canvas.width = this.innerWidth;
canvas.height = this.innerHeight;
const c = canvas.getContext("2d");

const colorArray = [
    "rgb(233, 213, 202)",
    "rgb(130, 115, 151)",
    "rgb(77, 76, 125)",
    "rgb(54, 48, 98)"
  ]

  const mouse = {
     x:undefined,
     y:undefined
  }
const maxRadius = Math.random()*10 + 38;
if(window.innerWidth>700){

  window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})
}else{

  addEventListener("touchmove",(event)=>{
    mouse.x = event.touches[0].clientX;
    mouse.y = event.touches[0].clientY;
  })
}


function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random()*4)];

  this.move = function (){
    if(this.x+this.radius > window.innerWidth || this.x-this.radius < 0){
        this.dx = -this.dx;
       }
       this.x += this.dx;
       if(this.y+this.radius > window.innerHeight || this.y-this.radius < 0){
        this.dy = -this.dy;
       }
       this.y += this.dy;
     
       if(mouse.x -this.x <70 && mouse.x -this.x >-70 && mouse.y-this.y<70 && mouse.y-this.y>-70){
        if(this.radius<maxRadius)
         this.radius++;
       }
       else if(this.radius>radius){
        this.radius--;
       }
      
  }

  

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 45, false);
    c.strokeStyle = this.color;
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
  };
}

const circleArray = [];
for (var i = 1; i <= window.innerWidth/2; i++) {
    let radius = Math.random()*2 + 1;
      let posX = Math.random() * (this.innerWidth - radius*2) + radius;
      let posY = Math.random() * (this.innerHeight - radius*2) + radius;
      let dx = (Math.random() - 0.5)*2;
      let dy = (Math.random() - 0.5)*2 ;
   
  circleArray.push(new Circle(posX, posY, dx, dy, radius));
}
function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, this.innerWidth, this.innerHeight);
  for (var i = 0; i < window.innerWidth/2; i++) {
   
    circleArray[i].draw();
    circleArray[i].move();
  }
     
}
animate();
