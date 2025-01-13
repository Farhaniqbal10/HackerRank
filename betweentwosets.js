function getTotalX(a, b) {
    // Write your code here
    function fpb(x,y){
        while (y !== 0) {
            [x,y] = [y, x % y];
        }
        return x;
    }
    
    function kpk(x,y){
        return (x*y) / fpb(x,y);
    }
    
    let kpkA = a.reduce((acc,num) => kpk(acc,num),1);
    let fpbB = b.reduce((acc,num) => fpb(acc,num));
    
    let count = 0;
    for(let x =kpkA; x <= fpbB; x += kpkA){
        if(fpbB % x === 0) {
            count++
        }
    }
    
    return count;
}