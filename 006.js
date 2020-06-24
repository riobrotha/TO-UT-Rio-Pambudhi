function faktorialRekursif(angka)
{
    if(angka === 0) {
        return 1;
    }
    return angka * faktorialRekursif(angka-1);
}

