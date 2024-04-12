function showBottomForm() {
    const package = ("single");
    let roomNoForm = document.getElementById("selectNo");
    roomNoForm.style.display = "block";
    sessionStorage.setItem('package', package);

    let a1 = document.getElementById("pkgDesc");
    let a2 = document.getElementById("pkgDesc2");
    let a3 = document.getElementById("pkgDesc3");
    let a4 = document.getElementById("pkgDesc4");
    let a5 = document.getElementById("pkgDesc5");

    a2.style.border = "none";
    a2.style.backgroundColor = "#fff";

    a3.style.border = "none";
    a3.style.backgroundColor = "#fff";

    a4.style.border = "none";
    a4.style.backgroundColor = "#fff";

    a5.style.border = "none";
    a5.style.backgroundColor = "#fff";

    a1.style.border = "2px solid #1d1a3a";
    a1.style.backgroundColor = "#f3f8fa";

    let AAA = document.getElementById("rooms");
    AAA.value = 0;
    let BBB = document.getElementById("process");
    BBB.innerText = 0;
}

function showBottomForm2() {
    const package = ("double");
    let roomNoForm = document.getElementById("selectNo");
    roomNoForm.style.display = "block";
    sessionStorage.setItem('package', package);

    let a1 = document.getElementById("pkgDesc");
    let a2 = document.getElementById("pkgDesc2");
    let a3 = document.getElementById("pkgDesc3");
    let a4 = document.getElementById("pkgDesc4");
    let a5 = document.getElementById("pkgDesc5");

    a1.style.border = "none";
    a1.style.backgroundColor = "#fff";

    a3.style.border = "none";
    a3.style.backgroundColor = "#fff";

    a4.style.border = "none";
    a4.style.backgroundColor = "#fff";

    a5.style.border = "none";
    a5.style.backgroundColor = "#fff";

    a2.style.border = "2px solid #1d1a3a";
    a2.style.backgroundColor = "#f3f8fa";

    let AAA = document.getElementById("rooms");
    AAA.value = 0;
    let BBB = document.getElementById("process");
    BBB.innerText = 0;
}

function showBottomForm3() {
    const package = ("twin");
    let roomNoForm = document.getElementById("selectNo");
    roomNoForm.style.display = "block";
    sessionStorage.setItem('package', package);


    let a1 = document.getElementById("pkgDesc");
    let a2 = document.getElementById("pkgDesc2");
    let a3 = document.getElementById("pkgDesc3");
    let a4 = document.getElementById("pkgDesc4");
    let a5 = document.getElementById("pkgDesc5");

    a2.style.border = "none";
    a2.style.backgroundColor = "#fff";

    a1.style.border = "none";
    a1.style.backgroundColor = "#fff";

    a4.style.border = "none";
    a4.style.backgroundColor = "#fff";

    a5.style.border = "none";
    a5.style.backgroundColor = "#fff";

    a3.style.border = "2px solid #1d1a3a";
    a3.style.backgroundColor = "#f3f8fa";

    let AAA = document.getElementById("rooms");
    AAA.value = 0;
    let BBB = document.getElementById("process");
    BBB.innerText = 0;
}

function showBottomForm4() {
    const package = ("tripple");
    let roomNoForm = document.getElementById("selectNo");
    roomNoForm.style.display = "block";
    sessionStorage.setItem('package', package);

    let a1 = document.getElementById("pkgDesc");
    let a2 = document.getElementById("pkgDesc2");
    let a3 = document.getElementById("pkgDesc3");
    let a4 = document.getElementById("pkgDesc4");
    let a5 = document.getElementById("pkgDesc5");

    a2.style.border = "none";
    a2.style.backgroundColor = "#fff";

    a3.style.border = "none";
    a3.style.backgroundColor = "#fff";

    a1.style.border = "none";
    a1.style.backgroundColor = "#fff";

    a5.style.border = "none";
    a5.style.backgroundColor = "#fff";

    a4.style.border = "2px solid #1d1a3a";
    a4.style.backgroundColor = "#f3f8fa";

    let AAA = document.getElementById("rooms");
    AAA.value = 0;
    let BBB = document.getElementById("process");
    BBB.innerText = 0;
}

function showBottomForm5() {
    const package = ("executive");
    let roomNoForm = document.getElementById("selectNo");
    roomNoForm.style.display = "block";
    sessionStorage.setItem('package', package);

    let a1 = document.getElementById("pkgDesc");
    let a2 = document.getElementById("pkgDesc2");
    let a3 = document.getElementById("pkgDesc3");
    let a4 = document.getElementById("pkgDesc4");
    let a5 = document.getElementById("pkgDesc5");

    a2.style.border = "none";
    a2.style.backgroundColor = "#fff";

    a3.style.border = "none";
    a3.style.backgroundColor = "#fff";

    a4.style.border = "none";
    a4.style.backgroundColor = "#fff";

    a1.style.border = "none";
    a1.style.backgroundColor = "#fff";

    a5.style.border = "2px solid #1d1a3a";
    a5.style.backgroundColor = "#f3f8fa";

    let AAA = document.getElementById("rooms");
    AAA.value = 0;
    let BBB = document.getElementById("process");
    BBB.innerText = 0;
}

noRooms.addEventListener('submit', function(e) {
    e.preventDefault();
    let AmountRooms = Number(document.getElementById("rooms").value);
    let Rooms = document.getElementById("rooms");

    if (AmountRooms > 2) {
        console.log("no", AmountRooms);
        alert("There are not up to " + AmountRooms + " avaiable rooms at this time");
    } else if (AmountRooms == 0) {
        console.log("no", AmountRooms);
        alert("Please select a valid input");
    } else if (isNaN(AmountRooms)) {
        console.log("no", AmountRooms);
        alert("Please select a valid input");
    } else {
        sessionStorage.setItem('rooms', AmountRooms);
        Rooms.style.border = "1px solid #000";
        console.log("yh", AmountRooms);
        next();
    }
});

function next() {
    const rooms = sessionStorage.getItem('rooms');

    let Bottom = document.getElementById("proceed");
    let pretext = document.getElementById("process");

    pretext.innerText = rooms;
    Bottom.style.display = "block";
    GetInprice();
}

//getting in price
function GetInprice() {
    const package = sessionStorage.getItem('package');
    const nights = sessionStorage.getItem('nights');
    const outday = sessionStorage.getItem('maxis');
    const inday = outday - nights;

    sessionStorage.setItem('INININ', inday);
    sessionStorage.setItem('OUTOUTOUT', outday);

    console.log(inday, outday);

    let sunday = [2, 9, 16, 23, 30, 37, 44, 51, 58, 65, 72, 79, 86, 93, 100, 107, 114, 121];
    let monday = [3, 10, 17, 24, 31, 38, 45, 52, 59, 66, 73, 80, 87, 101, 108, 115, 122];
    let tuesday = [4, 11, 18, 25, 32, 39, 46, 53, 60, 67, 74, 81, 88, 102, 109, 116, 123];
    let wednesday = [5, 12, 19, 26, 33, 40, 47, 54, 61, 68, 75, 82, 89, 103, 110, 117, 124];
    let thursday = [6, 13, 20, 27, 34, 41, 48, 55, 62, 69, 76, 83, 90, 97, 104, 111, 118, 125];
    let friday = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126];
    let saturday = [1, 8, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 113, 120, 127];

    //single package
    if (sunday.includes(inday) && package == "single") {
        let inPrice = 94;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("exp");
    } else if (monday.includes(inday) && package == "single") {
        let inPrice = 80;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (tuesday.includes(inday) && package == "single") {
        let inPrice = 80;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (wednesday.includes(inday) && package == "single") {
        let inPrice = 80;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (thursday.includes(inday) && package == "single") {
        let inPrice = 80;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (friday.includes(inday) && package == "single") {
        let inPrice = 94;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("exp", inPrice);
    } else if (saturday.includes(inday) && package == "single") {
        let inPrice = 94;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("exp", inPrice);
    }

    // double package
    else if (sunday.includes(inday) && package == "double") {
        let inPrice = 120;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("exp");
    } else if (monday.includes(inday) && package == "double") {
        let inPrice = 107;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (tuesday.includes(inday) && package == "double") {
        let inPrice = 107;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (wednesday.includes(inday) && package == "double") {
        let inPrice = 107;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (thursday.includes(inday) && package == "double") {
        let inPrice = 107;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (friday.includes(inday) && package == "double") {
        let inPrice = 120;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("exp", inPrice);
    } else if (saturday.includes(inday) && package == "double") {
        let inPrice = 120;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("exp", inPrice);
    }

    //twin package
    else if (sunday.includes(inday) && package == "twin") {
        let inPrice = 120;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("exp");
    } else if (monday.includes(inday) && package == "twin") {
        let inPrice = 107;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (tuesday.includes(inday) && package == "twin") {
        let inPrice = 107;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (wednesday.includes(inday) && package == "twin") {
        let inPrice = 107;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (thursday.includes(inday) && package == "twin") {
        let inPrice = 107;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (friday.includes(inday) && package == "twin") {
        let inPrice = 120;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("exp", inPrice);
    } else if (saturday.includes(inday) && package == "twin") {
        let inPrice = 120;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("exp", inPrice);
    }

    //tripple package
    else if (sunday.includes(inday) && package == "tripple") {
        let inPrice = 135;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("exp");
    } else if (monday.includes(inday) && package == "tripple") {
        let inPrice = 115;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (tuesday.includes(inday) && package == "tripple") {
        let inPrice = 115;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (wednesday.includes(inday) && package == "tripple") {
        let inPrice = 115;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (thursday.includes(inday) && package == "tripple") {
        let inPrice = 115;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (friday.includes(inday) && package == "tripple") {
        let inPrice = 135;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("exp", inPrice);
    } else if (saturday.includes(inday) && package == "tripple") {
        let inPrice = 135;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("exp", inPrice);
    }

    //executive package
    else if (sunday.includes(inday) && package == "executive") {
        let inPrice = 240;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("exp");
    } else if (monday.includes(inday) && package == "executive") {
        let inPrice = 240;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (tuesday.includes(inday) && package == "executive") {
        let inPrice = 240;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (wednesday.includes(inday) && package == "executive") {
        let inPrice = 240;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (thursday.includes(inday) && package == "executive") {
        let inPrice = 240;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("chp", inPrice);
    } else if (friday.includes(inday) && package == "executive") {
        let inPrice = 240;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("exp", inPrice);
    } else if (saturday.includes(inday) && package == "executive") {
        let inPrice = 240;
        sessionStorage.setItem('inPrice', inPrice);
        console.log("exp", inPrice);
    }

    GetOutprice();
}

//getting out price
function GetOutprice() {
    const package = sessionStorage.getItem('package');
    const maxx = Number(sessionStorage.getItem('maxis'));
    let max = maxx - 1;

    let sunday = [2, 9, 16, 23, 30, 37, 44, 51, 58, 65, 72, 79, 86, 93, 100, 107, 114, 121];
    let monday = [3, 10, 17, 24, 31, 38, 45, 52, 59, 66, 73, 80, 87, 101, 108, 115, 122];
    let tuesday = [4, 11, 18, 25, 32, 39, 46, 53, 60, 67, 74, 81, 88, 102, 109, 116, 123];
    let wednesday = [5, 12, 19, 26, 33, 40, 47, 54, 61, 68, 75, 82, 89, 103, 110, 117, 124];
    let thursday = [6, 13, 20, 27, 34, 41, 48, 55, 62, 69, 76, 83, 90, 97, 104, 111, 118, 125];
    let friday = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126];
    let saturday = [1, 8, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 113, 120, 127];

    //single package
    if (package == "single" && sunday.includes(max)) {
        var outPrice = 90;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("exp", outPrice);
    } else if (package == "single" && monday.includes(max)) {
        var outPrice = 74;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp", outPrice);
    } else if (package == "single" && tuesday.includes(max)) {
        var outPrice = 74;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp");
    } else if (package == "single" && wednesday.includes(max)) {
        var outPrice = 74;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp");
    } else if (package == "single" && thursday.includes(max)) {
        var outPrice = 74;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp");
    } else if (package == "single" && friday.includes(max)) {
        var outPrice = 90;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("exp", outPrice);
    } else if (package == "single" && saturday.includes(max)) {
        var outPrice = 90;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("exp");
    }

    //double package
    else if (package == "double" && sunday.includes(max)) {
        var outPrice = 105;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("exp", outPrice);
    } else if (package == "double" && monday.includes(max)) {
        var outPrice = 85;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp", outPrice);
    } else if (package == "double" && tuesday.includes(max)) {
        var outPrice = 85;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp");
    } else if (package == "double" && wednesday.includes(max)) {
        var outPrice = 85;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp");
    } else if (package == "double" && thursday.includes(max)) {
        var outPrice = 85;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp");
    } else if (package == "double" && friday.includes(max)) {
        var outPrice = 105;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("exp", outPrice);
    } else if (package == "double" && saturday.includes(max)) {
        var outPrice = 105;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("exp");
    }

    //twin
    else if (package == "twin" && sunday.includes(max)) {
        var outPrice = 105;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("exp", outPrice);
    } else if (package == "twin" && monday.includes(max)) {
        var outPrice = 85;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp", outPrice);
    } else if (package == "twin" && tuesday.includes(max)) {
        var outPrice = 85;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp");
    } else if (package == "twin" && wednesday.includes(max)) {
        var outPrice = 85;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp");
    } else if (package == "twin" && thursday.includes(max)) {
        var outPrice = 85;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp");
    } else if (package == "twin" && friday.includes(max)) {
        var outPrice = 105;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("exp", outPrice);
    } else if (package == "twin" && saturday.includes(max)) {
        var outPrice = 105;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("exp");
    }

    //tripple
    else if (package == "tripple" && sunday.includes(max)) {
        var outPrice = 130;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("exp", outPrice);
    } else if (package == "tripple" && monday.includes(max)) {
        var outPrice = 95;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp", outPrice);
    } else if (package == "tripple" && tuesday.includes(max)) {
        var outPrice = 95;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp");
    } else if (package == "tripple" && wednesday.includes(max)) {
        var outPrice = 95;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp");
    } else if (package == "tripple" && thursday.includes(max)) {
        var outPrice = 95;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp");
    } else if (package == "tripple" && friday.includes(max)) {
        var outPrice = 130;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("exp", outPrice);
    } else if (package == "tripple" && saturday.includes(max)) {
        var outPrice = 130;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("exp");
    }

    //executive
    else if (package == "executive" && sunday.includes(max)) {
        var outPrice = 240;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("exp", outPrice);
    } else if (package == "executive" && monday.includes(max)) {
        var outPrice = 240;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp", outPrice);
    } else if (package == "executive" && tuesday.includes(max)) {
        var outPrice = 240;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp");
    } else if (package == "executive" && wednesday.includes(max)) {
        var outPrice = 240;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp");
    } else if (package == "executive" && thursday.includes(max)) {
        var outPrice = 240;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("chp");
    } else if (package == "executive" && friday.includes(max)) {
        var outPrice = 240;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("exp", outPrice);
    } else if (package == "executive" && saturday.includes(max)) {
        var outPrice = 240;
        sessionStorage.setItem('outPrice', outPrice);
        console.log("exp");
    } else {
        console.log("no");
    }

    price();
}

function price() {
    const nights = Number(sessionStorage.getItem('nights'))
    const inPrice = Number(sessionStorage.getItem('inPrice'));
    const outPrice = Number(sessionStorage.getItem('outPrice'));
    const rooms = Number(sessionStorage.getItem('rooms'));


    var price = 0;
    if (nights == 1) {
        price = rooms * inPrice;
        sessionStorage.setItem('price', price);
    } else {
        price = rooms * (inPrice + outPrice);
        sessionStorage.setItem('price', price);
    }
    console.log('price:', price);
    const roomType = ("Room Only");
    sessionStorage.setItem('roomType', roomType);
}

function targetbnb() {
    window.location.href = "bnb(2).html";
}

function targetDnight() {
    window.location.href = "date(2).html";
}

let bXb = 0;

function displaypkg() {
    let a = document.getElementById("pkgSelect");
    bXb += 1;

    if (bXb % 2 == 1) {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}