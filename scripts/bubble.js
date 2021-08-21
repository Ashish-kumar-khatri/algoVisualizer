

let bubble = async () => {
    let bars = document.querySelectorAll('.bar');
    for(let i = 0 ; i < bars.length - 1 ; i++){
        for(let j = 0 ; j < bars.length - 1 -i ; j++){
            bars[j].style.backgroundColor = "red";
            bars[j+1].style.backgroundColor = "red";
            await waitForMe(delay );
            if(parseInt(bars[j].style.height) > parseInt(bars[j+1].style.height)){
                swap(bars[j],bars[j+1]);
                await waitForMe(delay);
            }
            bars[j].style.backgroundColor = "rgb(11, 165, 226)";
            bars[j+1].style.backgroundColor = "rgb(11, 165, 226)";
        }
        bars[bars.length - 1 - i].style.backgroundColor = "green";
    }
    bars[0].style.backgroundColor = "green";
}
























const bubbleSortBtn = document.querySelector("#bubble");
bubbleSortBtn.addEventListener('click',async ()=>{
    await bubble();
})