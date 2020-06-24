var angka = 0;
var arr = [];
while(angka != '='){
    var angka = prompt("masukkan angka");
    if(angka != '=')
    {
        arr.push(Number(angka));
        var hasil = 0;
        for(var i = 0 ; i <arr.length; i++)
        {
            hasil += arr[i];
        }
    }
}
console.log("hasil nya adalah " + hasil);


