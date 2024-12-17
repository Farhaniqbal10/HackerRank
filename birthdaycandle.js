function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest = candles[0];
    let count = 1;
    
    for(let i=1; i < candles.length; i++) {
        if (candles[i] > tallest) {
            tallest = candles[i];
            count = 1;
        } else if (candles[i]===tallest) {
            count++;
        }
    }
return count;

}