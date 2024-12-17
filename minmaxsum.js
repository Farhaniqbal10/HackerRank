function miniMaxSum(arr) {
    // Write your code here
    let min = arr[0];
    let max = arr[0];
    let sum = arr[0];
    
    for (let i = 1; i < arr.length; i++){
        sum += arr[i];
        if(arr[i] < min){
            min = arr[i];
        }  
        if (arr[i] > max){
            max = arr[i];
        }
        
        
    }
    
    const minSum = sum - max;
    const maxSum = sum - min;
    
    console.log(`${minSum} ${maxSum}`)

}