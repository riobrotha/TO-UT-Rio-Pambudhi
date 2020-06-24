function grade(nilai)
{
    var hasil = '';
    if(nilai >= 90){
        hasil = 'A';
    } else if (nilai < 90 && nilai >= 80) {
        hasil = 'B';
    } else if (nilai < 80 && nilai >= 70 ){
        hasil = 'C';
    } else if (nilai < 70 && nilai >= 60){
        hasil = 'D';
    } else {
        hasil = 'E';
    }

    return hasil;
}

console.log(grade(10));
console.log(grade(80));
console.log(grade(90));