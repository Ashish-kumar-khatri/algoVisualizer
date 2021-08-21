

let selectionSort = async () => {
    let bars = document.querySelectorAll('.bar');
    for(let i = 0 ; i < bars.length ; i++){
        let min_index = i;
        // changing the color of bar to swap with the smallest
        bars[i].style.backgroundColor = "black";
        for(let j = i+1 ; j<bars.length;j++){
            // what our algorithm is seeing right now
            bars[j].style.backgroundColor = "red";
            await waitForMe(delay - speed.value);
            if(parseInt(bars[j].style.height) < parseInt(bars[min_index].style.height)){
                if(min_index != i){
                    bars[min_index].style.backgroundColor = 'rgb(11,165,226)';
                }
                min_index = j;
            }else{
                bars[j].style.backgroundColor = 'rgb(11,165,226)';
            }
        }
        await waitForMe(delay - speed.value);
        swap(bars[min_index] , bars[i]);
        bars[min_index].style.backgroundColor = 'rgb(11,165,226';
        bars[i].style.backgroundColor = "green";
    }
}











const selectionSortBtn = document.querySelector("#selection");
selectionSortBtn.addEventListener('click',async () => {
    await selectionSort();
})