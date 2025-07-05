
let canvas = document.querySelector('canvas');
let pen= canvas.getContext('2d')
let score=0;
let snakeCells=[[0,0]]
let cell=50;
let direction ='right'
let gameOver=false;

let id=setInterval(()=>{
    draw()
    update()
},300)
let food =genrateRandom();
document.addEventListener("keydown",(e)=>{
    console.log(e);
    if(e.key==='ArrowUp'){
        direction='up'
    }
    else if(e.key==='ArrowDown'){
        direction='down'
    }
    else if(e.key==='ArrowLeft'){
        direction='left'
    }
    else {
        direction='right'
    }
})

function draw() {
    if (gameOver==true) {
        clearInterval(id)
        pen.fillStyle="red"
        pen.font="40px sans-serif"
        pen.fillText("game over",300,300) 
        console.log('hehe');
        return;
    }
    pen.clearRect(0,0,800,500)
    for(let i of snakeCells){
        pen.fillStyle="black";
        pen.fillRect(i[0],i[1],cell,cell)

    }
    pen.fillStyle="brown";
    pen.fillRect(food[0],food[1],50,50)
    pen.fillStyle="white";
    pen.font="40px sans-serif"
    pen.fillText(`${score} score`,200,400) 
}


function update(){
    let headX=snakeCells[snakeCells.length-1][0];
    let headY=snakeCells[snakeCells.length-1][1];

    let newX
    let newY
    if(direction=="right"){
        newX=headX+cell
        newY=headY
        if (newX==800) {
            gameOver=true;
        }
    }
    else if(direction=="left"){
        newX=headX-cell
        newY=headY
         if (newX<0) {
            gameOver=true;
        }
    }
    else if(direction=="up"){
        newX=headX
        newY=headY-cell
         if (newY<0) {
            gameOver=true;
        }
    }
    else{
        newX=headX
        newY=headY+cell
         if (newY==500) {
            gameOver=true;
        }
    }
    if(newX===food[0]&&newY===food[1]){
        food=genrateRandom();
        score += 1;
    }
    else
    snakeCells.shift()



    snakeCells.push([newX,newY])
    
}
function genrateRandom() {
    return [Math.floor(Math.random()*650/50)*50 ,
            Math.floor(Math.random()*350/50)*50
    ]
}