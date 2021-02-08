//var global
//let scope
    //perbedaan:      
// let nama = 'Hafif';
// console.log(nama) //error
// let nama = 'Hafif';
// {
//     let nama = 'Dayat';
//     console.log(nama)//Dayat
// }
// console.log(nama)//Hafif
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Arrow function( => )itu hanyalah penyederhanaan penulisan sebuah function.
// //contoh 1
// const func1 = function(a, b) {
//   return a + b;
// };
// console.log(func1(3, 3)); //6

// function namaLengkap(nama='faishal',usia= 18){
// return console.log('nama santri: '+ nama + ' '+ 'usia:')
// }
// namaLengkap ('dia', 20)




// //contoh 2
// const func2 = (a, b) => {
//   return a + b;
// };
// console.log(func2(3, 3)); //6
// //contoh 3
// const func3 = (a, b) => a + b;
// console.log(func3(3, 3)); //6
// //contoh 4
// const func4 = (dobel) => dobel + dobel;
// console.log(func4(5)); //10
//Perbedaan 1 &2 menghilangkan => setelah parameter
//2&3 karena hanya mempunyai SINGLE JAVASCRIPT EXPRESSION 
//maka kita dapat menghilangkan kata return dan kurung kurawal
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Export digunakan untuk mengexport function, objek atau nilai primitif
// pada sebuah module sehingga bisa digunakan pada program lain 
//dengan menggunakan statement import.


//Import bisa dikatakan adalah pasangan dari statement export. 
//Jadi import digunakan tentunya untuk mengimport function,objek,variabel yang sudah di export pada module lain.

//CLASS
//Kelas adalah Kerangka Kerja untuk membuat objek. Kelas menentukan apa yang dimiliki sebuah objek
// dan apa yang dapat dilakukan objek, contoh remot = remot adalah objek, objek mempunyai class sedangkan class adalah tugas dari berbagai objek,
// ketika toombol ini di penjet akan kemana dst.




//Salah satu cara mendeklarasikan kelas,='Polygon'

//Expression class=cara lain untuk mendefinisikan kelas.class expression bisa bernama ataupun tidak
//nama yg diberikan bebentuk lokal berada di body class

//ENCAPSULATION,INSTANSIASI,INHERITANCE
//Encapsulation: pembungkusan semua variabel dan function dalam class
//Instansiasi:membuat object dalam class
//Inheritance:penurunan sifat dari parent/class

//POLYMORPYSM
//Polimorfisme adalah salah satu prinsip Pemrograman Berorientasi Objek (OOP).

//DEFAULT PARAMS, REST, SPREAD OPERATOR

//Default Parameter adalah membuat nilai/value parameter default pada sebuah function
//dengan memberi value langsung kepada parameter sebuah function sehingga tidak perlu membuat
//variabel baru untuk memberikan value pada parameter yg mempunyai nilai default.

//Spread Operator adalah mengumpulkan dan memanggil seluruh nilai array pada sebuah function atau variabel
//Sebuah Spread Operator biasa di awali dengan tanda titik tiga (...)

//Rest Parameter sama dengan Spread Operator diawali dengan tanda titik tiga, namun pada rest parameter,
//hanya mengambil nilai sisa dari sebuah array
//Dengan menggunakan Default parameter, spread operator dan rest parameter dari es6 membuat kode kita menjadi lebih clean code


//MODULES
//Modul adalah bagian dari program yang menentukan bagian mana yang menjadi sandarannya 
//dan fungsionalitas apa yang disediakan untuk modul lain untuk digunakan
//Memecah-mecah kode program menjadi banyak bagian-bagian yang lebih kecil. Biasanya bagian kecil dari kode ini disebut dengan nama modu

//DESTRUCTURING
//Adalah bagaimana kita menyusun nilai dari variabel,object, maupun aarray, menjadi lebih terstruktur

//Array Destructuring
