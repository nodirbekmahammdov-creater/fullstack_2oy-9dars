// 1-masala. Foydalanuvchi profilini to‘g‘rilash
// Profil ma’lumotlarini tozalang, kerakli formatga keltiring va tekshiruvdan o‘tkazing.
// Boshlang‘ich kod:
// let user = {
// firstName: " aSaDbEk ",
// lastName: " aBDULHAMIDOV ",
// email: " ASADBEK@GMAIL.COM ",
// username: " asadbek_dev "
// };
// Vazifalar:
// 1. Ism va familiyadagi ortiqcha bo‘sh joylarni olib tashlang; birinchi harfni katta, qolganlarini kichik qiling.
// 2. Emailni tozalang va kichik harflarga o‘tkazing.
// 3. Username ni tozalang va kichik harflarga o‘tkazing.
// 4. Emailda @ borligini va .com bilan tugashini tekshiring.
// 5. Username kamida 5 ta belgidan iborat ekanini tekshiring.
// 6. Barcha shartlar bajarilsa muvaffaqiyat xabarini, aks holda xatolik xabarini chiqaring.
// 7. Qo‘shimcha: qaysi maydon noto‘g‘ri ekanini alohida ko‘rsating.
// Kutilgan natija (format namunasi):
// Ism: Asadbek
// Familiya: Abdulhamidov
// Email: asadbek@gmail.com
// Username: asadbek_dev
// Holat: muvaffaqiyatli ro‘yxatdan o‘tdi


// ----------------Misolni ishlanishi--------------------------


// let user = {
//   firstName: "   aSaDbEk  ",
//   lastName: " aBDULHAMIDOV ",
//   email: "  ASADBEK@GMAIL.COM",
//   username: " asadbek_dev   "
// };
// function BoshHarf(str) {
//     let clearStr = str.trim();
//     if (clearStr.length === 0) return "";
//     return clearStr[0].toUpperCase() + clearStr.slice(1).toLowerCase();
// }
// function kichikHarf(str) {
//     return str.trim().toLowerCase();
// }
// function emailTogri(str) {
//     let clearStr = str.trim()
//     let firstIndex = clearStr.indexOf("@");
//     let secondIndex = clearStr.lastIndexOf("@");
//     return clearStr.endsWith(".com") && clearStr.includes("@") && firstIndex===secondIndex && firstIndex>0;
// }
// function userTekshir(str) {
//     return str.trim().length >= 5;
// }

// user.firstName = BoshHarf(user.firstName);
// user.lastName = BoshHarf(user.lastName);
// user.email = kichikHarf(user.email);
// user.username = kichikHarf(user.username);

// console.log(`Ism: ${user.firstName}`);
// console.log(`Familya: ${user.lastName}`);
// console.log(`Email: ${user.email}`);
// console.log(`Username: ${user.username}`);

// let ismBormi = user.firstName.length > 0;
// let famBormi = user.lastName.length > 0;
// let emailTogriMi = emailTogri(user.email);
// let userTogriMi = userTekshir(user.username);

// if (emailTogriMi && userTogriMi && ismBormi && famBormi) {
//   alert("Muvaffaqiyatli ro'yxatdan o'tdi");
// }
// else {
//   alert("Nimadir xato ketdi!");
//   if (!emailTogriMi) {
//     console.log("Emailni to'g'ri kiriting!");
//   }
//   if(!userTogriMi) {
//     console.log("Username xato");
//   }
//   if (!ismBormi) {
//     console.log("Ismni kiritilmagan");
//   }
//   if (!famBormi) {
//     console.log("Familyani kiritilmagan: ");
    
//   }
// }


// =========================================================


// 2-masala. Ro‘yxatdan o‘tish formasini tekshirish
// Yangi foydalanuvchining ma’lumotlarini kerakli formatga keltiring va talablarni tekshiring.
// Boshlang‘ich kod:
// let user = {
// name: " mALiKa ",
// email: " MALIKA@EXAMPLE.COM ",
// phone: " +998 90 123 45 67 ",
// password: " Malika2026 "
// };
// Vazifalar:
// 1. name ni tozalab, faqat birinchi harfini katta qiling.
// 2. Emailni tozalab kichik harflarga o‘tkazing; @ mavjudligini va .com bilan tugashini tekshiring.
// 3. Telefon raqamidagi bosh va oxirgi bo‘sh joylarni olib tashlang. +998 bilan boshlanishini tekshiring.
// 4. Parolni tozalang va uzunligi kamida 8 belgi ekanini tekshiring.
// 5. Barcha shartlar bajarilsa, ro‘yxatdan o‘tishga ruxsat bering; aks holda xatolikni ko‘rsating.
// 6. Qo‘shimcha: har bir maydon tekshiruvi natijasini alohida chiqaring.
// Kutilgan natija (format namunasi):
// Ism: Malika
// Email: malika@example.com
// Telefon: +998 90 123 45 67
// Parol uzunligi: 10
// Holat: ma’lumotlar qabul qilindi



// -----------------Misolni ishlanishi.-----------------------------

// let user = {
// name: " hASanboy ",
// email: "   haSanboy@H.COM    ",
// phone: " +998 77 459 77 50   ",
// password: " haSanboy_1709 "
// };

// const BoshHarf = function (str) {
//   let clearStr = str.trim();
//   if (clearStr.length === 0) return "";
//   return clearStr[0].toUpperCase() + clearStr.slice(1).toLowerCase();
// }

// const kichikHarf = function (str) {
//   return str.trim().toLowerCase();
// }

// const tozaMatn = function (str) {
//   return str.trim();
// }
// const emailTogri = function (str) {
//   let clearStr = str.trim();
//   let firstIndex = clearStr.indexOf("@");
//   let secondIndex = clearStr.lastIndexOf("@");
//   return clearStr.includes("@") && clearStr.endsWith(".com") && firstIndex===secondIndex && firstIndex>0 && clearStr.lastIndexOf(".com") > firstIndex + 1;
// }

// const phoneTogri=function(str) {
//   let clearStr = str.trim();
//   return clearStr.startsWith("+998");
// }
// const password = function (str) {
//   let clearStr = str.trim();
//   return clearStr.length >= 8;
// }

// user.name = BoshHarf(user.name);
// user.email = kichikHarf(user.email);
// user.phone = tozaMatn(user.phone);
// user.password = tozaMatn(user.password);


// console.log(`Ism: ${user.name}`);
// console.log(`Email: ${user.email}`);
// console.log(`Phone: ${user.phone}`);
// console.log(`Password uzunligi: ${user.password.length}`);



// let ismBorMi = user.name.length > 0;
// let emailTogriMi = emailTogri(user.email);
// let phoneTogoriMi = phoneTogri(user.phone);
// let passwordTogri = password(user.password);




// if (ismBorMi && emailTogriMi && phoneTogoriMi && passwordTogri) {
//   alert("Muvaffaqiyatli ro'yxatdan o'tdi");
//   console.log("Holat: ma’lumotlar qabul qilindi");
// }
// else {
//   alert("Nimadir xato ketdi!");
//   if (!ismBorMi) {
//     console.log("Xatolik: Ismni to'g'ri kiriting!");
//   }
//   if(!emailTogriMi) {
//     console.log("Xatolik: Emailni to'g'ri kiriting:");
//   }
//   if (!phoneTogoriMi) {
//     console.log("Xatolik: Phone to'g'ri kiritilmagan");
//   }
//   if (!passwordTogri) {
//     console.log("Xatolik: Passwordni to'g'ri kiriting: ");
    
//   }
// }


// =========================================================



// 3-masala. Mahsulot tavsifini tekshirish
// Mahsulot nomi va kategoriyasini formatlang, tavsif hamda kodni tekshiring.
// Boshlang‘ich kod:
// let product = {
// name: " wIRELESS HEADPHONES ",
// category: " ELECTRONICS ",
// description: " Bluetooth headphones with noise cancellation ",
// code: " WH-2026 "
// };
// Vazifalar:
// 1. Mahsulot nomini tozalang; birinchi harfini katta, qolganlarini kichik qiling.
// 2. category ni tozalab, barcha harflarini katta qiling.
// 3. description ni tozalang va uzunligi kamida 20 belgi ekanini tekshiring.
// 4. code ni tozalang va WH- bilan boshlanishini tekshiring.
// 5. description ichida bluetooth so‘zi borligini katta-kichik harflarga bog‘liq bo‘lmagan holda tekshiring.
// 6. Tekshiruv natijasiga ko‘ra ma’lumotlar to‘liq yoki to‘liq emasligini chiqaring.
// Kutilgan natija (format namunasi):
// Mahsulot: Wireless headphones
// Kategoriya: ELECTRONICS
// Kod: WH-2026
// Holat: tekshiruvdan o‘tdi

// -----------Misolni ishlanishi-------------------------

let product = {
  name: " wIRELESS HEADPHONES ",
  category: " ELECTRONICS ",
  description: " Bluetooth headphones with noise cancellation ",
  code: " WH-2026 "
};

const tozzaMatn = str => str.trim();

const BoshHarf = str => {
  let clearStr = tozzaMatn(str);
  if (clearStr.length === 0) return "";
  return clearStr[0].toUpperCase() + clearStr.slice(1).toLowerCase();
};

const allBigLetter = str => tozzaMatn(str).toUpperCase();

const desctTekshir = str => {
  let clearStr = tozzaMatn(str);
  return clearStr.length >= 20 && clearStr.toLowerCase().includes("bluetooth");
};

const clearCode = str => tozzaMatn(str).startsWith("WH-");

product.name = BoshHarf(product.name);
product.category = allBigLetter(product.category);
product.description = tozzaMatn(product.description);
product.code = tozzaMatn(product.code);

let ismBorMi = product.name.length > 0;
let categoriyaBormi = product.category.length > 0;
let descriptionBormi = desctTekshir(product.description);
let codeBomi = clearCode(product.code);

if (ismBorMi && categoriyaBormi && descriptionBormi && codeBomi) {
  console.log(`Mahsulot: ${product.name}`);
  console.log(`Kategoriya: ${product.category}`);
  console.log(`Kod: ${product.code}`);
  console.log("Holat: tekshiruvdan o‘tdi");
} else {
  console.log("Holat: tekshiruvdan o'tmadi (ma’lumotlar to‘liq emas)!");
  if (!ismBorMi) console.log("Xatolik: Ismni to'g'ri kiriting!");
  if (!categoriyaBormi) console.log("Xatolik: Kategoriyani to'g'ri kiriting!");
  if (!descriptionBormi) console.log("Xatolik: Tavsif kamida 20 belgi va ichida 'bluetooth' so'zi bo'lishi kerak!");
  if (!codeBomi) console.log("Xatolik: Kod WH- bilan boshlanishi kerak!");
}



// ====================================

// 4-masala. Xabar matnini qayta ishlash
// Foydalanuvchi murojaatini tozalang va uning talabga mosligini tekshiring.
// Boshlang‘ich kod:
// let message = {
// sender: " sARDOR ",
// subject: " PAYMENT ISSUE ",
// text: " I cannot complete my payment. Please help! ",
// email: " SARDOR@MAIL.COM "
// };
// Vazifalar:
// 1. sender ni tozalang va ism formatiga keltiring.
// 2. subject ni tozalab, kichik harflarga o‘tkazing.
// 3. text ni tozalang; uzunligi kamida 20 belgi ekanini tekshiring.
// 4. text ichida payment so‘zi borligini katta-kichik harflarga bog‘liq bo‘lmagan holda aniqlang.
// 5. Emailni tozalang, kichik harflarga o‘tkazing va @ belgisi borligini tekshiring.
// 6. Barcha shartlar bajarilsa murojaat qabul qilinganini, aks holda xatolik borligini chiqaring.
// Kutilgan natija (format namunasi):
// Yuboruvchi: Sardor
// Mavzu: payment issue
// Email: sardor@mail.com
// Holat: murojaat qabul qilindi



// ----------------Misolni ishlanishi----------------------


// let message = {
//   sender: " sARDOR ",
//   subject: " PAYMENT ISSUE ",
//   text: " I cannot complete my payment. Please help! ",
//   email: " SARDOR@MAIL.COM "
// };

// const tozaMatn = str => str.trim();

// const boshHarf = str => {
//   let clearStr = tozaMatn(str);
//   if (clearStr.length === 0) return "";
//   return clearStr[0].toUpperCase() + clearStr.slice(1).toLowerCase();
// };

// const kichikHarf = str => tozaMatn(str).toLowerCase();

// const textTekshir = str => {
//   let clearStr = tozaMatn(str);
//   return clearStr.length >= 20 && clearStr.toLowerCase().includes("payment");
// };

// const emailTekshir = str => {
//   let clearStr = kichikHarf(str);
//   return clearStr.includes("@");
// };

// message.sender = boshHarf(message.sender);
// message.subject = kichikHarf(message.subject);
// message.text = tozaMatn(message.text);
// message.email = kichikHarf(message.email);

// let senderTogrimi = message.sender.length > 0;
// let subjectTogrimi = message.subject.length > 0;
// let textTogrimi = textTekshir(message.text);
// let emailTogrimi = emailTekshir(message.email);

// if (senderTogrimi && subjectTogrimi && textTogrimi && emailTogrimi) {
//   console.log(`Yuboruvchi: ${message.sender}`);
//   console.log(`Mavzu: ${message.subject}`);
//   console.log(`Email: ${message.email}`);
//   console.log("Holat: murojaat qabul qilindi");
// } else {
//   console.log("Holat: murojaat qabul qilinmadi (xatolik bor)!");
//   if (!senderTogrimi) console.log("Xatolik: Yuboruvchi ismi kiritilmagan!");
//   if (!subjectTogrimi) console.log("Xatolik: Mavzu kiritilmagan!");
//   if (!textTogrimi) console.log("Xatolik: Xabar matni kamida 20 belgi va ichida 'payment' so'zi bo'lishi kerak!");
//   if (!emailTogrimi) console.log("Xatolik: Email noto'g'ri (ichida @ belgisi bo'lishi kerak)!");
// }



//=================================
// 5-masala. Profil ma’lumotlarini to‘liq tekshirish
// Bir nechta string metodlari va shartlarni birlashtirib, foydalanuvchi profilini tekshiring.
// Boshlang‘ich kod:
// let profile = {
// fullName: " dILSHOD kARIMOV ",
// email: " DILSHOD@GMAIL.COM ",
// username: " dilshod_uz ",
// city: " tOSHKENT ",
// website: " https://dilshod.uz "
// };
// Vazifalar:
// 1. fullName ni tozalang va ism hamda familiyaning birinchi harfini katta qiling. split() o‘tilmagan bo‘lsa,
// ism va familiyani alohida qayta ishlash usulini tanlang.
// 2. Email va username ni tozalab, kichik harflarga o‘tkazing.
// 3. Emailda @ borligini va .com bilan tugashini tekshiring.
// 4. Username uzunligi kamida 6 belgi ekanini tekshiring.
// 5. city ni tozalang va birinchi harfini katta, qolganlarini kichik qiling.
// 6. website https:// bilan boshlanishini tekshiring.
// 7. Barcha tekshiruvlar bajarilsa profil tasdiqlanganini chiqaring; aks holda bajarilmagan talablarni
// ko‘rsating.
// Kutilgan natija (format namunasi):
// F.I.Sh.: Dilshod Karimov
// Email: dilshod@gmail.com
// Username: dilshod_uz
// Shahar: Toshkent
// Website: https://dilshod.uz
// Holat: profil tasdiqlandi

// ------------------Misolni ishlanishi---------------------------
// let profile = {
//   fullName: " dILSHOD kARIMOV ",
//   email: " DILSHOD@GMAIL.COM ",
//   username: " dilshod_uz ",
//   city: " tOSHKENT ",
//   website: " https://dilshod.uz "
// };

// const tozaMatn = str => str.trim();

// const formatFullName = str => {
//   let clearStr = tozaMatn(str);
//   let spaceIndex = clearStr.indexOf(" ");

//   if (spaceIndex === -1) {
//     if (clearStr.length === 0) return "";
//     return clearStr[0].toUpperCase() + clearStr.slice(1).toLowerCase();
//   }

//   let firstName = clearStr.slice(0, spaceIndex);
//   let lastName = clearStr.slice(spaceIndex + 1).trim();

//   let formattedFirst = firstName.length > 0 
//     ? firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() 
//     : "";
//   let formattedLast = lastName.length > 0 
//     ? lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() 
//     : "";

//   return `${formattedFirst} ${formattedLast}`.trim();
// };

// const boshHarf = str => {
//   let clearStr = tozaMatn(str);
//   if (clearStr.length === 0) return "";
//   return clearStr[0].toUpperCase() + clearStr.slice(1).toLowerCase();
// };

// const kichikHarf = str => tozaMatn(str).toLowerCase();

// const emailTekshir = str => {
//   let clearStr = kichikHarf(str);
//   return clearStr.includes("@") && clearStr.endsWith(".com");
// };

// const usernameTekshir = str => tozaMatn(str).length >= 6;

// const websiteTekshir = str => tozaMatn(str).startsWith("https://");

// profile.fullName = formatFullName(profile.fullName);
// profile.email = kichikHarf(profile.email);
// profile.username = kichikHarf(profile.username);
// profile.city = boshHarf(profile.city);
// profile.website = tozaMatn(profile.website);

// let ismFamTogrimi = profile.fullName.length > 0;
// let emailTogrimi = emailTekshir(profile.email);
// let usernameTogrimi = usernameTekshir(profile.username);
// let cityTogrimi = profile.city.length > 0;
// let websiteTogrimi = websiteTekshir(profile.website);

// if (ismFamTogrimi && emailTogrimi && usernameTogrimi && cityTogrimi && websiteTogrimi) {
//   console.log(`F.I.Sh.: ${profile.fullName}`);
//   console.log(`Email: ${profile.email}`);
//   console.log(`Username: ${profile.username}`);
//   console.log(`Shahar: ${profile.city}`);
//   console.log(`Website: ${profile.website}`);
//   console.log("Holat: profil tasdiqlandi");
// } else {
//   console.log("Holat: profil tasdiqlanmadi!");
//   if (!ismFamTogrimi) console.log("Xatolik: Ism va familiya kiritilmagan!");
//   if (!emailTogrimi) console.log("Xatolik: Emailda @ bo'lishi va .com bilan tugashi kerak!");
//   if (!usernameTogrimi) console.log("Xatolik: Username uzunligi kamida 6 belgi bo'lishi kerak!");
//   if (!cityTogrimi) console.log("Xatolik: Shahar kiritilmagan!");
//   if (!websiteTogrimi) console.log("Xatolik: Website https:// bilan boshlanishi kerak!");
// }
// ===========================================