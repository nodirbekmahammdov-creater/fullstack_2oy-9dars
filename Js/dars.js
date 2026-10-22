// let nums= [1,2,3,4,5,6,7,8,9,10];
// let juft = []
// let toq = []
// for (let i=0;i<nums.length;i++){
//     if(nums[i]%2==0){
//         juft.push(nums[i])
//     }
//     else {
//         toq.push(nums[i])
//     }
// }
// console.log(juft);
// console.log(toq);






// let stringa = ["olma", "banan", "uzum", "anor", "shoftoli", "nok", "gilos", "behi"];

// let max = stringa[0];

// for (let i = 0; i < stringa.length; i++) {
//     if (stringa[i].length > max.length) {
//         max = stringa[i];
//     }
// }

// console.log(max);


const products = [
  {
    id: 1,
    name: "Laptop",
    price: 8500000,
    stock: 12
  },
  {
    id: 2,
    name: "Mouse",
    price: 150000,
    stock: 25
  },
  {
    id: 3,
    name: "Keyboard",
    price: 350000,
    stock: 8
  },
  {
    id: 4,
    name: "Monitor",
    price: 2200000,
    stock: 0
  },
  {
    id: 5,
    name: "Headphones",
    price: 450000,
    stock: 17
  }
];
 
// let sum  = 0
// for(let i=0;i<products.length;i++){
//     sum+=products[i].price*products[i].stock
   
    
    
// }
// console.log(sum);

// let n = products[0].name;
// let maxPrice = products[0].price;

// for (let i = 0; i < products.length; i++) {
//     if (maxPrice < products[i].price) {
//         maxPrice = products[i].price;
//         n = products[i].name;
//     }
// }

// console.log(n, maxPrice);



function search(str){
    for(let i=0;i<products.length;i++){
        if(str===products[i].name){
            console.log(products[i].name);
            
            console.log(products[i].price);
            console.log(products[i].stock);
            
            
        }
    }
}

search("Keyboard")