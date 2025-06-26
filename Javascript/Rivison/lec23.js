let canvas=document.querySelector("canvas")
let pen =canvas.getContext("2d")
let snakecells =[[0,0]]
let cell=50;
function draw(){
    for(let i of snakecells){
        pen.fillRect(i[0],i[1],cell,cell)
    }
}

function update(){
    let headX=snakecells[[snakecells.length-1][0]]
    let headY=snakecells[[snakecells.length-1][1]]
    let newX=headX+cell;
    let newY=headY;
    snakecells.push([newX,newY]);
}
setInterval(() => {
 draw()
update()
}, 200);
