const arraySize = document.querySelector('#array-size');
const speed = document.querySelector('#speed');
const generateNewArrayBtn = document.querySelector('#generate-new-array');
const arrayArea = document.querySelector("#bars");
const containerHeight =  arrayArea.getBoundingClientRect().height;
const containerWidth =  arrayArea.getBoundingClientRect().width;
const maxArraySize = 100;
const minArraySize = 5;
const sortingMethods = document.querySelector(".sorting-methods");

let bars = document.querySelectorAll('.bar');

let delay = 200;

let createNewArray = (noOfBars = arraySize.value,area) => {
    arrayArea.innerHTML = "";
    heights = [];
    for(let i = 0 ; i < noOfBars ; i++){
        heights.push(Math.floor(Math.random() * (containerHeight)) + 5);
    }
    for(let i = 0 ; i < noOfBars ; i++){
        const bar = document.createElement('div');
        bar.style.height = `${heights[i]}px`;
        bar.style.order = i;
        bar.classList.add('bar');
        bar.classList.add(`barNo${i}`);
        // bar.innerHTML = i;
        arrayArea.append(bar);
    }
}

generateNewArrayBtn.addEventListener('click',()=>{
    const size = Math.floor(Math.random() * (maxArraySize - minArraySize)+1) + minArraySize;
    arraySize.value = size;
    createNewArray();
})

arraySize.addEventListener("input",()=>{
    createNewArray();
    console.log(arraySize.value)
});
speed.addEventListener("input",()=>{
    delay = 320 - parseInt(speed.value);    
});

createNewArray();

window.addEventListener('load',()=>{
    if(window.innerWidth < 400){
        arraySize.value = 20;
        arraySize.setAttribute('max','60');
        createNewArray();
        // console.log(arraySize);
    }else if(window.innerWidth > 400 && window.innerWidth < 800){
        arraySize.value = 30;
        createNewArray();
        // console.log(arraySize);
    }
    // console.log(window.innerWidth)
})

let waitForMe = (miliseconds) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('')
        },miliseconds);
    })
}

let swap = (bar1 , bar2) => {
    const temp = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = temp;
    console.log('inside');
}




let disableButtons = () => {
    arraySize.disabled = true;
    methodsBtns = sortingMethods.querySelectorAll("div");
    methodsBtns.forEach(method => {
        method.disabled = true;
        console.log(method);
    })
}