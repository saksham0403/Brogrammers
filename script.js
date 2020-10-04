function myFunction() {
    var input, filter, dishitems, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    filter = filter.split(" ").join("")
    dishitems = document.getElementsByClassName("dishitem");
    var dishitem_ids = [];
    for (i = 0; i < dishitems.length; i++) {
      dishitem_ids.push(dishitems[i].id);
    }
    if(filter!=""){
      var sp = document.querySelector(".specialities");
      var hd = document.getElementsByClassName("headings");
      sp.style.display = "none";
      //console.log(hd.length);
      for(var i=0;i<hd.length;i++)
      {
        hd[i].style.display="none";
      }
    }
    else{
      var sp = document.querySelector(".specialities");
      var hd = document.getElementsByClassName("headings");
      sp.style.display = "";
      for(var i=0;i<hd.length;i++)
      {
        hd[i].style.display="";
      }
    }
    for (i = 0; i < dishitem_ids.length; i++) {
        var currentName = dishitem_ids[i];
        //console.log(currentName);
        if (currentName.toUpperCase().indexOf(filter) === -1) {
              //console.log(currentName);
              var clas = document.getElementById(currentName);
              //console.log(clas);
              //console.log("   ");
              clas.style.display = "none";
        }else{
          var clas = document.getElementById(currentName);
          //console.log(clas);
          //console.log("   ");
          clas.style.display = "";
        }
    }
  }

  minuses =  document.querySelectorAll(".minus");
  pluses = document.querySelectorAll(".plus");
  noOfItems = document.querySelectorAll(".no_items");
  for(let i=0;i<minuses.length;i++)
  {
    minuses[i].addEventListener("click",function(){
        if(noOfItems[i].innerText>0){
          noOfItems[i].innerText--;
        }
    });
  }

  for(let i=0;i<pluses.length;i++)
  {
    pluses[i].addEventListener("click",function(){
        noOfItems[i].innerText++;
    });
  }

  // var addButton = document.querySelectorAll('.add');
  // for(int i=0;i<addButton.length;i++){
  //   addButton.addEventListener('click',function(){
  //     localStorage.setItem()
  //   });
  // }

  var products =[
    {
      name: "Macho Nachos",
      id: "MachoNachos",
      price: 4.5,
      inCart: 0
    },
    {
      name: "Fishless Vegan Fillets",
      id: "FishlessVeganFillets",
      price: 4,
      inCart: 0
    },
    {
      name: "Nutrition Bomb",
      id: "NutritionBomb",
      price: 3,
      inCart: 0
    },
    {
      name: "Coddled Eggs",
      id: "CoddledEggs",
      price: 5,
      inCart: 0
    },
    {
      name: "Escargots à la Bourguignonne",
      id: "EscargotsàlaBourguignonne",
      price: 12,
      inCart: 0
    },
    {
      name: "Grilled BBQ Capelons",
      id: "GrilledBBQCapelons",
      price: 10.5,
      inCart: 0
    },
    {
      name: "Thrumbos With Gravy",
      id: "ThrumbosWithGravy",
      price: 12,
      inCart: 0
    },
    {
      name: "Smokey Azan",
      id: "SmokeyAzan",
      price: 11.5,
      inCart: 0
    },
    {
      name: "Stargazey Pie",
      id: "StargazeyPie",
      price: 7,
      inCart: 0
    },
    {
      name: "Damson Plum Clafoutis",
      id: "DamsonPlumClafoutis",
      price: 8,
      inCart: 0
    },
    {
      name: "Rhubarb Eton Mess",
      id: "RhubarbEtonMess",
      price: 7.5,
      inCart: 0
    },
    {
      name: "Johnnycake Cobblers",
      id: "JohnnycakeCobblers",
      price: 10,
      inCart: 0
    },
    {
      name: "Unicorn Frappuccino",
      id: "UnicornFrappuccino",
      price: 4,
      inCart: 0
    },
    {
      name: "Mamma Mia Elon Beer",
      id: "MammaMiaElonBeer",
      price: 6,
      inCart: 0
    },
    {
      name: "The Galaxy Magic Mule",
      id: "TheGalaxyMagicMule",
      price: 7,
      inCart: 0
    },
    {
      name: "Fuzzy Tauntaun",
      id: "FuzzyTauntaun",
      price: 4.5,
      inCart: 0
    }
  ];

  let adds = document.querySelectorAll(".add");
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
  // for(int i=0;i<items.length;i++)
  // {
  //
  // }
  var totalCost = 0;
  for(let i=0;i<adds.length;i++)
  {
    adds[i].addEventListener("click",function(){
      let prevPrice = localStorage.getItem(products[i].name);
      if(prevPrice)
      {
        totalCost = totalCost - parseInt(prevPrice)*products[i].price;
      }
      cartNumbers(products[i],i);
      // console.log(totalCost);
    });
  }
  // var checkoutbut = document.querySelector(".check-out");
  // if(checkoutbut)
  // {
  //   checkoutbut.addEventListener("click",function(){
  //     for(let i=0;i<products.length;i++)
  //     {
  //       let quanti = localStorage.getItem(products[i].name);
  //       if(quanti)
  //       {
  //         // quanti = parseInt(quanti);
  //         if(quanti!=0)
  //         {
  //           document.querySelector(".productlist").innerHTML += `Saksham`
  //         }
  //       }
  //     }
  //   });
  // }
  function displayCart(){
     var total = 0;
    for(let i=0;i<products.length;i++)
    {
      let quanti = localStorage.getItem(products[i].name);
      if(quanti)
      {
        // quanti = parseInt(quanti);
        if(quanti!=0)
        {
          var prodlist = document.querySelector(".productlist");
          if(prodlist)
          {
            total = total + products[i].price*quanti;
            prodlist.innerHTML+=`<div><p><span class="prodname">${products[i].name}</span><span class="prodprice">${products[i].price}</span><span class="prodquant">${quanti}</span><span class="prodtotal">${products[i].price*quanti}</span></p><br></div>`;
          }

        }
      }
    }
    var prodlist = document.querySelector(".productlist");
    if(prodlist)
    {
      prodlist.innerHTML+=`<br><br><div><p><span class="totalc">Total Cost : </span><span class="totalv">${total} XND</span></p><br></div>`;
    }

  }

  function cartNumbers(product,i){
    //let productNumbers = localStorage.getItem('cartNumbers');
    let productNumbers = noOfItems[i].innerText;
    productNumbers = parseInt(productNumbers);
    product.quant = productNumbers;
    localStorage.setItem(product.name,productNumbers);
    totalCost = totalCost + (productNumbers*product.price);
    //setItems(product,i);

  }
  var homeBut = document.querySelector(".homebutton");
  if(homeBut)
  {
    homeBut.addEventListener("click",function(){
        localStorage.clear();
    });
  }
  // var home = document.querySelector(".homebuttonn");
  // if(home)
  // {
  //   home.addEventListener("click",function(){
  //       localStorage.clear();
  //   });
  // }

   displayCart();
