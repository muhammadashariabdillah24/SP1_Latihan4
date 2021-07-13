let a = 100
let b = 110
let c = 80
let d = 70
let angka = 0
let huruf = ''

if(b > a){
    angka = b
    huruf = 'Terbesar B = '
} else if(c > a){
    angka = c
    huruf = 'Terbesar C = '
} else if(d > a){
    angka = d
    huruf = 'Terbesar D = '
} else {
    angka;
    huruf = 'Kosong = '
}

console.log(huruf + angka)