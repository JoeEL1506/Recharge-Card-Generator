// let pin = [];
// let newPin;
// let amount;
// let generatedPin;
// let disp = document.getElementById("disp").innerHTML;
// let checker;

// // to generate pin
// function generate() {
//   amount = document.querySelector("#amount").value;
//   if (amount != "" && amount.length >= 3) {
//     generatedPin = Math.floor(Math.random() * 13484849435784872);
//     document.getElementById("disp").innerHTML = generatedPin;

//     if (airtime.value == "Mtn") {
//       newPin = `*556*${generatedPin}#`;
//     }
//     if (airtime.value == "Glo") {
//       newPin = `*123*${generatedPin}#`;
//     }
//     if (airtime.value == "Airtel") {
//       newPin = `*126*${generatedPin}#`;
//     }
//     if (airtime.value == "Etisalat") {
//       newPin = `*222*${generatedPin}#`;
//     }

//     pin.push({
//       amt: amount,
//       card: airtime.value,
//       code: newPin,
//       status: true,
//     });
//     console.log(pin);
//   } else if (amount.length < 3 && amount == "") {
//     alert("Invalid request");
//   } else "Enter a valid amount";
//   document.querySelector("#amount").value = "";
// }

// // SAVE PIN
// function save() {
//   tableD.innerHTML = "";
//   pin.forEach((element, i) => {
//     tableD.innerHTML = `<tr id=row>
//             <td data-label="S/N">${i + 1}</td>
//             <td data-label="AIRTIME SERVICE">${element.card}</td>
//             <td data-label="AMOUNT">${element.amt}</td>
//             <td data-label="RECHARGE PIN">${element.code}</td>
//             <td data-label="STATUS">${
//               element.status == true ? `<span class="text-white">UNUSED</span>`:`<span class="text-danger">USED</span>`}</td>
//             <td data-label="ACTION"><button class="btn btn-danger" onclick="del(${i})">Delete </button></td>
//         </tr> `;
//   });
//   savee = localStorage.setItem("pin", JSON.stringify(pin));
// }

// // localstorage savee
// get = localStorage.getItem("pin");
// function savePin() {
//   if (get) {
//     pin = JSON.parse(get);
//     save();
//   } else {
//     pin = pin;
//   }
// }
// savePin();

// // to delete per section
// function del(rmv) {
//   pin.splice(rmv, 1);
//   save();
// }

// // to recharge the card and validate

// function recharge() {
//   checker = document.querySelector('#checker');

//   let seen = false;

//   for (let i = 0; i < pin.length; i++) {
//     if (checker.value==pin[i].code && pin[i].status == true) {
//       alert("Recharge successful");
//       pin[i].status = false
//       save()
//       seen = true;
//       setTimeout(() => {
//         seen = false;
//       }, 1000); 
//     } else if (pin[i].status == false && checker.value == pin[i].code) {
//       seen = true
//       alert("used");
//     } else if (i == pin.length - 1 && seen == false) {
//       alert("invalid pin");
//     }
//   }
//   // document.querySelector('#checker').value = ""
// }



let pin = [];
let newPin;
let amount;
let generatedPin;
let disp = document.getElementById("disp").innerHTML;
let checker;

// to generate pin
function generate() {
  amount = document.querySelector("#amount").value;
  if (amount != "" && amount.length >= 3) {
    generatedPin = Math.floor(Math.random() * 13484849435784872);
    document.getElementById("disp").innerHTML = generatedPin;

    if (airtime.value == "Mtn") {
      newPin = `*310*${generatedPin}#`;
    }
    if (airtime.value == "Glo") {
      newPin = `*310*${generatedPin}#`;
    }
    if (airtime.value == "Airtel") {
      newPin = `*310*${generatedPin}#`;
    }
    if (airtime.value == "Etisalat") {
      newPin = `*222*${generatedPin}#`;
    }

    pin.push({
      amt: amount,
      card: airtime.value,
      code: newPin,
      status: true,
    });
    console.log(pin);
  } else if (amount.length < 3 && amount == "") {
    alert("Invalid request");
  } else {
    alert("Enter a valid amount");
  }
  document.querySelector("#amount").value = "";
}

// SAVE PIN
function save() {
  tableD.innerHTML = "";
  pin.forEach((element, i) => {
    tableD.insertAdjacentHTML('beforeend', `<tr id=row>
            <td data-label="S/N">${i + 1}</td>
            <td data-label="AIRTIME SERVICE">${element.card}</td>
            <td data-label="AMOUNT">${element.amt}</td>
            <td data-label="RECHARGE PIN">${element.code}</td>
            <td data-label="STATUS">${
              element.status == true ? `<span class="text-white">UNUSED</span>`:`<span class="text-danger">USED</span>`}</td>
            <td data-label="ACTION"><button class="btn btn-danger" onclick="del(${i})">Delete </button></td>
        </tr>`);
  });
  savee = localStorage.setItem("pin", JSON.stringify(pin));
}

// localstorage savee
get = localStorage.getItem("pin");
function savePin() {
  if (get) {
    pin = JSON.parse(get);
    save();
  }
}
savePin();

// to delete per section
function del(rmv) {
  pin.splice(rmv, 1);
  save();
}

// to recharge the card and validate
function recharge() {
  checker = document.querySelector('#checker');
  let valid = false;

  for (let i = 0; i < pin.length; i++) {
    if (checker.value == pin[i].code && pin[i].status == true) {
      alert("Recharge successful");
      pin[i].status = false;
      save();
      valid = true;
      break;
    } else if (pin[i].status == false && checker.value == pin[i].code) {
      alert("Used pin");
      valid = true;
      break;
    }
  }

  if (!valid) {
    alert("Invalid pin");
  }

  // document.querySelector('#checker').value = ""
}
