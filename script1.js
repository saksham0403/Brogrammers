// // minuses =  document.querySelectorAll(".minus");
// // pluses = document.querySelectorAll(".plus");
// // noOfItems = document.querySelectorAll(".no_items");
// // for(let i=0;i<minuses.length;i++)
// // {
// //   minuses[i].addEventListener("click",function(){
// //     if(noOfItems[i].innerText>0)
// //     {
// //       noOfItems[i].innerText--;
// //     }
// //   })
// // }
// //
// // for(let i=0;i<pluses.length;i++)
// // {
// //   pluses[i].addEventListener("click",function(){
// //     noOfItems[i].innerText++;
// //   })
// // }
//
// noOfItems = document.querySelectorAll(".no_items");
// let adds = document.querySelectorAll(".add-item");
// let items = [
//   {
//     name:"Macho Nachos",
//     price:4.5,
//     quant:0
//   },
//   {
//     name:"Fishless Vegan Fillets",
//     price:4,
//     quant:0
//   }
// ];
// // for(int i=0;i<items.length;i++)
// // {
// //
// // }
// for(let i=0;i<adds.length;i++)
// {
//   adds[i].addEventListener("click",function(){
//     cartNumbers(items[i],i);
//   })
// }
//
//
//
//
// function cartNumbers(product,i){
//   //let productNumbers = localStorage.getItem('cartNumbers');
//   let productNumbers = noOfItems[i].innerText;
//   productNumbers = parseInt(productNumbers);
//   product.quant = productNumbers;
//   localStorage.setItem(product.name,productNumbers);
//   //setItems(product,i);
// }
//
// function setItems(product,i)
// {
//   //quant will be the quantity in the map
//   product.quant
//   localStorage.setItem("prod")
// }
