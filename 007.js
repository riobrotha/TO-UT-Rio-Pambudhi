function reverse(kata){
    var kata2 = kata;
    var hasil = '';

    for(let i = kata.length - 1; i>=0; i--){
        hasil = hasil + kata2[i];
    }
    return hasil;
}

console.log(reverse('semua kata-kata'));