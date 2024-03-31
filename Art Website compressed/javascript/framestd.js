function createfm(){
    var x = document.getElementById("fm")
    var y = document.getElementById("extxts")
    var z = document.getElementById("pretexts")

    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "none";
}
function closefm(){
    var x = document.getElementById("fm")
    var y = document.getElementById("extxts")
    var z = document.getElementById("pretexts")

    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
}