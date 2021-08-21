

let partition = async (bars,low,high) => {
    let pivot = bars[high].style.height;
    bars[high].style.backgroundColor = "orange";
    let i = (low - 1);

    for(let j = low ; j <= high ;  j++){
        if(parseInt(bars[j].style.height) < parseInt(pivot)){
            i++;
            await swap(bars[i],bars[j]);
        }
    }
    await swap(bars[i+1],bars[high]);
    return i+1;
}

let quickSort = async (bars,low,high) => {
    if(low < high){
        console.log('inside');
        let pivot = await partition(bars,low,high);
        await quickSort(bars,low,pivot - 1);
        await quickSort(bars,pivot+1,high);
    }
}






const quickSortBtn = document.querySelector("#quick");
quickSortBtn.addEventListener('click',async () => {
    let bars = document.querySelectorAll('.bar');
    await quickSort(bars,0,bars.length - 1);
})