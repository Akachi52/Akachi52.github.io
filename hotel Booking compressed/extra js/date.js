const magic = document.getElementById("magic");

magic.addEventListener('submit', function(e){
  e.preventDefault();
  PrepreRunner();
});

function PrepreRunner(){
  const month = Number(document.getElementById("monthSelected").value);
  const day = Number(document.getElementById("daySelected").value);
  const nights = Number(document.getElementById("nightsSelected").value);
  const persons = Number(document.getElementById("personsSelected").value);

 sessionStorage.setItem('month', month);
 sessionStorage.setItem('day', day);
 sessionStorage.setItem('nights', nights);

 if(persons > 4){
  alert("Sorry there are no available accomodations for up to " +persons+ " persons at this time");
 }
  else{
  preRunner();
 }
}

function preRunner(){
  const day = sessionStorage.getItem('day');
  const nights = sessionStorage.getItem('nights');

  if (nights > 2){
    var x = document.getElementById("nightsSelected");
    x.style.border = "1px solid orangered";
    console.log('no');
  }
  else if(day > 31){
    alert("Please select a valid date");
    console.log('no');
  }
  else if(isNaN(day)){
    alert("Please select a valid date");
    console.log('no');
  }
  else if(isNaN(nights)){
    alert("Please select a valid input");
    var x = document.getElementById("nightsSelected");
    x.style.border = "1px solid orangered";
    console.log('no');
  }
  else if(nights == 0){
    alert("Please select a valid input");
    var x = document.getElementById("nightsSelected");
    x.style.border = "1px solid orangered";
    console.log('no');
  }
  else{
    runner();
  }
}

//finding max
function runner(){
  const day = Number(sessionStorage.getItem('day')); 
  const nights = Number(sessionStorage.getItem('nights'));
  const month = Number(sessionStorage.getItem('month'));
  
  if(month == 10){
    let maxDate = 0 + day + nights;
    let monthIn = ('OCT');
    sessionStorage.setItem('month-in', monthIn);
    sessionStorage.setItem('maxis', maxDate);
    console.log('Max:', maxDate);
    newDate();
    getDayOut();
    allDateInfo();
   }
  
   else if(month == 11){
    if(day > 30){
      console.log('no');
    }
    else{
      let maxDate = 31 + day + nights;
      let monthIn = ('NOV');
      sessionStorage.setItem('month-in', monthIn);
      sessionStorage.setItem('maxis', maxDate);
      console.log('Max:', maxDate);
      newDate();
      getDayOut();
      allDateInfo();
    }
   }

   else if(month == 12){
    let maxDate = 61 + day + nights;
    let monthIn = ('DEC');
    sessionStorage.setItem('month-in', monthIn);
    sessionStorage.setItem('maxis', maxDate);
    console.log('Max:', maxDate);
    newDate();
    getDayOut();
    allDateInfo();
   }

   else if(month == 1){
    let maxDate = 92 + day + nights;
    let monthIn = ('JAN');
    sessionStorage.setItem('month-in', monthIn);
    sessionStorage.setItem('maxis', maxDate);
    console.log('Max:', maxDate);
    newDate();
    getDayOut();
    allDateInfo();
   }

   else if(isNaN(month)){
   console.log("no");
   alert("Please select a valid date");
   }
   else {
    var x = document.getElementById("monthSelected");
    x.style.border = "1px solid orangered";
   console.log("no");
  }  
}

//assigning new dates from max
function newDate(){
  const day = Number(sessionStorage.getItem('day'));
  const maxValue = Number(sessionStorage.getItem('maxis'));
  const monthInValue = (sessionStorage.getItem('month-in'));

    if (maxValue <= 31){
     monthOut = ('OCT');
     let dayOut = maxValue;
     let dayIn = day;

     sessionStorage.setItem('dayout', dayOut);
     sessionStorage.setItem('monthout', monthOut);

     console.log("in:", dayIn, monthInValue);
     console.log("out:", dayOut, monthOut);
    }

   else if (maxValue > 31 && maxValue <= 62){
     monthOut = ('NOV');
     let dayOut = maxValue - 31;
     let dayIn = day;

     sessionStorage.setItem('dayout', dayOut);
     sessionStorage.setItem('monthout', monthOut);

     console.log("in:", dayIn, monthInValue);
     console.log("out:", dayOut, monthOut);
    }

   else if (maxValue >= 62 && maxValue < 92){
     monthOut = ('DEC');
     let dayOut = maxValue - 61;
     let dayIn = day;

     sessionStorage.setItem('dayout', dayOut);
     sessionStorage.setItem('monthout', monthOut);

     console.log("in:", dayIn, monthInValue);
     console.log("out:", dayOut, monthOut);
  }

  else if (maxValue >= 92 && maxValue < 125){
    monthOut = ('JAN');
    let dayOut = maxValue - 92;
    let dayIn = day;

    sessionStorage.setItem('dayout', dayOut);
    sessionStorage.setItem('monthout', monthOut);

     console.log("in:", dayIn, monthInValue);
     console.log("out:", dayOut, monthOut);
  }
}

//assigning dayout name
function getDayOut(){
  const weekday = sessionStorage.getItem('maxis'); 
  const weekDay = Number(weekday);
  
  let SUN = [2,9,16,23,30,37,44,51,58,65,72,79,86,93,100,107,114,121];
  let MON = [3,10,17,24,31,38,45,52,59,66,73,80,87,94,101,108,115,122];
  let TUE = [4,11,18,25,32,39,46,53,60,67,74,81,88,95,102,109,116,123];
  let WED = [5,12,19,26,33,40,47,54,61,68,75,82,89,96,103,110,117,124];
  let THU = [6,13,20,27,34,41,48,55,62,69,76,83,90,97,104,111,118,125];
  let FRI = [7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112,119,126];
  let SAT = [1,8,15,22,29,36,43,50,57,64,71,78,85,92,99,106,113,120,127];
  
  if (SUN.includes(weekDay)){
    const dayOfWeek = ('SUN')
    sessionStorage.setItem('outWeekDay', dayOfWeek);
    console.log("out -", dayOfWeek);
  }
  else if (MON.includes(weekDay)){
    const dayOfWeek = ('MON')
    sessionStorage.setItem('outWeekDay', dayOfWeek);
    console.log("out -", dayOfWeek);
  }
  else if (TUE.includes(weekDay)){
    const dayOfWeek = ('TUE')
    sessionStorage.setItem('outWeekDay', dayOfWeek);
    console.log("out -", dayOfWeek);
  }
  else if (WED.includes(weekDay)){
    const dayOfWeek = ('WED')
    sessionStorage.setItem('outWeekDay', dayOfWeek);
    console.log("out -", dayOfWeek);
  }
  else if (THU.includes(weekDay)){
    const dayOfWeek = ('THU')
    sessionStorage.setItem('outWeekDay', dayOfWeek);
    console.log("out -", dayOfWeek);
  }
  else if (FRI.includes(weekDay)){
    const dayOfWeek = ('FRI')
    sessionStorage.setItem('outWeekDay', dayOfWeek);
    console.log("out -", dayOfWeek);
  }
  else if (SAT.includes(weekDay)){
    const dayOfWeek = ('SAT')
    sessionStorage.setItem('outWeekDay', dayOfWeek);
    console.log("out -", dayOfWeek);
  }
  else{
    const dayOfWeek = ('input error')
    sessionStorage.setItem('outWeekDay', dayOfWeek);
    console.log('hell no');
  }

  getDayIn();
}


//assigning dayin name
function getDayIn(){
  const nights = sessionStorage.getItem('nights');

  const weekday = sessionStorage.getItem('maxis'); 
  const weekDay = Number(weekday) - nights;

  
  let SUN = [2,9,16,23,30,37,44,51,58,65,72,79,86,93,100,107,114,121];
  let MON = [3,10,17,24,31,38,45,52,59,66,73,80,87,94,101,108,115,122];
  let TUE = [4,11,18,25,32,39,46,53,60,67,74,81,88,95,102,109,116,123];
  let WED = [5,12,19,26,33,40,47,54,61,68,75,82,89,96,103,110,117,124];
  let THU = [6,13,20,27,34,41,48,55,62,69,76,83,90,97,104,111,118,125];
  let FRI = [7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112,119,126];
  let SAT = [1,8,15,22,29,36,43,50,57,64,71,78,85,92,99,106,113,120,127];
  
  if (SUN.includes(weekDay)){
    const dayOfWeek = ('SUN')
    sessionStorage.setItem('inWeekDay', dayOfWeek);
    console.log("in -", dayOfWeek);
  }
  else if (MON.includes(weekDay)){
    const dayOfWeek = ('MON')
    sessionStorage.setItem('inWeekDay', dayOfWeek);
    console.log("in -", dayOfWeek);
  }
  else if (TUE.includes(weekDay)){
    const dayOfWeek = ('TUE')
    sessionStorage.setItem('inWeekDay', dayOfWeek);
    console.log("in -", dayOfWeek);
  }
  else if (WED.includes(weekDay)){
    const dayOfWeek = ('WED')
    sessionStorage.setItem('inWeekDay', dayOfWeek);
    console.log("in -", dayOfWeek);
  }
  else if (THU.includes(weekDay)){
    const dayOfWeek = ('THU')
    sessionStorage.setItem('inWeekDay', dayOfWeek);
    console.log("in -", dayOfWeek);
  }
  else if (FRI.includes(weekDay)){
    const dayOfWeek = ('FRI')
    sessionStorage.setItem('inWeekDay', dayOfWeek);
    console.log("in -", dayOfWeek);
  }
  else if (SAT.includes(weekDay)){
    const dayOfWeek = ('SAT')
    sessionStorage.setItem('inWeekDay', dayOfWeek);
    console.log("in -", dayOfWeek);
  }
  else{
    const dayOfWeek = ('input error')
    sessionStorage.setItem('outWeekDay', dayOfWeek);
    console.log('hell no');
  }
}

//displaying output
function allDateInfo(){
  const day = Number(sessionStorage.getItem('day'));
  const nights = sessionStorage.getItem('nights');

  const inweekday = sessionStorage.getItem('inWeekDay');
  const inday = day;
  const inmonth = sessionStorage.getItem('month-in');

  const outweekday = sessionStorage.getItem('outWeekDay');
  const outday = sessionStorage.getItem('dayout');
  const outmonth = sessionStorage.getItem('monthout');


  console.log('together... in:', inweekday, inday, inmonth);
  console.log('together... out:', outweekday, outday, outmonth);
  console.log('..:', nights, 'Nights');

  window.location.href = "booking.html";
}