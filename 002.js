function oddEven(angka){
    var hasil = '';

    if(angka % 2 == 0){
        hasil = 'Genap';
    } else {
        hasil = 'Ganjil';
    }

    return hasil;
}

console.log(oddEven(10));
console.log(oddEven(5));