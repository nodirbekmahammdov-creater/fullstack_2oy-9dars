
// let foydalanuvchi = {
//   firstName: "   aSaDbEk  ",
//   lastName: " aBDULHAMIDOV ",
//   email: "  ASADBEK@GMAIL.COM",
//   username: " asadbek_dev   "
// };

// function boshHarf(str) {
//   let tozaMatn = str.trim();
//   if (tozaMatn.length === 0) return "";
//   return tozaMatn[0].toUpperCase() + tozaMatn.slice(1).toLowerCase();
// }

// function kichikHarf(str) {
//   return str.trim().toLowerCase();
// }

// function emailTekshir(str) {
//   let tozaEmail = str.trim();
//   let birinchiBelgi = tozaEmail.indexOf("@");
//   let oxirgiBelgi = tozaEmail.lastIndexOf("@");
//   return tozaEmail.endsWith(".com") && tozaEmail.includes("@") && birinchiBelgi === oxirgiBelgi && birinchiBelgi > 0;
// }

// function foydalanuvchiTekshir(str) {
//   return str.trim().length >= 5;
// }

// foydalanuvchi.firstName = boshHarf(foydalanuvchi.firstName);
// foydalanuvchi.lastName = boshHarf(foydalanuvchi.lastName);
// foydalanuvchi.email = kichikHarf(foydalanuvchi.email);
// foydalanuvchi.username = kichikHarf(foydalanuvchi.username);

// console.log(`Ism: ${foydalanuvchi.firstName}`);
// console.log(`Familiya: ${foydalanuvchi.lastName}`);
// console.log(`Email: ${foydalanuvchi.email}`);
// console.log(`Username: ${foydalanuvchi.username}`);

// let ismTogri = foydalanuvchi.firstName.length > 0;
// let familiyaTogri = foydalanuvchi.lastName.length > 0;
// let emailTogri = emailTekshir(foydalanuvchi.email);
// let usernameTogri = foydalanuvchiTekshir(foydalanuvchi.username);

// if (emailTogri && usernameTogri && ismTogri && familiyaTogri) {
//   console.log("Holat: muvaffaqiyatli ro‘yxatdan o‘tdi");
// } else {
//   console.log("Xatolik yuz berdi!");
//   if (!emailTogri) console.log("Emailni to‘g‘ri kiriting!");
//   if (!usernameTogri) console.log("Username xato!");
//   if (!ismTogri) console.log("Ism kiritilmagan!");
//   if (!familiyaTogri) console.log("Familiya kiritilmagan!");
// }

// // 2-MASALA

// let royxatdanOtuvchi = {
//   name: " hASanboy ",
//   email: "   haSanboy@H.COM    ",
//   phone: " +998 77 459 77 50   ",
//   password: " haSanboy_1709 "
// };

// const ismFormatlash = function(str) {
//   let tozaMatn = str.trim();
//   if (tozaMatn.length === 0) return "";
//   return tozaMatn[0].toUpperCase() + tozaMatn.slice(1).toLowerCase();
// };

// const emailFormatlash = function(str) {
//   return str.trim().toLowerCase();
// };

// const matnTozalash = function(str) {
//   return str.trim();
// };

// const royxatEmailTekshir = function(str) {
//   let tozaEmail = str.trim();
//   let birinchiBelgi = tozaEmail.indexOf("@");
//   let oxirgiBelgi = tozaEmail.lastIndexOf("@");
//   return tozaEmail.includes("@") && tozaEmail.endsWith(".com") && birinchiBelgi === oxirgiBelgi && birinchiBelgi > 0 && tozaEmail.lastIndexOf(".com") > birinchiBelgi + 1;
// };

// const telefonTekshir = function(str) {
//   return str.trim().startsWith("+998");
// };

// const parolTekshir = function(str) {
//   return str.trim().length >= 8;
// };

// royxatdanOtuvchi.name = ismFormatlash(royxatdanOtuvchi.name);
// royxatdanOtuvchi.email = emailFormatlash(royxatdanOtuvchi.email);
// royxatdanOtuvchi.phone = matnTozalash(royxatdanOtuvchi.phone);
// royxatdanOtuvchi.password = matnTozalash(royxatdanOtuvchi.password);

// console.log(`Ism: ${royxatdanOtuvchi.name}`);
// console.log(`Email: ${royxatdanOtuvchi.email}`);
// console.log(`Telefon: ${royxatdanOtuvchi.phone}`);
// console.log(`Parol uzunligi: ${royxatdanOtuvchi.password.length}`);

// let ismTogri2 = royxatdanOtuvchi.name.length > 0;
// let emailTogri2 = royxatEmailTekshir(royxatdanOtuvchi.email);
// let telefonTogri2 = telefonTekshir(royxatdanOtuvchi.phone);
// let parolTogri2 = parolTekshir(royxatdanOtuvchi.password);

// if (ismTogri2 && emailTogri2 && telefonTogri2 && parolTogri2) {
//   console.log("Holat: ma’lumotlar qabul qilindi");
// } else {
//   console.log("Xatolik yuz berdi!");
//   if (!ismTogri2) console.log("Ismni to‘g‘ri kiriting!");
//   if (!emailTogri2) console.log("Emailni to‘g‘ri kiriting!");
//   if (!telefonTogri2) console.log("Telefon raqami noto‘g‘ri!");
//   if (!parolTogri2) console.log("Parol kamida 8 ta belgidan iborat bo‘lishi kerak!");
// }

// // 3-MASALA

// let mahsulot = {
//   name: " wIRELESS HEADPHONES ",
//   category: " ELECTRONICS ",
//   description: " Bluetooth headphones with noise cancellation ",
//   code: " WH-2026 "
// };

// const matnniTozalash = str => str.trim();

// const mahsulotBoshHarf = str => {
//   let tozaMatn = matnniTozalash(str);
//   if (tozaMatn.length === 0) return "";
//   return tozaMatn[0].toUpperCase() + tozaMatn.slice(1).toLowerCase();
// };

// const kattaHarflar = str => matnniTozalash(str).toUpperCase();

// const tavsifTekshir = str => {
//   let tozaTavsif = matnniTozalash(str);
//   return tozaTavsif.length >= 20 && tozaTavsif.toLowerCase().includes("bluetooth");
// };

// const mahsulotKodTekshir = str => matnniTozalash(str).startsWith("WH-");

// mahsulot.name = mahsulotBoshHarf(mahsulot.name);
// mahsulot.category = kattaHarflar(mahsulot.category);
// mahsulot.description = matnniTozalash(mahsulot.description);
// mahsulot.code = matnniTozalash(mahsulot.code);

// let mahsulotNomiTogri = mahsulot.name.length > 0;
// let kategoriyaTogri = mahsulot.category.length > 0;
// let tavsifTogri = tavsifTekshir(mahsulot.description);
// let mahsulotKodiTogri = mahsulotKodTekshir(mahsulot.code);

// if (mahsulotNomiTogri && kategoriyaTogri && tavsifTogri && mahsulotKodiTogri) {
//   console.log(`Mahsulot: ${mahsulot.name}`);
//   console.log(`Kategoriya: ${mahsulot.category}`);
//   console.log(`Kod: ${mahsulot.code}`);
//   console.log("Holat: tekshiruvdan o‘tdi");
// } else {
//   console.log("Holat: tekshiruvdan o‘tmadi!");
//   if (!mahsulotNomiTogri) console.log("Mahsulot nomini to‘g‘ri kiriting!");
//   if (!kategoriyaTogri) console.log("Kategoriyani to‘g‘ri kiriting!");
//   if (!tavsifTogri) console.log("Tavsif kamida 20 belgi va bluetooth so‘zini o‘z ichiga olishi kerak!");
//   if (!mahsulotKodiTogri) console.log("Kod WH- bilan boshlanishi kerak!");
// }

// // 4-MASALA

// let murojaat = {
//   sender: " sARDOR ",
//   subject: " PAYMENT ISSUE ",
//   text: " I cannot complete my payment. Please help! ",
//   email: " SARDOR@MAIL.COM "
// };

// const murojaatMatnTozalash = str => str.trim();

// const yuboruvchiFormatlash = str => {
//   let tozaMatn = murojaatMatnTozalash(str);
//   if (tozaMatn.length === 0) return "";
//   return tozaMatn[0].toUpperCase() + tozaMatn.slice(1).toLowerCase();
// };

// const kichikHarflargaOtqazish = str => murojaatMatnTozalash(str).toLowerCase();

// const xabarTekshir = str => {
//   let tozaXabar = murojaatMatnTozalash(str);
//   return tozaXabar.length >= 20 && tozaXabar.toLowerCase().includes("payment");
// };

// const murojaatEmailTekshir = str => kichikHarflargaOtqazish(str).includes("@");

// murojaat.sender = yuboruvchiFormatlash(murojaat.sender);
// murojaat.subject = kichikHarflargaOtqazish(murojaat.subject);
// murojaat.text = murojaatMatnTozalash(murojaat.text);
// murojaat.email = kichikHarflargaOtqazish(murojaat.email);

// let yuboruvchiTogri = murojaat.sender.length > 0;
// let mavzuTogri = murojaat.subject.length > 0;
// let xabarTogri = xabarTekshir(murojaat.text);
// let murojaatEmailTogri = murojaatEmailTekshir(murojaat.email);

// if (yuboruvchiTogri && mavzuTogri && xabarTogri && murojaatEmailTogri) {
//   console.log(`Yuboruvchi: ${murojaat.sender}`);
//   console.log(`Mavzu: ${murojaat.subject}`);
//   console.log(`Email: ${murojaat.email}`);
//   console.log("Holat: murojaat qabul qilindi");
// } else {
//   console.log("Holat: murojaat qabul qilinmadi!");
//   if (!yuboruvchiTogri) console.log("Yuboruvchi ismi kiritilmagan!");
//   if (!mavzuTogri) console.log("Mavzu kiritilmagan!");
//   if (!xabarTogri) console.log("Xabar kamida 20 belgi va payment so‘zini o‘z ichiga olishi kerak!");
//   if (!murojaatEmailTogri) console.log("Email ichida @ belgisi bo‘lishi kerak!");
// }

// // 5-MASALA

// let profil = {
//   fullName: " dILSHOD kARIMOV ",
//   email: " DILSHOD@GMAIL.COM ",
//   username: " dilshod_uz ",
//   city: " tOSHKENT ",
//   website: " https://dilshod.uz "
// };

// const profilMatnTozalash = str => str.trim();

// const ismFamiliyaFormatlash = str => {
//   let tozaMatn = profilMatnTozalash(str);
//   let boshJoy = tozaMatn.indexOf(" ");

//   if (boshJoy === -1) {
//     if (tozaMatn.length === 0) return "";
//     return tozaMatn[0].toUpperCase() + tozaMatn.slice(1).toLowerCase();
//   }

//   let ism = tozaMatn.slice(0, boshJoy);
//   let familiya = tozaMatn.slice(boshJoy + 1).trim();

//   let formatlanganIsm = ism.length > 0
//     ? ism[0].toUpperCase() + ism.slice(1).toLowerCase()
//     : "";

//   let formatlanganFamiliya = familiya.length > 0
//     ? familiya[0].toUpperCase() + familiya.slice(1).toLowerCase()
//     : "";

//   return `${formatlanganIsm} ${formatlanganFamiliya}`.trim();
// };

// const profilBoshHarf = str => {
//   let tozaMatn = profilMatnTozalash(str);
//   if (tozaMatn.length === 0) return "";
//   return tozaMatn[0].toUpperCase() + tozaMatn.slice(1).toLowerCase();
// };

// const profilKichikHarf = str => profilMatnTozalash(str).toLowerCase();

// const profilEmailTekshir = str => {
//   let tozaEmail = profilKichikHarf(str);
//   return tozaEmail.includes("@") && tozaEmail.endsWith(".com");
// };

// const profilUsernameTekshir = str => profilMatnTozalash(str).length >= 6;

// const saytTekshir = str => profilMatnTozalash(str).startsWith("https://");

// profil.fullName = ismFamiliyaFormatlash(profil.fullName);
// profil.email = profilKichikHarf(profil.email);
// profil.username = profilKichikHarf(profil.username);
// profil.city = profilBoshHarf(profil.city);
// profil.website = profilMatnTozalash(profil.website);

// let ismFamiliyaTogri = profil.fullName.length > 0;
// let profilEmailTogri = profilEmailTekshir(profil.email);
// let profilUsernameTogri = profilUsernameTekshir(profil.username);
// let shaharTogri = profil.city.length > 0;
// let saytTogri = saytTekshir(profil.website);

// if (ismFamiliyaTogri && profilEmailTogri && profilUsernameTogri && shaharTogri && saytTogri) {
//   console.log(`F.I.Sh.: ${profil.fullName}`);
//   console.log(`Email: ${profil.email}`);
//   console.log(`Username: ${profil.username}`);
//   console.log(`Shahar: ${profil.city}`);
//   console.log(`Website: ${profil.website}`);
//   console.log("Holat: profil tasdiqlandi");
// } else {
//   console.log("Holat: profil tasdiqlanmadi!");
//   if (!ismFamiliyaTogri) console.log("Ism va familiya kiritilmagan!");
//   if (!profilEmailTogri) console.log("Emailda @ bo‘lishi va .com bilan tugashi kerak!");
//   if (!profilUsernameTogri) console.log("Username kamida 6 ta belgidan iborat bo‘lishi kerak!");
//   if (!shaharTogri) console.log("Shahar kiritilmagan!");
//   if (!saytTogri) console.log("Website https:// bilan boshlanishi kerak!");
// }
