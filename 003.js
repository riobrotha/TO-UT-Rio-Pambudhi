var arr = [];
while(arr.length < 100){
    var r = Math.floor(Math.random()*100) + 1;
    if(arr.indexOf(r) === -1) {
        arr.push(r);
    }
}

function max(){
    deretAngka = arr;
    var max = Math.max.apply(Math, deretAngka);
    console.log(deretAngka);
    console.log("nilai maksimal " + max);
}

function min(){
    deretAngka = arr;
    var min = Math.min.apply(Math, deretAngka);
    console.log(deretAngka);
    console.log("nilai minimum " + min);
}

function average()
{
    deretAngka = arr;
    var total = 0;
    for (let i = 0; i<deretAngka.length; i++){
        total += deretAngka[i];
    }

    var avg = total/deretAngka.length;
    console.log(deretAngka);
    console.log("nilai rata-rata " + avg);
}

