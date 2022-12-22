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
    gridEvent();

}

// div.classList.toggle(‘active’);
function gridEvent(){
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        block.addEventListener('mouseover',()=> {
            block.classList.add('active');
        });
        console.log("hi");
    });

}

function clearGrid(){
    const blocks = document.querySelectorAll(".active");
    blocks.forEach((block)=>{
        block.classList.remove('active');
    });
}
const btn = document.querySelector("#btn");
btn.addEventListener('click',()=>{
    let side = prompt("How many blocks will each side of the grid have");
    console.log(side);
    gridbuilder(side);
});