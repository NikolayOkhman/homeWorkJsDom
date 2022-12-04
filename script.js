let veg = [
   ["עגבנייה", 4.5],
   ["מלפפון", 3.5],
   ["תפוח אדמה", 4],
];

let shoppingCart = [];

function addTomato() {
   shoppingCart.push(veg[0]);
   console.log(shoppingCart);
   document.getElementById("shoppingCartH").innerHTML = "";
   document.getElementById("shoppingCartL").innerHTML = "";
   document.getElementById("count").innerHTML = shoppingCart.length;

   function check(x) {
      let newP = document.createElement("p");
      let newPOne = document.createElement("p");
      let newText = document.createTextNode(x[0]);
      let newAmount = document.createTextNode(x[1] + " " + "ש''ח");
      newP.appendChild(newText);
      newPOne.appendChild(newAmount);
      document.getElementById("shoppingCartH").appendChild(newP);
      document.getElementById("shoppingCartL").appendChild(newPOne);
   }
   shoppingCart.forEach(check);
   let total = 0;
   for (let i = 0; i < shoppingCart.length; i++) {
      document.getElementById("totalSum").innerHTML = " ";
      total = total + shoppingCart[i][1];
      let textTotal = document.createTextNode(
         "סה''כ לתשלום:" + " " + total + " " + "ש''ח"
      );
      document.getElementById("totalSum").appendChild(textTotal);
   }
}

function addCucumber() {
   shoppingCart.push(veg[1]);
   console.log(shoppingCart);
   document.getElementById("shoppingCartH").innerHTML = "";
   document.getElementById("shoppingCartL").innerHTML = "";

   document.getElementById("count").innerHTML = shoppingCart.length;

   function check(x) {
      let newP = document.createElement("p");
      let newPOne = document.createElement("p");
      let newText = document.createTextNode(x[0]);
      let newAmount = document.createTextNode(x[1] + " " + "ש''ח");
      newP.appendChild(newText);
      newPOne.appendChild(newAmount);
      document.getElementById("shoppingCartH").appendChild(newP);
      document.getElementById("shoppingCartL").appendChild(newPOne);
   }
   shoppingCart.forEach(check);
   let total = 0;
   for (let i = 0; i < shoppingCart.length; i++) {
      document.getElementById("totalSum").innerHTML = " ";
      total = total + shoppingCart[i][1];
      let textTotal = document.createTextNode(
         "סה''כ לתשלום:" + " " + total + " " + "ש''ח"
      );
      document.getElementById("totalSum").appendChild(textTotal);
   }
}

function addPotato() {
   shoppingCart.push(veg[2]);
   console.log(shoppingCart);
   document.getElementById("shoppingCartH").innerHTML = "";
   document.getElementById("shoppingCartL").innerHTML = "";

   document.getElementById("count").innerHTML = shoppingCart.length;

   function check(x) {
      let newP = document.createElement("p");
      let newPOne = document.createElement("p");
      let newText = document.createTextNode(x[0]);
      let newAmount = document.createTextNode(x[1] + " " + "ש''ח");
      newP.appendChild(newText);
      newPOne.appendChild(newAmount);
      document.getElementById("shoppingCartH").appendChild(newP);
      document.getElementById("shoppingCartL").appendChild(newPOne);
   }
   shoppingCart.forEach(check);
   let total = 0;
   for (let i = 0; i < shoppingCart.length; i++) {
      document.getElementById("totalSum").innerHTML = " ";
      total = total + shoppingCart[i][1];
      let textTotal = document.createTextNode(
         "סה''כ לתשלום:" + " " + total + " " + "ש''ח"
      );
      document.getElementById("totalSum").appendChild(textTotal);
   }
}

function removeTomato() {
   document.getElementById("shoppingCartH").innerHTML = "";
   document.getElementById("shoppingCartL").innerHTML = "";
   document.getElementById("totalSum").innerHTML = "סל הקניות ריק ";

   let removeTomato1 = false;
   for (let i = 0; i < shoppingCart.length; i++) {
      if (removeTomato1 == false) {
         if (shoppingCart[i].includes("עגבנייה")) {
            shoppingCart.splice(i, 1);
            removeTomato1 = true;
         }

         document.getElementById("count").innerHTML = shoppingCart.length;
      }
   }
   console.log(shoppingCart);
   function check(x) {
      let newP = document.createElement("p");
      let newPOne = document.createElement("p");
      let newText = document.createTextNode(x[0]);
      let newAmount = document.createTextNode(x[1] + " " + "ש''ח");
      newP.appendChild(newText);
      newPOne.appendChild(newAmount);
      document.getElementById("shoppingCartH").appendChild(newP);
      document.getElementById("shoppingCartL").appendChild(newPOne);
   }
   shoppingCart.forEach(check);
   let total = 0;

   for (let i = 0; i < shoppingCart.length; i++) {
      document.getElementById("totalSum").innerHTML = " ";
      total = total + shoppingCart[i][1];
      let textTotal = document.createTextNode(
         "סה''כ לתשלום:" + " " + total + " " + "ש''ח"
      );
      document.getElementById("totalSum").appendChild(textTotal);
   }
}

function removeCucumber() {
   document.getElementById("shoppingCartH").innerHTML = "";
   document.getElementById("shoppingCartL").innerHTML = "";
   document.getElementById("totalSum").innerHTML = "סל הקניות ריק ";
   let removeTomato1 = false;
   for (let i = 0; i < shoppingCart.length; i++) {
      if (removeTomato1 == false) {
         if (shoppingCart[i].includes("מלפפון")) {
            shoppingCart.splice(i, 1);
            removeTomato1 = true;
         }

         document.getElementById("count").innerHTML = shoppingCart.length;
      }
   }
   console.log(shoppingCart);
   function check(x) {
      let newP = document.createElement("p");
      let newPOne = document.createElement("p");
      let newText = document.createTextNode(x[0]);
      let newAmount = document.createTextNode(x[1] + " " + "ש''ח");
      newP.appendChild(newText);
      newPOne.appendChild(newAmount);
      document.getElementById("shoppingCartH").appendChild(newP);
      document.getElementById("shoppingCartL").appendChild(newPOne);
   }
   shoppingCart.forEach(check);
   let total = 0;
   for (let i = 0; i < shoppingCart.length; i++) {
      document.getElementById("totalSum").innerHTML = " ";
      total = total + shoppingCart[i][1];
      let textTotal = document.createTextNode(
         "סה''כ לתשלום:" + " " + total + " " + "ש''ח"
      );
      document.getElementById("totalSum").appendChild(textTotal);
   }
}

function removePotato() {
   document.getElementById("shoppingCartH").innerHTML = "";
   document.getElementById("shoppingCartL").innerHTML = "";
   document.getElementById("totalSum").innerHTML = "סל הקניות ריק ";
   let removePotato1 = false;
   for (let i = 0; i < shoppingCart.length; i++) {
      if (removePotato1 == false) {
         if (shoppingCart[i].includes("תפוח אדמה")) {
            shoppingCart.splice(i, 1);
            removePotato1 = true;
         }

         document.getElementById("count").innerHTML = shoppingCart.length;
      }
   }
   console.log(shoppingCart);
   function check(x) {
      let newP = document.createElement("p");
      let newPOne = document.createElement("p");
      let newText = document.createTextNode(x[0]);
      let newAmount = document.createTextNode(x[1] + " " + "ש''ח");
      newP.appendChild(newText);
      newPOne.appendChild(newAmount);
      document.getElementById("shoppingCartH").appendChild(newP);
      document.getElementById("shoppingCartL").appendChild(newPOne);
   }
   shoppingCart.forEach(check);
   let total = 0;
   for (let i = 0; i < shoppingCart.length; i++) {
      document.getElementById("totalSum").innerHTML = " ";
      total = total + shoppingCart[i][1];
      let textTotal = document.createTextNode(
         "סה''כ לתשלום:" + " " + total + " " + "ש''ח"
      );
      document.getElementById("totalSum").appendChild(textTotal);
   }
}
