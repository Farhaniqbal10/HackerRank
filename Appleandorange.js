function countApplesAndOranges(s, t, a, b, apples, oranges) {
    //deklarasi apel sebagai array mapping
    const appleRes = apples.map(num => num + a).filter(num => num >= s && num <= t).length;
    
    const orangeRes = oranges.map(num => num + b).filter(num => num >= s && num <= t).length;
    console.log(appleRes);
    console.log(orangeRes);
}
