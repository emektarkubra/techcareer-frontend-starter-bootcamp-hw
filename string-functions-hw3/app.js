// 1) "  Çağatay Yıldız" isimli metindeki boşlukları kaldır.    (REPLACE)
const str1 = "  Çağatay Yıldız";
console.log(str1.replace(/\s+/g,""));
console.log(str1.trim());

// 2) "cagatay yildiz" kelimesindeki boşlukları temizle ve tüm harfleri büyült ( REPLACE ve UPPER)
const str2 = "cagatay yildiz"
console.log(str2.replace(/\s+/g,"").toLocaleUpperCase());

// 3) "******Çağatay Yıldız" isimli metindeki yıldızları kaldır (REPLACE)
let str3 = "******Çağatay Yıldız";
console.log(str3.replaceAll("*",""))

// 4) "Çağatay  Yıldız" metnindeki kelimeler arasında 2 boşluk var bunu bir boşluk yap (REPLACE)
let str4 = "Çağatay  Yıldız";
console.log(str4.replace("  "," "))

// 5) "**Tech Career**" isimli metindeki yıldızları kaldır (REPLACE)
const str5 = "**Tech Career**";
console.log(str5.replaceAll("*",""))

// 6) "Tech Career" isimli metnin soluna ve sağına 3 yıldız koy. "***Tech Career***" ( Normal toplama operatörü)
let str6= "Tech Career";
let string="***"+str6+"***"
console.log(string)

// 7) "Tech Career Bilişim teknolojileri" metnindeki son kelimeyi büyült (SUBSTRING)
const str7 = "Tech Career Bilişim teknolojileri"
console.log(str7.substring(20,35).toLocaleUpperCase())


