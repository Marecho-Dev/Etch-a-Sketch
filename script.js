let rgbStatus = 0;

const container = document.querySelector(".container");

function gridbuilder(size){
    clearGrid();
    let blockSize = 700/size;
    for(let i=0;i<(size*size);i++){
        const div = document.createElement('div');
        div.setAttribute('class','block');
        container.appendChild(div);
    }
    console.log("blocksize is " + blockSize);
    console.log(size);
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        // block.style.width = blockSize;
        // block.style.height - blockSize;
        block.style.width = blockSize+"px";
        block.style.height = blockSize+"px";
    });
    gridEvent(blockSize);

}

// div.classList.toggle(‘active’);
function gridEvent(blockSize){
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        block.addEventListener('mouseover',()=> {
            let color = randomColor();
            console.log(color);
            console.log(rgbStatus);
            if (rgbStatus == 0){
                block.classList.add('active');
                block.style.background = 'black';
            }
            if (rgbStatus == 1){
                console.log(blockSize);
                block.classList.remove('active');
                block.style.width = blockSize+"px";
                block.style.height = blockSize+"px";
                block.style.background = color;
            }
        });
    });

}

function clearGrid(){
    const blocks = document.querySelector(".container");
    blocks.innerHTML = "";
}

const btn = document.querySelector("#btn");
btn.addEventListener('click',()=>{
    let side = prompt("How many blocks will each side of the grid have");
    console.log(side);
    gridbuilder(side);
});

const rgbBtn = document.querySelector("#rainbow");
rgbBtn.addEventListener('click',()=>{
    if (rgbStatus == 0){
        rgbStatus = 1;
        rgbBtn.textContent = "Black";  
    }
    else{
        rgbStatus = 0;
        rgbBtn.textContent = "Rainbow";
    }
    
});

function randomColor() {
    //Math.floor rounds down
    //Math.random() * 256 will be any number from 0*1 times 256
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var color = "rgb(" + red + "," + green + "," + blue + ")";  
    return color;
    }

