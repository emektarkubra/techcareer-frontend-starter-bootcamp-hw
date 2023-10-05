// "Tech Career" metnini tersten yazdır

let str = "";
const string = "Tech Career";
for (let i = string.length - 1; i >= 0; i--) {
  str += string[i];
}
console.log(str);

// var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11] bu dizideki SADECE poizitif sayıların toplamını ekrana yaz
var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11];
let count = 0;
numbers.map((number) => (number > 0 ? (count += number) : count));
console.log(count);

//  bu dizideki en büyük sayı hangisidir?
numbers.sort((a, b) => b - a);
console.log(numbers[0]); //78

//1-50 arası sayılar içinde 3’e veya 5’e tam bölünebilen sayıları console a yaz ve kaç adet olduğunu console yaz.
let num = 0;
for (let i = 1; i < 50; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
    num++;
  }
}
console.log(num);
