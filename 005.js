function leapYear(tahun1, tahun2){
    var hasil = "";
    for (let i = tahun1; i <= tahun2 ; i++){
         if(i%4 == 0){
            if(i%100 == 0){
                if(i%400 == 0){
                    hasil = "tahun kabisat";
                } else{
                    hasil = "bukan tahun kabisat";
                }
            }else {
                hasil = "tahun kabisat";
            }
        } else {
            hasil = "bukan tahun kabisat";
        }

        console.log("Output " + i + " " + "adalah " + hasil);
    }
}