cartForm.addEventListener('submit', function(e){
  e.preventDefault();
  rabbi();
  window.location.href = "mail.html";
});

function rabbi(){
    var firstName = document.getElementById("Fname").value;
    var lastName = document.getElementById("Lname").value;
    var email = document.getElementById("Eemail").value;
    var phone = document.getElementById("Pphone").value;

    console.log(firstName, lastName, email, phone);

    sessionStorage.setItem('Fname', firstName);
    sessionStorage.setItem('Lname', lastName);
    sessionStorage.setItem('Eemail', email);
    sessionStorage.setItem('Pphone', phone);
}

function getSidecard(){
  const day = Number(sessionStorage.getItem('day'));
  const nights = sessionStorage.getItem('nights');

  const inweekday = sessionStorage.getItem('inWeekDay');
  const inday = day;
  const inmonth = sessionStorage.getItem('month-in');

  const outweekday = sessionStorage.getItem('outWeekDay');
  const outday = sessionStorage.getItem('dayout');
  const outmonth = sessionStorage.getItem('monthout');

  let v = document.getElementById("DispinDay");
  let w = document.getElementById("DispinDates");
  let x = document.getElementById("DispoutDay");
  let y = document.getElementById("DispoutDates");
  let z = document.getElementById("nightsDisp");

  v.innerText = inweekday;
  w.innerText = inmonth+" "+inday;
  x.innerText = outweekday;
  y.innerText = outmonth+" "+outday;
  z.innerText = nights;

  getSidecardV2();
}


function getSidecardV2(){
  const package = sessionStorage.getItem('package');
  const roomType = sessionStorage.getItem('roomType'); 
  const price = sessionStorage.getItem('price');

  let v = document.getElementById("DispPackage");
  let w = document.getElementById("Type");
  let x = document.getElementById("DispPrice");

  v.innerText = package +" room";
  w.innerText = roomType;
  x.innerText = "$"+ price;

  console.log("working")
}

function TargetCart(){
  window.location.href = "cart.html";
}
