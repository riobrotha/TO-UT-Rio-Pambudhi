function filterUmur() {
    var data = [
        { "id": 1, "name": "Udin", "age": 12 },
        { "id": 2, "name": "Reane", "age": 51 },
        { "id": 3, "name": "Budi", "age": 34 },
        { "id": 4, "name": "Agus", "age": 16 },
        { "id": 5, "name": "Sari", "age": 19 },
        { "id": 6, "name": "Ririn", "age": 20 },
        { "id": 7, "name": "Dessy", "age": 23 }
    ];

    for (var i = 0; i <= data.length; i++) {
        // console.log(data[i]);
        if (data[i].age < 21) {
            console.log(data[i]);
        }
    }
}
