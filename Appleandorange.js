function countApplesAndOranges(s, t, a, b, apples, oranges) {
    //deklarasi apel sebagai array mapping
    const appleRes = apples.map(num => num + a).filter(num => num >= s && num <= t).length;

    //deskripsi jeruk sebagai array mapping
    const orangeRes = oranges.map(num => num + b).filter(num => num >= s && num <= t).length;
    //panggil fungsi appleres
    console.log(appleRes);
    //panggil fungsi orangeres
    console.log(orangeRes);
}
