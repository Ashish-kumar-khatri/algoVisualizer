let merge = async (bars,low,mid,high) => {
    // for(let i = low ; i <= high ; i++){
    //     await waitForMe(delay);
    //     bars[i].style.backgroundColor = "orange";
    // }
    await waitForMe(delay);
    let la = (mid - low) + 1;
    let ra = (high - mid);
    let leftArray = [];
    let rightArray = [];
    let i = 0;
    let j = 0;
    let k = low;
    await waitForMe(delay);
    for(let i = 0 ; i < la ; i++){
        leftArray.push(parseInt(bars[low+i].style.height));
        bars[low+i].style.backgroundColor = "orange";
    }
    await waitForMe(delay);
    for(let i = 0 ; i < ra ; i++){
        rightArray.push(parseInt(bars[mid+1+i].style.height));
        bars[mid+1+i].style.backgroundColor = "yellow";
    }
    console.log('left = ',leftArray);
    console.log('right = ',rightArray);
    await waitForMe(delay);
    while(i < la && j < ra){
        if(leftArray[i] < rightArray[j]){
            bars[k].style.height = leftArray[i] + 'px';
            i++;
        }else{
            bars[k].style.height = rightArray[j] + 'px';
            j++;
        }
        k++;
    }
    while(i < la){
        bars[k].style.height = leftArray[i] + 'px';
        i++;
        k++;
    }
    while(j < ra){
        bars[k].style.height = rightArray[j] + 'px';
        j++;
        k++; 
    }
    // await waitForMe(delay - speed.value);
    for(let i = low ; i <= high ; i++){
        bars[i].style.backgroundColor = "green";
    }
    await waitForMe(delay);
}



let mergeSort = async (bars,low,high) => {
    if(low < high){
        let mid = parseInt(low + (high-low)/2);
        await mergeSort(bars,low,mid);
        await mergeSort(bars,mid + 1,high);
        await merge(bars,low,mid,high);
    }
}











const mergeSortBtn = document.querySelector("#merge");
mergeSortBtn.addEventListener('click',async () => {
    console.log('indie')
    let bars = document.querySelectorAll('.bar');
    await mergeSort(bars,0,bars.length - 1);
    console.log(bars);
})